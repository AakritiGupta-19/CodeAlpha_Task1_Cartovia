const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ==========================================
// USER SCHEMA
// ==========================================
// यह तय करता है कि MongoDB में User का data किस format में store होगा
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your full name"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Please enter your email"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please enter a valid email address"
            ]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
            minlength: [6, "Password must be at least 6 characters long"]
        },
        wishlist: [
            {
                _id: { type: String, required: true },
                name: { type: String, required: true },
                price: { type: Number, required: true },
                image: { type: String },
                category: { type: String },
                description: { type: String },
                rating: { type: Number }
            }
        ]
    },
    {
        timestamps: true // यह automatically createdAt और updatedAt जोड़ देगा
    }
);

// ==========================================
// 6B: PASSWORD SECURITY (HASHING PRE-SAVE)
// ==========================================
// Database में save होने से ठीक पहले यह function चलेगा
// यह original password को bcrypt से encrypt (hash) कर देगा
// Mongoose 9.x में async hook में next की आवश्यकता नहीं होती है
userSchema.pre("save", async function () {
    // अगर password modify नहीं हुआ है, तो दोबारा hash मत करो
    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// ==========================================
// PASSWORD MATCHING METHOD
// ==========================================
// Login के समय user के entered password को database के hashed password से compare करना
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
