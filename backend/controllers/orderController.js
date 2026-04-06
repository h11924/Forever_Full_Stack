import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// 1. Placing orders using COD
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const oData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const nOrder = new orderModel(oData)
        await nOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order Placed" })

    } catch (e) {
        console.log(e)
        res.json({ success: false, message: e.message })
    }
}

// 2. Placing orders using Stripe (DISABLED - NO CRASH)
const placeOrderStripe = async (req, res) => {
    try {
        // We return success: false so the frontend shows a toast error
        res.json({ success: false, message: "Stripe payment method is currently not available." })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

// 3. Placing orders using Razorpay (DISABLED - NO CRASH)
const placeOrderRazorpay = async (req, res) => {
    try {
        res.json({ success: false, message: "Razorpay payment method is currently not available." })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

// 4. User Orders Data for Frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

// 5. All Orders Data for Admin Panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

// 6. Update Order Status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: 'Status Updated' })
    } catch (e) {
        res.json({ success: false, message: e.message })
    }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, userOrders, listOrders, updateStatus }