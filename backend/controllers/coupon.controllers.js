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