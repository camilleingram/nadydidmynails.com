import express from "express"

import {getAllCollections, getCollectionProducts, createCollection, deleteCollection, addToCollection} from "../controllers/collection.controllers.js"

import { protectRoute, adminRoute } from "../middlewares/auth.middlewares.js"

const router = express.Router()

router.get("/", getAllCollections)
router.get("/products", getCollectionProducts)
router.post("/", protectRoute, adminRoute, createCollection)
router.delete("/:name",protectRoute, adminRoute, deleteCollection)
router.post("/products", protectRoute, adminRoute, addToCollection)


export default router
