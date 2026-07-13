import Product from "../models/product.model.js"
import { redis } from "../lib/redis.js"
import cloudinary from "../lib/cloudinary.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createProduct = async (req, res) => {
     try {
        
        const {name, collection, price, description, color, length, shape, size, images, } = req.body

        const cloudinaryResponse = null

        if(images.length <= 0) {
            images.forEach(image => {
                cloudinaryResponse = await cloudinary.uploader.upload(image, {folder: products})
            });
            
        }

        const product = await Product.create({
            name,
            collection,
            price,
            description,
            color,
            length,
            shape,
            size,
            images: images.forEach(image => {
                cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : ""
            }),
        })

        res.status(201).json(product, {message: "Product created successfully"})

     } catch (error) {
        res.status(500).json({message: "Error with createProduct function"})
     }
}

export const deleteProduct =  async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if(!product) {
            res.status(400).json({message: "Product not found"})
        }

        if(product.images.length > 0) {
            images.forEach(image => {
                const publicId = product.image.split("/").pop().split(".")[0]

                try {
                    
                    await cloudinary.uploader.destroy(`products/${publicId}`)
                    
                } catch (error) {
                    res.status(400).json({message: "Unable to delete image"})
                }
            })
        }

        await Product.findByIdAndDelete(req.params.id)

        res.status(204).json({message: "Product deleted successfully"})
        
    } catch (error) {
        res.status(500).json({message: "Error with deleteProduct function"})
    }
}

export const getRecommended = async (req, res) => {
    try {
        
        const recommended = await Product.aggregate([
            {
                $sample: {size: 3}
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    price: 1,
                    image: 1,
                    description: 1
                }
            }
        ])

        res.json(recommended)

    } catch (error) {
        res.status(500).json({message: "Error with getRecommended function"})
    }
}

export const getByCategory = async (req, res) => {
    try {
        const {category} = req.params

        const products = await Product.find({category})

        res.json({products})


    } catch (error) {
        res.status(500).json({message: "Error with getByCategory function"})
    }
}

export const toggleFeatured = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if(product) {
            product.isFeatured = !product.isFeatured
            const updatedProduct = await product.save()
            
            updatedCache()

            res.json(updatedProduct)
        }

        res.status(404).json({message: "Product does not exist"})
        
    } catch (error) {
        res.status(500).json({message: "Error with toggleFeatured function"})
    }
}

const updatedCache = async (req, res) => {
    try {
        
        const featuredProducts = await Product.find({isFeatured: true}).lean()

        await redis.set("featured_products", JSON.stringify(featuredProducts))

    } catch (error) {
        res.status(500).json({message: "Error in updateCache function"})
    }

     
}
