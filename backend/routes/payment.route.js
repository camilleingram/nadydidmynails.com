import express from "express"
import { protectRoute } from "../middlewares/auth.middlewares.js"
import { createCheckoutSession, checkoutSuccess} from "../controllers/payment.controllers.js"

const router = express.Router()

router.post("/create-checkout-session", createCheckoutSession)
router.post("/checkout-success", checkoutSuccess)

export default router