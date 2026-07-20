import Order from "../models/order.model.js"
import User from "../models/user.model.js"
import Stripe from "../lib/stripe.js"
import { overwriteMiddlewareResult } from "mongoose"

export const getAllRefunds = async (req, res) => {
    try {
        
        const refunds = await Order.find({refundStatus: true})
        
        if(!refunds) {
            res.status(400).json({message: "No refunds found"})
        }

        res.status(200).json({
            message: "Refunds found successfully",
            refunds: refunds
        })
    } catch (error) {
        console.log("Error in getAllRefunds controller", error,message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}
