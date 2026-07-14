import Collection from "../models/collection.model.js"

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