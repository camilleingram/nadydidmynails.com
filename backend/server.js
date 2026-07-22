import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import couponRoutes from "./routes/coupon.routes.js"
import collectionRoutes from "./routes/collection.routes.js"
import paymentRoutes from "./routes/payment.route.js"
import refundRoutes from "./routes/refund.routes.js"
import shippingRoutes from "./routes/shipping.routes.js"
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/coupons", couponRoutes)
app.use("api/collections", collectionRoutes)
app.use("/api/payments", paymentRoutes)
app.use("/api/refunds", refundRoutes)
app.use("/api/shipping", shippingRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  connectDB()

});