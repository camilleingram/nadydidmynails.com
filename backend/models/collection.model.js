import mongoose from "mongoose"

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
})

const Collection = mongoose.model("Collection", collectionSchema)

export default Collection