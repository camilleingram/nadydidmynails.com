import express from "express",
import { protectRoute, adminRoute } from "../middlewares/auth.middlewares.js"
import { getAllRefunds, getOneRefund, createRefund, deleteRefund } from "../controllers/refund.controllers.js"

const router = express.Router()

router.get("/", protectRoute, adminRoute, getAllRefunds)
router.get("/:refundId", protectRoute, adminRoute, getOneRefund)
router.post("/", protectRoute, createRefund)
router.delete("/:refundId", protectRoute, adminRoute, deleteRefund)

export default router