import User from "../models/user.model.js"
import Product from "../models/product.model.js"
import { redis } from "../lib/redis.js"
import jwt from "jsonwebtoken"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getFeaturedProducts = (req, res) => {
    try {
        const featured = Product.find({isFeatured: true})

        if(featured) {
            return res.status(200)
        }

        return res.status(404).json({message: "Featured products not found"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}