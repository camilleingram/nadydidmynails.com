import Product from "../models/product.model.js"
import User from "../models/user.model.js"

export const getCart = async (req, res) => {
    try {
        const { user } = req.user
        const products = await Product.find({id: {$in: user.cartItems}})

        if(!products || !Array.isArray(products)) {
            return res.status(400).json({message: "Products not found"})
        }

        const cartItems = products.map((product) => {
            const item = user.cartItems.find((cartItem) => cartItem.id === product.id)

            return {...product.toJSON(), quantity: item.quantity}
        })

        return res.status(200).json({
            message: "Cart items fetched successfully",
            cartItems: cartItems
        })
    } catch (error) {
        console.log("Error in getCart controller")
        res.status(500).json({message: error.message})
    }

}

export const addToCart = async (req, res) => {
    try {
        const { productId } = req.body

        const products = await Product.find({})

        const requestedProduct = await Product.find({productId})
        const existingItem = user.cartItems.find((cartItem) => cartItem.id === productId )

        if(existingItem) {
            if(existingItem.color === requestedProduct.color && existingItem.shape === requestedProduct.shape && existingItem.height === requestedProduct.height && existingItem.size === requestedProduct.size) {
                existingItem.quantity += 1
            }
        } else {
            user.cartItems.push(productId)
        }

        await user.save()
        res.status(201).json({
            message: "Item added to cart successfully", 
            cartItems: cartItems
        })

    } catch (error) {
        console.log("Error in addToCart controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const deleteCartItems = async (req, res) => {
    try {
        const { id: productId } = req.params
        
        const itemToDelete = await Product.find({productId})

        if(itemToDelete) {
            user.cartItems = user.cartItems.filter(cartItem => cartItem.id !== productId && cartItem.color !== itemToDelete.color && cartItem.shape !== itemToDelete.shape && cartItem.height !== itemToDelete.height && cartItem.size !== itemToDelete.size)

            res.status(200).json({message: "Cart updated successfully"})
    
        } else {
            res.status(404).json({message: "Product not found"})
        }

        await user.save()
        res.json(user.cartItems)

    } catch (error) {
        console.log("Error in deleteCart controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const clearCart = async (req, res) => {
    try {

        const { user } = req.body

        const foundUser = await User.findById(user.id)
        
        foundUser.cartItems = []

        await foundUser.save()

        res.status(200).json({message: "Cart cleared successfully"})

    } catch (error) {
        console.log("Error in cartCart controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const updateQuantity = async (req, res) => {
    try {

        const { id: productId } = req.params
        const { quantity } = req.body
        const user = req.user

        const itemToUpdate = user.cartItems.find(cartItem => cartItem.id === productId )

        if(itemToUpdate) {
            if(quantity === 0) {
                user.cartItems = user.cartItems.filter(cartItem => cartItem.id !== itemToUpdate.id)

                res.status(200).json({
                    message: "Item deleted successfully",
                    cartItems: user.cartItems
                })
            }else {
                itemToUpdate.quantity = quantity
                res.status(200).json({
                    message: "Item updated successfully",
                    cartItems: user.cartItems
                })
            }

            await user.save()
            
        }else {
            res.status(404).json({
                message: "Product not found",
                cartItems: user.cartItems
            })
        }

        
    } catch (error) {
        console.log("Error in updateQuantity controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}