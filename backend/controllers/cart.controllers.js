import Product from "../models/product.model.js"

export const getCart = async (req, res) => {
    try {
        const products = await Product.find({id: {$in: req.user.cartItems}})

        const cartItems = products.map((product) => {
            const item = req.user.cartItems.find(cartItem => cartItem.id === product.id)

            return {...product.toJSON(), quantity: item.quantity}
        })

        res.status(200).json({
            message: "Cart items pulled successfully",
            cartItems: cartItems
        })
    } catch (error) {
        console.log("Error in getCart controller")
        res.status(500).json({message: error.message})
    }

}

export const addToCart = async (req, res) => {
    try {
        const { productId, color, length, shape, size, user } = req.body

        const products = await Product.find({})

        const existingItem = user.cartItems.find((cartItem) => cartItem.id === productId && cartItem.color === color && cartItem.length === length && cartItem.shape === shape && cartItem.size === size)

        if(existingItem) {
            quantity += 1
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
        const { productId, color, length, shape, size, user } = req.body

        if(productId) {
            user.cartItems = user.cartItems.filter(cartItem => cartItem.id !== productId && cartItem.color !== color && cartItem.length !== length && cartItem.shape !== shape && cartItem.size !== size)

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