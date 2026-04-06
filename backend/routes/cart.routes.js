import express from "express"
import { protectRoute } from "../middlewares/auth.middlewares.js" 
import { getCart, addToCart } from "../controllers/cart.controllers.js"
const router = express.Router()

router.get("/", protectRoute, getCart)
router.post("/", protectRoute, addToCart)

export default router