import shippo from "shippo"
import Order from "../models/order.model.js"
import User from "../models/user.model.js"

export const createShipLabel = async (req, res) => {
    try {

        const { orderId } = req.body

        const foundOrder = await Order.findById(orderId)
        const orderUser = await User.findById(foundOrder.user)

        const AddressFrom = {
            name: "Shawn Ippotle",
            company: "Shippo",
            street1: "215 Clayton St.",
            city: "San Francisco",
            state: "CA",
            zip: "94117",
            country: "US",
            phone: "+1 555 341 9393",
            email: "shippotle@shippo.com",
        }

        const AddressTo = {
            name: foundOrder.shippingAddress.name,
            street1: foundOrder.shippingAddress.street,
            street2: foundOrder.shippingAddress.aptNumber,
            city: foundOrder.shippingAddress.city,
            state: foundOrder.shippingAddress.state,
            zip: foundOrder.shippingAddress.zipCode,
            country: foundOrder.shippingAddress.country,
            phone: orderUser.phone,
            email: orderUser.email,
        }

        const parcel = {
            length: "5",
            width: "5",
            height: "5",
            distanceUnit: DistanceUnitEnum.In,
            weight: "2",
            massUnit: WeightUnitEnum.Lb
        };

        const shipment = {
            addressFrom: addressFrom,
            addressTo: addressTo,
            parcels: [parcel],
        };

        const transaction = await shippo.transactions.create({
            shipment: shipment,
            carrierAccount: [],
            servicelevelToken: ""
        });

        
        
    } catch (error) {
        console.log("Error in createShipLabel controller")
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const trackAnOrder = async (req, res) => {
    try {
        
    } catch (error) {
        console.log("Error in createShipLabel controller")
        res.status(500).json({message: "Server error", error: error.message})
    }
}