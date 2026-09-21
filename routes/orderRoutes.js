const express = require("express");
const jwt = require("jsonwebtoken");
const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

const router = express.Router();

// ==========================================
// AUTHENTICATION MIDDLEWARE
// ==========================================
// यह Middleware चेक करता है कि Request भेजने वाला User Logged In है या नहीं
const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const secret = process.env.JWT_SECRET || "shopease_secure_jwt_secret_key_2026";
            const decoded = jwt.verify(token, secret);

            // User की जानकारी req.user में store करना (password हटाकर)
            req.user = await User.findById(decoded.id).select("-password");

            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "User not found. Authorization failed."
                });
            }

            next();
        } catch (error) {
            console.error("Auth Middleware Error:", error.message);
            return res.status(401).json({
                success: false,
                message: "Not authorized, token is invalid or expired."
            });
        }
    } else {
        return res.status(401).json({
            success: false,
            message: "Not authorized, no token provided."
        });
    }
};

// ==========================================
// 7B: CREATE NEW ORDER (POST /api/orders)
// ==========================================
router.post("/", protect, async (req, res) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalAmount,
            couponCode,
            discountAmount
        } = req.body;

        // 1. Validation: Cart empty नहीं होनी चाहिए
        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Your cart is empty. No order items found."
            });
        }

        // 2. Validation: Shipping Details भरी होनी चाहिए
        if (
            !shippingAddress ||
            !shippingAddress.fullName ||
            !shippingAddress.phone ||
            !shippingAddress.street ||
            !shippingAddress.city ||
            !shippingAddress.postalCode
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide complete shipping address details."
            });
        }

        // 3. Robust Data Preparation
        const formattedItems = orderItems.map(item => {
            const itemName = item.name || item.title || "Product";
            const itemQty = Number(item.quantity || item.qty) || 1;
            const itemPrice = Number(item.price) || 0;
            const itemImg = item.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80";
            const itemProdId = item.product || item._id;

            return {
                name: itemName,
                quantity: itemQty,
                image: itemImg,
                price: itemPrice,
                product: itemProdId
            };
        });

        // Calculate totals with safe fallbacks
        const calculatedItemsPrice = itemsPrice !== undefined && !isNaN(Number(itemsPrice))
            ? Number(itemsPrice)
            : formattedItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);

        const calculatedShippingPrice = Number(shippingPrice) || 0;
        const calculatedDiscount = Number(discountAmount) || 0;
        const calculatedTotalAmount = totalAmount !== undefined && !isNaN(Number(totalAmount))
            ? Number(totalAmount)
            : Math.max(0, (calculatedItemsPrice + calculatedShippingPrice - calculatedDiscount));

        // 4. Create Order Document in MongoDB
        const order = new Order({
            user: req.user._id,
            orderItems: formattedItems,
            shippingAddress: {
                fullName: shippingAddress.fullName.trim(),
                phone: shippingAddress.phone.trim(),
                street: shippingAddress.street.trim(),
                city: shippingAddress.city.trim(),
                postalCode: shippingAddress.postalCode.trim(),
                state: shippingAddress.state || "India"
            },
            paymentMethod: paymentMethod || "Cash on Delivery",
            paymentStatus: paymentMethod === "Cash on Delivery" ? "Pending" : "Paid",
            itemsPrice: calculatedItemsPrice,
            shippingPrice: calculatedShippingPrice,
            couponCode: couponCode ? String(couponCode).trim().toUpperCase() : null,
            discountAmount: calculatedDiscount,
            totalAmount: calculatedTotalAmount,
            orderStatus: "Confirmed"
        });

        const createdOrder = await order.save();

        res.status(201).json({
            success: true,
            message: "Order placed successfully!",
            order: createdOrder
        });
    } catch (error) {
        console.error("Order Creation Error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to place order. Server error.",
            error: error.message
        });
    }
});

// ==========================================
// 7B: GET LOGGED-IN USER ORDERS (GET /api/orders/my-orders)
// ==========================================
router.get("/my-orders", protect, async (req, res) => {
    try {
        // Logged-in user के सभी orders ढूंढना (Latest orders सबसे ऊपर)
        const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });

        res.json({
            success: true,
            count: orders.length,
            orders: orders
        });
    } catch (error) {
        console.error("Fetch Orders Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve orders.",
            error: error.message
        });
    }
});

// ==========================================
// STEP 10: ADMIN - GET STORE KPI STATS
// GET /api/orders/admin/stats
// ==========================================
router.get("/admin/stats", async (req, res) => {
    try {
        const totalOrders = await Order.countDocuments();
        const totalUsers = await User.countDocuments();
        const totalProducts = await Product.countDocuments();

        const revenueAgg = await Order.aggregate([
            { $match: { orderStatus: { $ne: "Cancelled" } } },
            { $group: { _id: null, total: { $sum: "$totalAmount" } } }
        ]);
        const totalRevenue = revenueAgg.length > 0 ? revenueAgg[0].total : 0;

        const confirmedCount = await Order.countDocuments({ orderStatus: "Confirmed" });
        const processingCount = await Order.countDocuments({ orderStatus: "Processing" });
        const shippedCount = await Order.countDocuments({ orderStatus: "Shipped" });
        const deliveredCount = await Order.countDocuments({ orderStatus: "Delivered" });
        const cancelledCount = await Order.countDocuments({ orderStatus: "Cancelled" });

        res.json({
            success: true,
            stats: {
                totalRevenue,
                totalOrders,
                totalUsers,
                totalProducts,
                breakdown: {
                    confirmed: confirmedCount,
                    processing: processingCount,
                    shipped: shippedCount,
                    delivered: deliveredCount,
                    cancelled: cancelledCount
                }
            }
        });
    } catch (error) {
        console.error("Admin Stats Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch admin stats",
            error: error.message
        });
    }
});

// ==========================================
// STEP 10: ADMIN - GET ALL ORDERS
// GET /api/orders/admin/all
// ==========================================
router.get("/admin/all", async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user", "name email")
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: orders.length,
            orders: orders
        });
    } catch (error) {
        console.error("Admin All Orders Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch all store orders",
            error: error.message
        });
    }
});

// ==========================================
// STEP 10: ADMIN - UPDATE ORDER STATUS
// PUT /api/orders/admin/:id/status
// ==========================================
router.put("/admin/:id/status", async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ["Confirmed", "Processing", "Shipped", "Delivered", "Cancelled"];

        if (!status || !validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`
            });
        }

        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        order.orderStatus = status;

        if (status === "Delivered") {
            order.paymentStatus = "Paid";
        }
        if (status === "Cancelled" && !order.cancelReason) {
            order.cancelReason = "Cancelled by Store Admin";
            order.cancelledAt = new Date();
        }

        const updatedOrder = await order.save();

        res.json({
            success: true,
            message: `Order ${order.orderId || order._id} status updated to "${status}"`,
            order: updatedOrder
        });
    } catch (error) {
        console.error("Admin Update Status Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update order status",
            error: error.message
        });
    }
});

// ==========================================
// GET SINGLE ORDER BY ID (GET /api/orders/:id)
// ==========================================
router.get("/:id", protect, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("user", "name email");

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        // Check if user owns this order
        if (order.user._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "Not authorized to view this order"
            });
        }

        res.json({
            success: true,
            order: order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch order details",
            error: error.message
        });
    }
});

// ==========================================
// 7C: CANCEL ORDER (PUT /api/orders/:id/cancel)
// ==========================================
router.put("/:id/cancel", protect, async (req, res) => {
    try {
        const { reason } = req.body;
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        // Verify that the order belongs to the logged-in user
        if (order.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "Not authorized to cancel this order"
            });
        }

        // Check if already cancelled
        if (order.orderStatus === "Cancelled") {
            return res.status(400).json({
                success: false,
                message: "This order is already cancelled"
            });
        }

        // Check if order has already been shipped or delivered
        if (order.orderStatus === "Shipped" || order.orderStatus === "Delivered") {
            return res.status(400).json({
                success: false,
                message: `Order cannot be cancelled because it is already ${order.orderStatus.toLowerCase()}`
            });
        }

        order.orderStatus = "Cancelled";
        order.cancelReason = reason ? reason.trim() : "Cancelled by customer";
        order.cancelledAt = new Date();

        const updatedOrder = await order.save();

        res.json({
            success: true,
            message: "Order cancelled successfully",
            order: updatedOrder
        });
    } catch (error) {
        console.error("Cancel Order Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to cancel order",
            error: error.message
        });
    }
});

module.exports = router;
