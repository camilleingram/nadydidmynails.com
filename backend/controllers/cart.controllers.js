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
        //should I be getting id from params to know what specific item to add?
        const { productId, size, shape, height, color } = req.body
        const { user } = req.user

        const productToAdd = await Product.findById(productId)

        if(!productToAdd) {
            return res.status(400).json({message: "Product not found"})
        }
        
        // i need to have the variants in the cart items and also get them from the req body
        // wouldn't this be cartItem.product because an object id is being stored there?
        const existingItem = user.cartItems.find((cartItem) => cartItem.product.equals(productId))

        if(existingItem) {
            if(existingItem.size === size && existingItem.shape === shape && existingItem.height === height && existingItem.color.colorName === color.colorName && existingItem.color.hexCode === color.hexCode) {
                existingItem.quantity += 1
            }
        } else {
            // how should i access the quantity field when exisiting item doesnt match?
            user.cartItems.push({
                product: productId,
                size: size,
                shape: shape,
                height: height,
                color: color
            })
            
        }

        await user.save()

        return res.status(201).json({
            message: "Item added to cart successfully", 
            cartItems: user.cartItems
        })

    } catch (error) {
        console.log("Error in addToCart controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const deleteCartItem = async (req, res) => {
    try {
        const { productId } = req.params
        
        const itemToDelete = await Product.find({productId})

        if(!itemToDelete) {

            return res.status(404).json({message: "Product not found"})
        } 

        user.cartItems = user.cartItems.filter((cartItem) => !cartItem.product.equals(productId) && cartItem.color.colorName !== itemToDelete.color.colorName && cartItem.color.hexCode !== itemToDelete.color.hexCode && cartItem.shape !== itemToDelete.shape && cartItem.height !== itemToDelete.height && cartItem.size !== itemToDelete.size)

        await user.save()

        return res.status(200).json({
            message: "Cart updated successfully",
            cartItems: user.cartItems
        })
        
    } catch (error) {
        console.log("Error in deleteCart controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const clearCart = async (req, res) => {
    try {

        const { user } = req.user

        if(user.cartItems.length === 0) {
            return res.status(200).json({message: "Cart already empty"})
        }
        
        user.cartItems = []

        await user.save()

        return res.status(200).json({
            message: "Cart cleared successfully",
            cartItems: user.cartItems
        })

    } catch (error) {
        console.log("Error in cartCart controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const updateQuantity = async (req, res) => {
    try {

        const { productId } = req.params
        const { quantity } = req.body
        const user = req.user

        const itemToUpdate = user.cartItems.find((cartItem) => cartItem.product === productId )

        if(!itemToUpdate) {
            
            return res.status(404).json({message: "Cart item not found"})
        }

        if(quantity === 0) {
            user.cartItems = user.cartItems.filter((cartItem) => cartItem.product !== itemToUpdate.product)

            return res.status(200).json({
                message: "Item deleted successfully",
                cartItems: user.cartItems
            })
        }

        itemToUpdate.quantity = quantity
        await user.save()

        return res.status(200).json({
            message: "Item updated successfully",
            cartItems: user.cartItems
        })
        
    } catch (error) {
        console.log("Error in updateQuantity controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}