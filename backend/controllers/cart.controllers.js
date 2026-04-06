import Product from "../models/product.model.js"

export const getCart = async (req, res) => {
    try {
        const products = await Product.find({id: {$in: req.user.cartItems}})

        const cartItems = products.map((product) => {
            const item = req.user.cartItems.find(cartItem => cartItem.id === product.id)

            return {...product.toJSON(), quantity: item.quantity}
        })

        res.status(200).json({message: "Cart items pulled successfully"}, cartItems)
    } catch (error) {
        console.log("Error in getCart controller")
        res.status(500).json({message: error.message})
    }

}

export const addToCart = async (req, res) => {
    try {
        const { productId } = req.body

        const user = req.user

        const products = await Product.find({})

        const existingItem = user.cartItems.find(cartItem => cartItem.id === productId)

        if(existingItem) {
            quantity += 1
        } else {
            user.cartItems.push(productId)
        }

        await user.save()
        res.status(201).json({message: "Item added to cart successfully"}, cartItems)

    } catch (error) {
        console.log("Error in addToCart controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const deleteCart = async (req, res) => {
    try {
        const { productId } = req.body

        const user = req.user

        if(!productId) {
            user.cartItems = []
            
            res.status(204).json({message: "Cart cleared successfully"})
        } else {
            user.cartItems = user.cartItems.filter(cartItem => cartItem.id !== productId)

            res.status(200).json({message: "Cart updated successfully"})
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

                res.status(200).json({message: "Item deleted successfully"}, user.cartItems)
            }else {
                itemToUpdate.quantity = quantity
                res.status(200).json({message: "Item updated successfully"}, user.cartItems)
            }

            await user.save()
            
        }else {
            res.status(404).json({message: "Product not found"}, user.cartItems)
        }

        
    } catch (error) {
        console.log("Error in updateQuantity controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}