import express from "express"
import { protectRoute, adminRoute } from "../middlewares/auth.middleware.js"
import { createShipLabel, createReturnLabel } from "../controllers/shipping.controllers.js"

const router = express.Router()

router.post("/", protectRoute, adminRoute, createShipLabel)
router.post("/", protectRoute, adminRoute, createReturnLabel)

export default router