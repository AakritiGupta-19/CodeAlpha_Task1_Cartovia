const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Authentication Middleware
const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const secret = process.env.JWT_SECRET || "shopease_secure_jwt_secret_key_2026";
            const decoded = jwt.verify(token, secret);
            req.user = await User.findById(decoded.id).select("-password");

            if (!req.user) {
                return res.status(401).json({ success: false, message: "User not found" });
            }
            next();
        } catch (err) {
            return res.status(401).json({ success: false, message: "Invalid or expired token" });
        }
    } else {
        return res.status(401).json({ success: false, message: "Authorization token required" });
    }
};

// GET /api/wishlist - Get current user's wishlist
router.get("/", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.json({
            success: true,
            wishlist: user.wishlist || []
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// POST /api/wishlist/toggle - Add or remove product from wishlist
router.post("/toggle", protect, async (req, res) => {
    try {
        const { product } = req.body;
        if (!product || !product._id) {
            return res.status(400).json({ success: false, message: "Valid product object required" });
        }

        const user = await User.findById(req.user._id);
        if (!user.wishlist) user.wishlist = [];

        const prodIdStr = String(product._id);
        const existingIndex = user.wishlist.findIndex(item => String(item._id) === prodIdStr);

        let action = "added";
        if (existingIndex > -1) {
            user.wishlist.splice(existingIndex, 1);
            action = "removed";
        } else {
            user.wishlist.push({
                _id: prodIdStr,
                name: product.name,
                price: Number(product.price) || 0,
                image: product.image || "",
                category: product.category || "General",
                description: product.description || "",
                rating: Number(product.rating) || 4.5
            });
            action = "added";
        }

        await user.save();

        res.json({
            success: true,
            action,
            wishlist: user.wishlist
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// POST /api/wishlist/sync - Merge guest/localStorage wishlist with user account
router.post("/sync", protect, async (req, res) => {
    try {
        const { localWishlist } = req.body;
        const user = await User.findById(req.user._id);
        if (!user.wishlist) user.wishlist = [];

        if (Array.isArray(localWishlist) && localWishlist.length > 0) {
            localWishlist.forEach(item => {
                if (item && item._id) {
                    const idStr = String(item._id);
                    const exists = user.wishlist.some(dbItem => String(dbItem._id) === idStr);
                    if (!exists) {
                        user.wishlist.push({
                            _id: idStr,
                            name: item.name,
                            price: Number(item.price) || 0,
                            image: item.image || "",
                            category: item.category || "General",
                            description: item.description || "",
                            rating: Number(item.rating) || 4.5
                        });
                    }
                }
            });
            await user.save();
        }

        res.json({
            success: true,
            wishlist: user.wishlist
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// DELETE /api/wishlist/:id - Remove item
router.delete("/:id", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.wishlist) {
            user.wishlist = user.wishlist.filter(item => String(item._id) !== String(req.params.id));
            await user.save();
        }
        res.json({
            success: true,
            wishlist: user.wishlist || []
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
