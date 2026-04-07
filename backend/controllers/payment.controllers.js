import Coupon from "../models/coupon.model.js"
import Order from "../models/order.model.js"
import Stripe from "../lib/stripe.js"

export const createCheckoutSession = async (req, res) => {
    try {
        const { products, couponCode } = req.body

        if(!Array.isArray(products) || products.length === 0) {
            return res.status(400).json({message: "Products is invalid or empty"})
        }

        const totalAmount = 0

        const lineItems = products.map((item) => {
            const amount = item.price * 100
            totalAmount += amount * item.quantity

            return { 
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                        image: [products.image]
                    },
                    unit_amount: amount
                }
            }
        })

        const coupon = null

        if(couponCode) {
            const coupon = await Coupon.findOne({code: couponCode, userId: req.user._id, isActive: true})
            
            if(coupon) {
                totalAmount -= totalAmount * (coupon.discountPercentage / 100)
                return res.status(200).json({message: "Coupon applied"})
            }
        }

        const session = await Stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payments",
            success_url: `${process.env.BASE_URL}/success`,
            return_url: `${process.env.BASE_URL}/return`,
            discounts: coupon ? [
                {
                    coupon: await createStripeCoupon(coupon.discountPercentage)
                },
            ] : [],
            metadata: {
                userId: req.user._id.toString(),
                couponCode: couponCode || "",
                products: JSON.stringify(
                    products.map((product) => {
                        return {
                            id: product._id,
                            quantity: product.quantity,
                            price: product.price
                        }
                    })
                )
            }
        })

        if(totalAmount >= 20000) {
            const coupon = await createDbCoupon(req.user._id)
        }

        res.status(200).json({ id: session.id, totalAmount: totalAmount / 100 });


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
        if(session.metadata.couponCode) {
            await Coupon.findOneAndUpdate({code: session.metadata.couponCode, userId: session.metadata.userId}, {isActive: false})
        }

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

const createStripeCoupon = async (discountPercentage) => {
    try {
        const coupon = await Stripe.coupons.create({
            percent_off: discountPercentage,
            duration: "once"
        })

        res.status(201).json({message: "Coupon created successfully"})

        return coupon._id
    } catch (error) {
        console.log("Error in createStripeCoupon helper function", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

const createDbCoupon = async (userId) => {
    try {
        const coupon = new Coupon({
            code: "TEST",
            discountPercentage: 25,
            expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            userId: userId
        })

        await coupon.save()
        res.status(201).json({message: "Coupon created successfully", coupon: coupon})

        return coupon
        
    } catch (error) {
        console.log("Error in createDbCoupon helper function")
        res.status(500).json({message: "Server error", error: error.message})
    }
    
}