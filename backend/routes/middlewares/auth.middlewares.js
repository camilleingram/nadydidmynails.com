import User from "../models/user.model.js"
import { redis } from "../lib/redis.js"
import jwt from "jsonwebtoken"

export const protectRoute = async (req, res, next) => {

    try {
        const accessToken = req.cookies.accessToken

        if(!accessToken) {
            res.status(404).json({message: "Unauthorized - Token not found"})
        }

        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decoded.userId).select("-password")

        if(!user) {
            res.status(401).json({message: "User not found"})
        }
        req.user = user

        next

    } catch (error) {
        res.status(401).json({message: "Unauthorized - Invalid token"})
    }
   
    
}