import express from "express"
import { protectRoute } from "../middlewares/auth.middlewares.js"
import { getCoupon } from "../controllers/coupon.controllers.js"

const router = express.Router()

router.get("/", protectRoute, getCoupon)

export default router