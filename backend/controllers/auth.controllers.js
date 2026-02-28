import User from "../models/user.models.js"
import { redis } from "../lib/redis.js"
import jwt from "jsonwebtoken"



const generateTokens = (userId) => {
    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m"
    })

    const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d"
    })

    return {accessToken, refreshToken}
}


const storedRefreshToken = async(userId, refreshToken) => {
    await redis.set(`refresh_token:${userId}`, refreshToken, "EX", 7 * 24 * 60 * 60)
}

const setCookies = (res, accessToken, refreshToken) => {

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000

    })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000

    })
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

        setCookies(res, accessToken, refreshToken)

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
    const { email, password } = req.body

    try {

        const foundUser = await User.findOne({ email })
        const matchedPassword = await foundUser.comparePassword(password)

        if(foundUser && matchedPassword) {

            const { accessToken, refreshToken } = generateTokens(foundUser._id)
            await storedRefreshToken(foundUser._id, refreshToken)
            setCookies(res, accessToken, refreshToken)

            res.status(200).json({
            user: {
                _id: foundUser._id,
                name: foundUser.name,
                email: foundUser.email,
                role: foundUser.role,
            },
            message: "User logged in successfully"
        })
        }

        res.status(401).json({ message: "User not found" })

        
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const logout =  async (req, res) => {
    
    try {

        const refreshToken = req.cookies.refreshToken

        if(refreshToken) {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            
            await redis.del(`refresh_token:${decoded.userId}`)
            
            res.clearCookie("accessToken")
            res.clearCookie("refreshToken")

            res.status(200).json({message: "User logged out successfully"})
        }
        
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const refreshToken = async(req, res) => {

    const refreshToken = res.cookies.refreshToken

    if(!refreshToken) {
        res.status(401).json({message: "No refresh token provided"})
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    
    const storedRefreshToken = await redis.get(`refresh_token:${decoded.userId}`)

    if(refreshToken !== storedRefreshToken) {
        res.status(401).json({message: "Invalid refresh token"})
    }

    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m"
    })

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 15 * 60 * 1000

    })

    
    res.status(201).json({message: "New access token generated successfully"})

}
