import Coupon from "../models/coupon.model.js"

export const getCoupon = async (res, req) => {
     try {
        const user = req.user

        const foundCoupon = await Coupon.findOne({userId: user.id, isActive: true})

        if(foundCoupon) {
            res.status(200).json({message: "Coupon found"}, foundCoupon)
        }else {
            res.status(404).json({message: "Coupon not found"}, null)
        }
        
     } catch (error) {
        console.log("error in getCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
     }
}

export const validateCoupon = async (res, req) => {
     try {
        const {couponCode} = req.body
        const user = req.user

        const foundCoupon = await Coupon.findOne({code: couponCode, userId: user._id, isActive: true })

        if(!foundCoupon) {
            return res.status(404).json({message: "Coupon not found"})
        }

        if(foundCoupon.expirationDate < new Date()) {
            foundCoupon.isActive = false
            await foundCoupon.save()
            return res.status(200).json({
                message: "Coupon expired and deactivated",
                coupon: foundCoupon

            })
        }

        res.status(200).json({
            message: "Coupon found and valid",
            code: couponCode,
            discountPercentage: foundCoupon.discountPercentage

        })

     } catch (error) {
        console.log("Error in validateCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
     }
}