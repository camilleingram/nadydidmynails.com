import User from "../models/user.model.js"
import Product from "../models/product.model.js"
import { redis } from "../lib/redis.js"
import jwt from "jsonwebtoken"
import cloudinary from "../lib/cloudinary.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getFeaturedProducts = async (req, res) => {
    try {
        const featured = await Product.find({isFeatured: true})

        if(featured) {
            return res.status(200)
        }

        return res.status(404).json({message: "Featured products not found"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createProduct = async (req, res) => {
     try {
        
        const {name, description, price, image, category} = req.body

        const cloudinaryResponse = null

        if(image) {
            await cloudinary.uploader.upload(image, {folder: products})
        }

        const product = await Product.create({
            name,
            description,
            price,
            image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
            category
        })

        res.status(201).json(product, {message: "Product created successfully"})

     } catch (error) {
        res.status(500).json({message: "Error with createProduct function"})
     }
}