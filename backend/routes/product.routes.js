import express from "express"

import {  } from "../controllers/product.controllers.js"
import { protectRoute, adminRoute } from "./middlewares/auth.middlewares.js"

const router = express.Router()

// router.get("/", protectRoute, adminRoute, getAllProducts)

export default router