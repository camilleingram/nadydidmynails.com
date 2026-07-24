import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name is required"],
    },
    lastName: {
        type: String,
        required: [true, "last name is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    paymentMethodId :{
        type: String,
        required: false,
        unique: true
    },
    phone: {
        type: String,
    },
    cartItems:[
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            size: {
                type: String,
                required: true
            },
            shape: {
                type: String,
                required: true
            },
            height: {
                type: String,
                required: true
            },
            color: {
                colorName: {
                    type: String,
                    required: true
                },
                hexCode: {
                    type: String,
                    required: true
                }
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
    role: {
        type: String,
        enum: ["admin", "guest", "member"],
        default: "guest",
    }
    
}, {
    timestamps: true
})

// hashing password before saving to db
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        return next
    }
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next
    } catch (error) {
        next(error)
    }
})

// creating .comparePassword method to be used in controller
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}


const User = mongoose.model("User", userSchema)

export default User