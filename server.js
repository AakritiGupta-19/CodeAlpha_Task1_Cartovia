const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/database");

// Environment Variables
dotenv.config();

// Connect Database
connectDB();

// Route Handlers
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ===============================
// MIDDLEWARE
// ===============================
// JSON data पढ़ने के लिए
app.use(express.json());
// Form data पढ़ने के लिए
app.use(express.urlencoded({ extended: true }));
// Frontend और Backend के बीच requests allow करने के लिए
app.use(cors());

// ===============================
// API ROUTES
// ===============================
// 1. Products API
app.use("/api/products", productRoutes);

// 2. 6E: Auth API (Register & Login)
app.use("/api/auth", authRoutes);

// 3. 7B: Orders API (Checkout & Order History)
app.use("/api/orders", orderRoutes);

// 4. Wishlist API (Database & Device Sync)
app.use("/api/wishlist", wishlistRoutes);

// ===============================
// FRONTEND STATIC FILES
// ===============================
// public folder के अंदर की HTML, CSS और JS files serve करना
app.use(express.static(path.join(__dirname, "public")));

// ===============================
// TEST HEALTH API
// ===============================
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "E-commerce server is running successfully!"
    });
});

// ===============================
// 404 ERROR
// ===============================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// ===============================
// START SERVER
// ===============================
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});