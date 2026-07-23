import express from "express"

import { getAllProducts, getOneProduct, createProduct, deleteProduct, getByCollection, updateProduct} from "../controllers/product.controllers.js"
import { protectRoute, adminRoute } from "../middlewares/auth.middlewares.js"

const router = express.Router()

router.get("/", getAllProducts)
router.get("/:productId", getOneProduct)
// router.get("/recommended", getRecommended)
router.get("/collection/:collectionName", getByCollection)
router.post("/", protectRoute, adminRoute, createProduct)
router.delete("/:productId", protectRoute, adminRoute, deleteProduct)
router.put("/:productId", protectRoute, adminRoute, updateProduct)
// router.put("/:id", protectRoute, adminRoute, toggleFeatured)


export default router