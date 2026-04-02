import User from "../models/user.model.js"
import Product from "../models/product.model.js"
import { redis } from "../lib/redis.js"
import jwt from "jsonwebtoken"

export const getAllProducts = (req, res) => {
    try {
        const products = Product.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}