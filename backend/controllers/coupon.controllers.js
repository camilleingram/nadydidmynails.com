import Coupon from "../models/coupon.model.js"

export const getAllCoupons = async (res, req) => {
     try {
        
        const coupons = await Coupon.find({})

        if(!coupons) {
            return res.status(400),json({message: "Coupons not found"})
        }

        return res.status(200).json({
            message: "Coupons fetched successfully",
            coupons: coupons
        })
        
     } catch (error) {
        console.log("error in getAllCoupons controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
     }
}

export const getOneCoupon = (req, res) => {
    try {
        
        const { couponId } = req.params
        const foundCoupon = await Coupon.findOneById(couponId)

        if(!foundCoupon) {
            return res.status(400).json({message: "Coupon not found"})
        }

        return res.status(200).json({
            message: "Coupon fetched successfully",
            coupon: foundCoupon
        })

    } catch (error) {
        console.log("error in getOneCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const validateCoupon = async (res, req) => {
     try {
        const { couponCode } = req.body
        const { user } = req.user

        const foundCoupon = await Coupon.findOne({code: couponCode, isActive: true })
        const userCartItems = user.cartItems
        const matchedProducts = userCartItems.map((cartItem) => {
            foundCoupon.products.forEach((product) => product._id === cartItem._id)
        })
        const matchedCollections = userCartItems.map((cartItem) => {
            foundCoupon.collections.forEach((collection) => collection._id === cartItem.collection)
        })
        
        const totalPrice = 0 
        
        userCartItems.forEach((cartItem) => {
            totalPrice += cartItem.price 
        })


        if(!foundCoupon) {
            return res.status(400).json({message: "Coupon not found"})
        }

        if(foundCoupon.expirationDate < new Date()) {
            foundCoupon.isActive = false
            await foundCoupon.save()
            return res.status(200).json({
                message: "Coupon expired and deactivated",
                coupon: foundCoupon

            })
        }

        if(!matchedProducts || !matchedCollections) {
            return res.status(200).json({
                message: "Cart not valid for items in cart",
                coupon: foundCoupon
            })
        }

        if(totalPrice < foundCoupon.minValue) {
            return res.status(200).json({
                message: "Cart total less than minimum value",
                coupon: foundCoupon
            })
        }

        foundCoupon.uses += 1
        await coupon.save()

        res.status(200).json({
            message: "Coupon found and valid",
            name: foundCoupon.name,
            code: couponCode,
            discountType: foundCoupon.discount.discountType,
            discountAmount: foundCoupon.discount.discountAmount
        })

     } catch (error) {
        console.log("Error in validateCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
     }
}