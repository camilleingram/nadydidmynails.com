import shippo from "shippo"
import Order from "../models/order.model.js"
import User from "../models/user.model.js"

export const createShipLabel = async (req, res) => {
    try {

        const { orderId } = req.body

        const foundOrder = await Order.findById(orderId)
        const orderUser = await User.findById(foundOrder.user)

        if(!foundOrder) {
            return res.status(400).json({message: "Order not found"})
        }

        // need nadia to figure out address
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

        // need nadia to figure out package dimensions
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
            extra: {
                is_return: true,
                authority_to_leave: true,
                qr_code_requested: true,
                saturday_deliverly: true,
            }
        };

        const transaction = await shippo.transactions.create({
            shipment: shipment,
            // make an account for shippo
            carrierAccount: ["3678b80905ea4a0493976218ccc2971c"]
        });

        foundOrder.trackingStatus = transaction.tracking_status
        foundOrder.trackingNumber = transaction.tracking_number
        foundOrder.trackingURL = transaction.tracking_url_provider

        await foundOrder.save()

        return res.status(201).json({message: "Shipping label created successfully"})

    } catch (error) {
        console.log("Error in createShipLabel controller")
        res.status(500).json({message: "Server error", error: error.message})
    }
}

