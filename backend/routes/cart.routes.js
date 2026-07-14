import express from "express"
import { protectRoute } from "../middlewares/auth.middlewares.js" 
import { getCart, addToCart, deleteCartItems, clearCart, updateQuantity } from "../controllers/cart.controllers.js"
const router = express.Router()

router.get("/", getCart)
router.post("/", addToCart)
router.delete("/:id", deleteCartItems)
router.delete("/", clearCart)
router.put("/:id", updateQuantity)

export default router