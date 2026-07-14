import express from "express"

import { getAllProducts, createProduct, deleteProduct, getByCategory,} from "../controllers/product.controllers.js"
import { protectRoute, adminRoute } from "../middlewares/auth.middlewares.js"

const router = express.Router()

router.get("/", getAllProducts)
// router.get("/recommended", getRecommended)
router.get("/collection/:collection", getByCollection)
router.post("/", protectRoute, adminRoute, createProduct)
router.delete("/:id", protectRoute, adminRoute, deleteProduct)
// router.put("/:id", protectRoute, adminRoute, toggleFeatured)


export default router