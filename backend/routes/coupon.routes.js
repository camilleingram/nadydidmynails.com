import express from "express"
import { protectRoute, adminRoute } from "../middlewares/auth.middlewares.js"
import { getAllCoupons, getOneCoupon, createCoupon, deleteCoupon, updateCoupon, validateCoupon } from "../controllers/coupon.controllers.js"

const router = express.Router()

router.get("/", protectRoute, adminRoute, getAllCoupons)
router.get("/:couponId", getOneCoupon)
router.post("/", protectRoute, adminRoute, createCoupon)
router.delete("/:couponId", protectRoute, adminRoute, deleteCoupon)
router.put("/:couponId", protectRoute, adminRoute, updateCoupon)
router.post("/validate/:couponId", validateCoupon)

export default router