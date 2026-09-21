const mongoose = require("mongoose");

// ==========================================
// ORDER SCHEMA
// ==========================================
// यह Schema MongoDB में हर Order की पूरी जानकारी store करता है
const orderSchema = new mongoose.Schema(
    {
        // 1. किस User ने ऑर्डर किया है (User Model का reference)
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        // 2. ऑर्डर में कौन-कौन से प्रोडक्ट्स हैं
        orderItems: [
            {
                name: { type: String, required: true },
                quantity: { type: Number, required: true, min: 1 },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                }
            }
        ],

        // 3. डिलीवरी का पता (Shipping Details)
        shippingAddress: {
            fullName: { type: String, required: true },
            phone: { type: String, required: true },
            street: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            state: { type: String, default: "India" }
        },

        // 4. पेमेंट की जानकारी
        paymentMethod: {
            type: String,
            required: true,
            enum: ["Cash on Delivery", "UPI / Net Banking Demo", "Debit / Credit Card Demo"],
            default: "Cash on Delivery"
        },
        paymentStatus: {
            type: String,
            enum: ["Pending", "Paid"],
            default: "Pending"
        },

        // 5. कीमतों का ब्रेकडाउन
        itemsPrice: {
            type: Number,
            required: true,
            default: 0
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0
        },
        totalAmount: {
            type: Number,
            required: true,
            default: 0
        },

        // 6. ऑर्डर का स्टेटस
        orderStatus: {
            type: String,
            enum: ["Confirmed", "Processing", "Shipped", "Delivered", "Cancelled"],
            default: "Confirmed"
        },

        // 7. Human-readable Order ID (e.g. ORD-682194)
        orderId: {
            type: String,
            index: true
        },

        // 8. Order Cancellation details
        cancelReason: {
            type: String,
            default: null
        },
        cancelledAt: {
            type: Date,
            default: null
        },

        // 9. Promo Coupon details
        couponCode: {
            type: String,
            default: null
        },
        discountAmount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true // createdAt & updatedAt
    }
);

// Auto-generate professional Order ID before saving
orderSchema.pre("save", async function () {
    if (!this.orderId) {
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        this.orderId = `ORD-${randomNum}`;
    }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
