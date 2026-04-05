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
        res.status(500).json(error.message)
    }

}