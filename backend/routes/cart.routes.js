import express from "express"
import { protectRoute } from "../middlewares/auth.middlewares.js" 
import { getCart, addToCart, deleteCart, updateQuantity } from "../controllers/cart.controllers.js"
const router = express.Router()

router.get("/", protectRoute, getCart)
router.post("/", protectRoute, addToCart)
router.delete("/", protectRoute, deleteCart)
router.put("/:id", protectRoute, updateQuantity)

export default router