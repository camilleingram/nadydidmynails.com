import Collection from "../models/collection.model.js"
import { getAllProducts } from "./product.controllers.js"

export const getAllCollections = async (req, res) => {
    try {

        const collections = await Collection.find({})

        if(collections) {
            res.status(200).json({message: "Got collections list successfully"})
        } else {
            res.status(400).json({message: "No collections found"})
        }

        res.json(collections)

    } catch {
        console.log("Error in getAllCollections controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const getCollectionProducts = async (req, res) => {
    try {

        const { collection } = req.body

        const collectionProducts = await Products.find({collection: collection})

        if(collectionProducts) {
            res.status(200).json({message: "Collection products found successfully"})
        } else {
            res.status(400).json({message: "Collection products not found"})
        }

        res.json({collectionProducts})
        
    } catch (error) {
       console.log("Error in getCollectionProducts controller", error.message)
        res.status(500).json({message: "Server error", error: error.message}) 
    }
}

export const createCollection = async (req, res) => {
    try {
        const { name } = req.body
        
        const createdCollection = Collection.create({
            name: name,
            products: []
        })

        res.status(201),json(createdCollection, {message: "Collection created successfully"})
    } catch (error) {
        console.log("Error in createCollection controller", error.message)
        res.status(500).json({message: "Server error", error: error.message}) 
    }
}