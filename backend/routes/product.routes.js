import express from "express"

import { getAllProducts, getFeaturedProducts, createProduct, deleteProduct, getRecommended, getByCategory, toggleFeatured } from "../controllers/product.controllers.js"
import { protectRoute, adminRoute } from "../middlewares/auth.middlewares.js"

const router = express.Router()

router.get("/", protectRoute, adminRoute, getAllProducts)
router.get("/featured", getFeaturedProducts)
router.get("/recommended", getRecommended)
router.get("/category/:category", getByCategory)
router.post("/", protectRoute, adminRoute, createProduct)
router.delete("/:id", protectRoute, adminRoute, deleteProduct)
router.put("/:id", protectRoute, adminRoute, toggleFeatured)


export default router