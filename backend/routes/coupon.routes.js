import express from "express"
import { protectRoute } from "../middlewares/auth.middlewares.js"
import { getAllCoupons, getOneCoupon, createCoupon, deleteCoupon, updateCoupon } from "../controllers/coupon.controllers.js"

const router = express.Router()

router.get("/", getAllCoupons)
router.get("/:couponId", getOneCoupon)
router.post("/", createCoupon)
router.delete("/:couponId", deleteCoupon)
router.put("/:couponId", updateCoupon)

export default router