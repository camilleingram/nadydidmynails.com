import express from "express"
import { protectRoute } from "../middlewares/auth.middlewares.js" 
import { getCart } from "../controllers/cart.controllers.js"
const router = express.Router()

router.get("/", protectRoute, getCart)

export default router