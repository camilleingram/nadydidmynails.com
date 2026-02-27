import User from "../models/user.models"
import redis from "ioredis"
import jwt from "jsonwebtoken"


const generateTokens = async(userId) => {
    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 15 * 60})

    const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: 7 * 24 * 60 * 60})

    return {accessToken, refreshToken}
}

export const signup =  async (req, res) => {
    const {name, email, password} = req.body
    try {
        const foundUser = await User.findOne({email})

        if(!foundUser) {
            const newUser = User.create({name, email, password})
            res.status(201).json({message: "User created successfully"})
        }

        res.status(400).json({message: "User already exists"})

    } catch (error) {
        res.status(500).json({message: "Error creating new user"})
    }
    

}
export const login =  async (req, res) => {
    res.send("Login route is being called");
}
export const logout =  async (req, res) => {
    res.send("Logout route is being called");
}

