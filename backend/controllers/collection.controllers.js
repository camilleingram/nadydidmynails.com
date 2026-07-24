import Collection from "../models/collection.model.js"
import Product from "../models/product.model.js"

export const getAllCollections = async (req, res) => {
    try {

        const collections = await Collection.find({})

        if(!collections) {
           return res.status(400).json({message: "No collections found"})
        }

        return res.status(200).json({
            message: "Collections fetched successfully",
            collections: collections
        })

    } catch {
        console.log("Error in getAllCollections controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const getCollectionProducts = async (req, res) => {
    try {

        const { collectionId } = req.body

        const collectionProducts = await Products.find({collection: collectionId})

        if(!collectionProducts) {
            return res.status(400).json({message: "Collection products not found"})
        }

        return res.status(200).json({
            message: "Collection products found successfully",
            collectionProducts: collectionProducts
        })
        
    } catch (error) {
       console.log("Error in getCollectionProducts controller", error.message)
        res.status(500).json({message: "Server error", error: error.message}) 
    }
}

export const createCollection = async (req, res) => {
    try {
        const { name } = req.body
        
        const exisitingCollection = await Collection.findOne({name: name})

        if(exisitingCollection) {
            return res.status(400).json({message: "Collection already exists"})
        }

        const createdCollection = await Collection.create({
            name: name,
            products: []
        })

        return res.status(201).json({
            message: "Collection created successfully",
            collection: exisitingCollection || createdCollection
        })
    } catch (error) {
        console.log("Error in createCollection controller", error.message)
        res.status(500).json({message: "Server error", error: error.message}) 
    }
}

export const deleteCollection = async (req, res) => {
    try {
        const { name } = req.params

        const ItemToDelete = await Collection.findOne({name: name})

        if(!ItemToDelete) {
            res.status(400).json({message: "Collection not found"})
        }

        await Collection.findOneAndDelete({name: name})
        res.status(200).json({message: "Collection deleted successfully"})
    } catch (error) {
        console.log("Error in deleteCollection controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const addToCollection = async (req, res) => {
    try {
        const { productId, collectionName } = req.body

        const foundProduct = await Product.findById(productId)
        const foundCollection = await Collection.findOne({name: collectionName})

        if(foundProduct && foundCollection) {
            foundCollection.products.push(foundProduct)
            res.status(200).json(collection, {message: "Product added to collection successfully"})
        }else {
            res.status(400).json({message: "Unable to add to collection"})
        }

        await foundCollection.save()
    
    } catch (error) {
        console.log("Error in addToCollection controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}