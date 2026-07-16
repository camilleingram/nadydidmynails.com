import Coupon from "../models/coupon.model.js"
import Order from "../models/order.model.js"
import User from "../models/user.model.js"
import Stripe from "../lib/stripe.js"

export const createCheckoutSession = async (req, res) => {
    try {
        const { cartItems, couponCode } = req.body

        if(!Array.isArray(cartItems) || cartItems.length === 0) {
            return res.status(400).json({message: "Products is invalid or empty"})
        }

        const totalAmount = 0

        const lineItems = cartItems.map((cartItem) => {
            const amount = cartItem.price * 100
            totalAmount += amount * cartItem.quantity

            return {
                adjustable_quantity: "enabled",
                quantity: cartItem.quantity,
                price: cartItem.price,
                price_data: {
                    currency: "usd",
                    tax_behavior: "exclusive",
                    product: cartItem._id,
                    product_data: {
                        name: cartItem.name,
                        images: cartItem.images,
                        metadata:{
                            collection: cartItem.collection,
                            color: cartItem.color,
                            height: cartItem.height,
                            size: cartItem.size,
                            shape: cartItem.shape,
                        }
                    },
                    unit_amount: amount

                }
            }
        })

        let coupon = null

        if(couponCode) {
            coupon = await Coupon.findOne({code: couponCode})
            
            if(coupon) {
                if(coupon.discount.discountType == "fixed amount") {
                    totalAmount -= coupon.discount.discountAmount
                }else if(coupon.discount.discountType == "percentage") {
                    totalAmount -= totalAmount * (coupon.discount.discountAmount / 100)
                }
                return res.status(200).json({message: "Coupon applied"})
            }
        }

        const session = await Stripe.checkout.sessions.create({
            payment_method_collection: "if_required",
            payment_method_types: ["card", "afterpay_clearpay", "cashapp", "klarna", "paypal"],
            line_items: lineItems,
            mode: "payment",
            automatic_tax: "enabled",
            billing_address_collection: "auto",
            shipping_address_collection: {
                allowed_countries: ["US", "CA"],

            },
            success_url: `${process.env.BASE_URL}/confirmation`,
            return_url: `${process.env.BASE_URL}/cart`,
            cancel_url: `${process.env.BASE_URL}/cart`,
            discounts: coupon ? [
                {
                    coupon: await createStripeCoupon(couponCode)
                },
            ] : [],
            metadata: {
                userId: req.user._id.toString(),
                couponCode: couponCode || "",
                cartItems: JSON.stringify(
                    cartItems.map((cartItem) => {
                        return {
                            id: cartItem._id,
                            name: cartItem.name,
                            collection: cartItem.collection,
                            color: cartItem.color,
                            height: cartItem.height,
                            size: cartItem.size,
                            shape: cartItem.shape,
                            quantity: cartItem.quantity,
                            price: cartItem.price
                        }
                    })
                )
            }
        })

        return res.status(200).json({
            message: "Checkout session created successfully", 
            id: session.id, 
            totalAmount: totalAmount / 100 
        });

    } catch (error) {
        console.log("Error in createCheckoutSession controller", error,message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const checkoutSuccess = async (req, res) => {
    try {
       const { sessionId } = req.body
       
       const session = await Stripe.checkout.sessions.retrieve(sessionId)

       if (session.payment_status === "paid") {
        
            const products = JSON.parse(session.metadata.products)

            const order = new Order({
            user: session.metadata.userId,
            products: products.map((product) => {
                return {
                    product: product._id,
                    quantity: product.quantity,
                    price: product.price
                }
            }),
            totalAmount: session.amount_total / 100,
            stripeSessionId: session.id
        })

        await order.save()
        res.status(201).json({message: "Payment successful, New order created, coupon deactivated", order: order})
       }
    } catch (error) {
        console.log("Error in checkoutSuccess controller")
        res.status(500).json({message: "Server error", error: error.message})
    }
}

const createStripeCoupon = async (couponCode) => {
    try {
        let stripeCoupon = null
        const foundCoupon = await Coupon.findOne({code: couponCode})

        if(foundCoupon.discount.discountType == "fixed amount") {
            stripeCoupon = await Stripe.coupons.create({
                id: foundCoupon._id,
                amount_off: foundCoupon.discount.discountAmount,
                currency: "usd",
                duration: "once",
                name: foundCoupon.name,
                metadata: {
                    uses: foundCoupon.uses,
                    minValue: foundCoupon.minValue,
                    expirationDate: foundCoupon.expirationdate
                }
            })
        }else if(coupon.discount.discountType == "percentage") {
            stripeCoupon = await Stripe.coupons.create({
                id: foundCoupon._id,
                percent_off: foundCoupon.discount.discountAmount,
                duration: "once",
                currency: "usd",
                name: foundCoupon.name,
                metadata: {
                    uses: foundCoupon.uses,
                    minValue: foundCoupon.minValue,
                    expirationDate: foundCoupon.expirationdate
                }
            })
        }

        res.status(201).json({message: "Coupon created successfully"})

        return foundCoupon._id
    } catch (error) {
        console.log("Error in createStripeCoupon helper function", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}
