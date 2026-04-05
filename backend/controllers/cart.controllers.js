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
        res.status(201).json({message: "Item added to cart successfully"})

    } catch (error) {
        console.log("Error in addToCart controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}