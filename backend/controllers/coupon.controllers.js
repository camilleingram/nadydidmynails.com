import Coupon from "../models/coupon.model.js"

export const getAllCoupons = async (res, req) => {
     try {
        
        const coupons = await Coupon.find({})

        if(coupons) {
            res.status(200).json(coupons, {message: "Coupons found successfully"})
        }else {
            res.status(400).json({message: "Coupons not found"})
        }
        
     } catch (error) {
        console.log("error in getAllCoupons controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
     }
}

export const getOneCoupon = (req, res) => {
    try {
        
        const { couponId } = req.params
        const foundCoupon = await Coupon.findOneById(couponId)

        if(foundCoupon) {
            res.status(200).json(foundCoupon, {message: "Coupon found successfully"})
        } else {
            res.status(400).json({message: "Coupon not found"})
        }

    } catch (error) {
        console.log("error in getOneCoupon controller", error.message)
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