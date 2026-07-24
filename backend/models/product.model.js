import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "Product name required"]
    },
    price: {
        type: Number,
        required: [true, "Product price required"]
    },
    collection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
        required: [true, "Product category is required"]
    },
    description: {
        type: String,
    },
    colors: [
        {
            colorName: {
                type: String,
                required: [true, "Color name is required"]
            },
            hexCode: {
                type: String,
                required: [true, "Hex code is required"]
            }
        }
    ],
    shape: {
        type: String,
        enum: ["Square", "Stiletto", "Duck"],
        required: [true, "Shape is required"]
    },
    height: {
        type: String,
        enum: ["XS", "S", "M", "L"],
        required: [true, "Length is required"]
    },
    size: {
        type: String,
        enum: ["XS", "S", "M", "L", "XL"],
        required: [true, "Size is required"]
    },
    images: [ 
        {
            type: String,
            required: [true, "Images are required"]
        }
    ],

}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product