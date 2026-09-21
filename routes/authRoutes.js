const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// JWT Token Generator Helper Function
const generateToken = (id) => {
    const secret = process.env.JWT_SECRET || "shopease_secure_jwt_secret_key_2026";
    return jwt.sign({ id }, secret, {
        expiresIn: "30d" // 30 days validity
    });
};

// ==========================================
// 6C: REGISTER API
// POST /api/auth/register
// ==========================================
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Check if all required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields: name, email, password"
            });
        }

        // 2. Validate password length
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long"
            });
        }

        // 3. Check if user already exists in database
        const userExists = await User.findOne({ email: email.toLowerCase().trim() });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "This email is already registered. Please login instead."
            });
        }

        // 4. Create new user (password automatically hashes via pre('save') hook)
        const user = await User.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: password
        });

        // 5. Generate authentication token
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: "Account registered successfully!",
            token: token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({
            success: false,
            message: "Registration failed. Server error.",
            error: error.message
        });
    }
});

// ==========================================
// 6D: LOGIN API
// POST /api/auth/login
// ==========================================
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter both email and password"
            });
        }

        // 2. Find user by email
        const user = await User.findOne({ email: email.toLowerCase().trim() });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // 3. Compare entered password with hashed password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // 4. Generate token
        const token = generateToken(user._id);

        res.json({
            success: true,
            message: "Logged in successfully!",
            token: token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({
            success: false,
            message: "Login failed. Server error.",
            error: error.message
        });
    }
});

// ==========================================
// GET CURRENT LOGGED-IN USER INFO
// GET /api/auth/me
// ==========================================
router.get("/me", async (req, res) => {
    try {
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authorized. No token provided."
            });
        }

        const secret = process.env.JWT_SECRET || "shopease_secure_jwt_secret_key_2026";
        const decoded = jwt.verify(token, secret);

        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            user: user
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Token verification failed",
            error: error.message
        });
    }
});

module.exports = router;
