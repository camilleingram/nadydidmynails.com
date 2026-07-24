import Coupon from "../models/coupon.model.js"

export const getAllCoupons = async (res, req) => {
     try {
        
        const coupons = await Coupon.find({})

        if(!coupons) {
            return res.status(400),json({message: "Coupons not found"})
        }

        return res.status(200).json({
            message: "Coupons fetched successfully",
            coupons: coupons
        })
        
     } catch (error) {
        console.log("error in getAllCoupons controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
     }
}

export const getOneCoupon = (req, res) => {
    try {
        
        const { couponId } = req.params
        const foundCoupon = await Coupon.findOneById(couponId)

        if(!foundCoupon) {
            return res.status(400).json({message: "Coupon not found"})
        }

        return res.status(200).json({
            message: "Coupon fetched successfully",
            coupon: foundCoupon
        })

    } catch (error) {
        console.log("error in getOneCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const createCoupon = async (req, res) => {
    try {
        const { name, code, discount, minValue, expirationDate, products, collections} = req.body

        const coupon = await Coupon.create({
            name: name,
            code: code,
            discount: {
                discountType: discount.discountType,
                discountAmount: discount.discountAmount
            },
            minValue: minValue,
            expirationDate: expirationDate,
            products: products,
            collections: collections
        })

        return res.status(201).json({
            message: "Coupon created successfully",
            coupon: coupon
        })

    } catch (error) {
        console.log("Error createCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const deleteCoupon = async (req, res) => {
    try {
        const { couponId } = req.params

        const couponToDelete = await Coupon.findByIdAndDelete(couponId)

        if(!couponToDelete) {
            return res.status(400).json({message: "Coupon not found"})
        }

        return res.status(200).json({
            message: "Coupon deleted successfully",
            coupons: coupons
        })

    } catch (error) {
        console.log("Error in deleteCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const updateCoupon = async (req, res) => {
    try {
        const { couponId } = req.params
        const { updateData } = req.body

        let couponToUpdate = await Coupon.findById(couponId)

        if(!couponToUpdate) {
            return res.status(400).json({message: "Coupon not found"})
        }

        couponToUpdate = await Coupon.findByIdAndUpdate(couponId, updateData, {
            new: true,
        })


        return res.status(200).json({
            message: "Coupon updated successfully",
            coupon: couponToUpdate
        })

    } catch (error) {
        console.log("Error in updateCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const validateCoupon = async (res, req) => {
     try {
        const { couponCode } = req.body
        const { user } = req.user

        const foundCoupon = await Coupon.findOne({code: couponCode, isActive: true })

        if(!foundCoupon) {
            return res.status(400).json({message: "Coupon not found"})
        }

        if(foundCoupon.expirationDate < new Date()) {
            foundCoupon.isActive = false
            await foundCoupon.save()

            return res.status(400).json({message: "Coupon expired and deactivated"})
        }

        const userCartItems = user.cartItems

        const matchedProducts = userCartItems.map((cartItem) => {
            return foundCoupon.products.find((product) => product._id.equals(cartItem.product))
        })

        const matchedCollections = userCartItems.map((cartItem) => {
            return foundCoupon.collections.find((collection) => collection._id.equals(cartItem.collection))
        })

        if(!matchedProducts && !matchedCollections) {
            return res.status(200).json({
                message: "Coupon not valid for items in cart",
                coupon: foundCoupon
            })
        }

        let subTotal = 0 
        
        userCartItems.forEach((cartItem) => {
            subTotal += cartItem.price 
        })

        if(subTotal < foundCoupon.minValue) {
            return res.status(400).json({message: "Cart total less than minimum value"})
        }

        foundCoupon.uses += 1
        await foundCoupon.save()

        return res.status(200).json({
            message: "Coupon found and valid",
            name: foundCoupon.name,
            code: couponCode,
            discountType: foundCoupon.discount.discountType,
            discountAmount: foundCoupon.discount.discountAmount
        })

     } catch (error) {
        console.log("Error in validateCoupon controller", error.message)
        res.status(500).json({message: "Server error", error: error.message})
     }
}