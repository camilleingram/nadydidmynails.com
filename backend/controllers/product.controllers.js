import Product from "../models/product.model.js"
import { redis } from "../lib/redis.js"
import cloudinary from "../lib/cloudinary.js"
import Collection from "../models/collection.model.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})

        if(!products || !Array.isArray(products)) {
            return res.status(400).json({message: "Products not found"})
        }

        return res.status(200).json({
            message: "Products fetched successfully",
            products: products
        })
    } catch (error) {
        console.log("Error in getAllProducts controller", error.message)
        res.status(500).json({message: error.message})
    }
}

export const getOneProduct = async (req, res) => {
    try {

        const { productId } = req.params
        const foundProduct = await Product.findById(productId)

        if(!foundProduct) {
            return res.status(400).json({message: "Product not found"})
        }

        return res.status(200).json({
            message: "Product fetched successfully",
            product: foundProduct
        })

    } catch(error) {
        console.log("Error in getAllProducts controller", error.message)
        res.status(500).json({message: error.message})
    }
}

export const createProduct = async (req, res) => {
     try {
        
        const {name, collection, price, description, colors, length, shape, size, images} = req.body

        const cloudinaryResponse = null

        if(images.length > 0) {
            images.forEach(image => {
                cloudinaryResponse = await cloudinary.uploader.upload(image, {folder: products})
            });
        }

        const product = await Product.create({
            name,
            collection,
            price,
            description,
            colors,
            length,
            shape,
            size,
            images: images.forEach(image => {
                //check inside of a check(if cloudinary has secure url save it to images if not send empty string)
                cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : ""
            }),
        })

        return res.status(201).json({
            message: "Product created successfully",
            product: product
        })

     } catch (error) {
        console.log("Error in createProduct controller", error.message)
        res.status(500).json({message: error.message})
     }
}

export const deleteProduct =  async (req, res) => {
    try {

        const { productId } = req.params
        const productToDelete = await Product.findById(productId)

        if(!productToDelete) {
            return res.status(400).json({message: "Product not found"})
        }

        if(productToDelete.images.length <= 0) {
            return res.status(400).json({message: "Images not found"})
        }

        images.forEach(image => {
            const publicId = productToDelete.image.split("/").pop().split(".")[0]
            try {
                await cloudinary.uploader.destroy(`products/${publicId}`)
                    
            } catch (error) {
                return res.status(400).json({message: "Unable to delete image"})
            }
        })

        await Product.findByIdAndDelete(productId)

        return res.status(204).json({message: "Product deleted successfully"})
        
    } catch (error) {
        console.log("Error in deleteProduct controller", error.message)
        res.status(500).json({message: error.message})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const { updateData } = req.body

        let updatedProduct = await Product.findById(productId)

        if(!updatedProduct) {
            return res.status(400).json({message: "Product not found"})
        }

        updatedProduct = await Product.findByIdAndUpdate(productId, updateData, {
            new: true,
        })

        return res.status(200).json({
            message: "Product was updated successfully",
            product: updatedProduct
        })

    } catch (error) {
        console.log("Error in updateProduct controller", error.message)
        res.status(500).json({message: error.message})
    }
}

// export const getRecommended = async (req, res) => {
//     try {
        
//         const recommended = await Product.aggregate([
//             {
//                 $sample: {size: 3}
//             },
//             {
//                 $project: {
//                     _id: 1,
//                     name: 1,
//                     price: 1,
//                     image: 1,
//                     description: 1
//                 }
//             }
//         ])

//         res.json(recommended)

//     } catch (error) {
//         res.status(500).json({message: "Error with getRecommended function"})
//     }
// }

export const getByCollection = async (req, res) => {
    try {
        const { collectionName } = req.params
        
        const foundCollection = await Collection.findOne({name: collectionName })

        if(!foundCollection) {
            return res.status(400).json({message: "Collection not found"})
        }
        
        const collectionProducts = await Product.find({id: {$in: foundCollection.products}})
        
        if(collectionProducts.length <= 0) {
            return res.status(400).json({message: "Collection products not found"})
        }
        
        return res.status(200).json({
            message: "Collection products fetched successfully",
            collectionProducts: collectionProducts
        })

    } catch (error) {
        console.log("Error in getByCollection controller", error.message)
        res.status(500).json({message: error.message})
    }
}

// export const toggleFeatured = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id)

//         if(product) {
//             product.isFeatured = !product.isFeatured
//             const updatedProduct = await product.save()
            
//             updatedCache()

//             res.json(updatedProduct)
//         }

//         res.status(404).json({message: "Product does not exist"})
        
//     } catch (error) {
//         res.status(500).json({message: "Error with toggleFeatured function"})
//     }
// }

// const updatedCache = async (req, res) => {
//     try {
        
//         const featuredProducts = await Product.find({isFeatured: true}).lean()

//         await redis.set("featured_products", JSON.stringify(featuredProducts))

//     } catch (error) {
//         res.status(500).json({message: "Error in updateCache function"})
//     }

     
// }
