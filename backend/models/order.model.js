import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    subtotalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    discountAmount: {
        type: Number,
        required: true,
        min: 0

    },
    shippingAddress: {
        name: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        aptNumber: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        }
    },
    billingAddress: {
        name: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        aptNumber: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        }
    },
    stripeSessionId: {
        type: String,
        unique: true
    }
})

const Order = mongoose.model("Order", orderSchema)

export default Order