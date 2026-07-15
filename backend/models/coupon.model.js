import mongoose from "mongoose"

const couponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true
        
    },
    uses: {
        type: Number,
        default: 0
    },
    discount: {
        discountType: {
            type: String,
            enum: ["fixed amount", "percentage"],
            required: true
        },
        discountAmount: {
            type: Number,
            required: true,
        }
    },
    minValue: {
        type: Number,
        default: 0
    },
    expirationDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    collections: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Collection"
        }
    ]
}, {
    timestamps: true
})

const Coupon = mongoose.model("Coupon", couponSchema)

export default Coupon