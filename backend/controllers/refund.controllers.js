import Order from "../models/order.model.js"
import User from "../models/user.model.js"
import Stripe from "../lib/stripe.js"
import { overwriteMiddlewareResult } from "mongoose"

export const getAllRefunds = async (req, res) => {
    try {
        
        const refunds = await Order.find({refundStatus: true})
        
        if(!refunds) {
           return res.status(400).json({message: "No refunds found"})
        }

        return res.status(200).json({
            message: "Refunds fetched successfully",
            refunds: refunds
        })
    } catch (error) {
        console.log("Error in getAllRefunds controller", error,message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const getOneRefund = async (req, res) => {
    try {

        const { orderId } = req.params

        const foundOrder = await Order.find({_id: orderId, refundStatus: true})

        if(!foundOrder) {
            return res.status(400).json({message: "Order not found"})
        }

        return res.status(200).json({
            message: "Refund fetched successfully",
            refund : foundOrder
        })
    } catch (error) {
        console.log("Error in getOneRefund controller", error,message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const createRefund = async (req, res) => {
    try {
        const { orderId } = req.body

        const foundOrder = await Order.findById(orderId)

        if(!foundOrder) {
            return res.status(400).json({message: "Order not found"})
        }

        const stripeSessionId = foundOrder.stripeSessionId

        const session = await Stripe.checkout.sessions.retrieve(stripeSessionId, {
        expand: ["payment_intent"]
       })

        const paymentIntentId = session.payment_intent.id

        const refund = await Stripe.refunds.create({
            payment_intent: paymentIntentId,
        })

        foundOrder.refundId = refund.id
        foundOrder.refundStatus = true

        await foundOrder.save()

        return res.status(200).json({
            message: "Refund made successfully",
            refund: refund
        })

    } catch (error) {
        console.log("Error in getOneRefund controller", error,message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}
