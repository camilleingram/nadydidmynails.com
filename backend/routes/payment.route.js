import express from "express"
import { protectRoute } from "../middlewares/auth.middlewares.js"
import { createCheckoutSession } from "../controllers/payment.controllers.js"

const router = express.Router()

router.post("/create-checkout-session", protectRoute, createCheckoutSession)

export default router