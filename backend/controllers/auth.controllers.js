import User from "../models/user.models.js"
import { redis } from "../lib/redis.js"
import jwt from "jsonwebtoken"


const generateTokens = async(userId) => {
    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m"
    })

    const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d"
    })

    return {accessToken, refreshToken}
}

const storedRefreshToken = async(userId, refreshToken) => {
    await redis.set(`refresh_token: ${userId}`, refreshToken, "EX", 7*24*60*60)
}

export const signup =  async (req, res) => {
    const {email, name, password} = req.body
    try {
        
        const foundUser = await User.findOne({email})

        if(foundUser) {
            
            res.status(400).json({message: "User already exists"})
        }

        const newUser = await User.create({name, email, password})

        //authentication
        const {accessToken, refreshToken} = generateTokens(newUser._id)

        await storedRefreshToken(newUser._id, refreshToken)

        res.status(201).json({
            newUser: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
            message: "User created successfully"
        })

        

    } catch (error) {
        res.status(500).json({message: error.message})
    }
    

}
export const login =  async (req, res) => {
    res.send("Login route is being called");
}
export const logout =  async (req, res) => {
    res.send("Logout route is being called");
}

