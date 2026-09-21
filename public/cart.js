// ==========================================
// CART PAGE JAVASCRIPT - CARTOVIA
// ==========================================

let cart = JSON.parse(localStorage.getItem("cartoviaCart")) || JSON.parse(localStorage.getItem("shopEaseCart")) || [];
let activeCoupon = null;
let couponDiscount = 0;

// DOM Elements
const headerCartCount = document.getElementById("headerCartCount");
const bottomCartCount = document.getElementById("bottomCartCount");
const cartItemsTotalQty = document.getElementById("cartItemsTotalQty");
const emptyCartView = document.getElementById("emptyCartView");
const populatedCartView = document.getElementById("populatedCartView");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const summaryTotalItems = document.getElementById("summaryTotalItems");
const summaryMrpTotal = document.getElementById("summaryMrpTotal");
const summaryDiscountTotal = document.getElementById("summaryDiscountTotal");
const summaryPayableTotal = document.getElementById("summaryPayableTotal");
const couponDiscountRow = document.getElementById("couponDiscountRow");
const couponDiscountVal = document.getElementById("couponDiscountVal");
const activeCouponTag = document.getElementById("activeCouponTag");
const cartCouponInput = document.getElementById("cartCouponInput");
const cartRecentOrdersList = document.getElementById("cartRecentOrdersList");
const userDeliveryAddress = document.getElementById("userDeliveryAddress");
const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadDeliveryAddress();
    renderCartPage();
    renderRecentOrders();
    setupEventListeners();
});

// Load Address from LocalStorage if set
function loadDeliveryAddress() {
    const saved = localStorage.getItem("shopEaseDeliveryAddress");
    if (saved && userDeliveryAddress) {
        userDeliveryAddress.textContent = saved;
    }
}

function changeDeliveryAddress() {
    const current = userDeliveryAddress ? userDeliveryAddress.textContent : "Sector 62, Noida - 201301";
    const newAddr = prompt("Enter your delivery address and pincode:", current);
    if (newAddr && newAddr.trim()) {
        localStorage.setItem("shopEaseDeliveryAddress", newAddr.trim());
        if (userDeliveryAddress) userDeliveryAddress.textContent = newAddr.trim();
        showToast("Delivery address updated!");
    }
}
window.changeDeliveryAddress = changeDeliveryAddress;

// Render Full Cart Page
function renderCartPage() {
    cart = JSON.parse(localStorage.getItem("cartoviaCart")) || JSON.parse(localStorage.getItem("shopEaseCart")) || [];
    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    if (headerCartCount) headerCartCount.textContent = totalQty;
    if (bottomCartCount) bottomCartCount.textContent = totalQty;
    if (cartItemsTotalQty) cartItemsTotalQty.textContent = totalQty;

    if (cart.length === 0) {
        if (emptyCartView) emptyCartView.style.display = "block";
        if (populatedCartView) populatedCartView.style.display = "none";
        return;
    }

    if (emptyCartView) emptyCartView.style.display = "none";
    if (populatedCartView) populatedCartView.style.display = "flex";

    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = "";

    let mrpSum = 0;
    let finalSum = 0;

    cart.forEach(item => {
        const qty = item.quantity || 1;
        const itemPrice = item.price || 0;
        const itemMrp = Math.round(itemPrice * 1.35); // Simulated MRP for discount showcase
        mrpSum += itemMrp * qty;
        finalSum += itemPrice * qty;

        const card = document.createElement("div");
        card.className = "cart-item-card";
        card.style.cssText = "background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; display: flex; gap: 16px; align-items: center; box-shadow: var(--shadow);";

        card.innerHTML = `
            <div style="width: 80px; height: 80px; border-radius: 12px; overflow: hidden; flex-shrink: 0; background: var(--surface-soft); border: 1px solid var(--border);">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="flex: 1; min-width: 0;">
                <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 4px;">${item.name}</h4>
                <p style="font-size: 0.78rem; color: var(--text-light); margin-bottom: 6px;">Category: ${item.category || "General"}</p>
                <div style="display: flex; align-items: baseline; gap: 8px;">
                    <span style="font-size: 1.1rem; font-weight: 700; color: var(--primary);">₹${itemPrice.toLocaleString("en-IN")}</span>
                    <span style="font-size: 0.8rem; color: var(--text-light); text-decoration: line-through;">₹${itemMrp.toLocaleString("en-IN")}</span>
                    <span style="font-size: 0.72rem; font-weight: 700; color: #10b981;">35% OFF</span>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 10px;">
                <button class="remove-cart-item" style="background: none; border: none; color: var(--danger); font-size: 1rem; cursor: pointer;" onclick="removeCartItem('${item._id}')" title="Remove item">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <div class="cart-item-quantity" style="display: flex; align-items: center; gap: 8px; background: var(--surface-soft); padding: 4px 8px; border-radius: 99px; border: 1px solid var(--border);">
                    <button class="qty-btn" style="background: none; border: none; font-weight: 700; cursor: pointer; width: 22px;" onclick="changeCartQty('${item._id}', -1)">-</button>
                    <span style="font-size: 0.88rem; font-weight: 700; min-width: 16px; text-align: center;">${qty}</span>
                    <button class="qty-btn" style="background: none; border: none; font-weight: 700; cursor: pointer; width: 22px;" onclick="changeCartQty('${item._id}', 1)">+</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(card);
    });

    // Calculate Summary
    const discountSum = mrpSum - finalSum;
    let payableSum = Math.max(0, finalSum - couponDiscount);

    if (summaryTotalItems) summaryTotalItems.textContent = totalQty;
    if (summaryMrpTotal) summaryMrpTotal.textContent = `₹${mrpSum.toLocaleString("en-IN")}`;
    if (summaryDiscountTotal) summaryDiscountTotal.textContent = `-₹${discountSum.toLocaleString("en-IN")}`;
    if (summaryPayableTotal) summaryPayableTotal.textContent = `₹${payableSum.toLocaleString("en-IN")}`;

    if (activeCoupon && couponDiscount > 0) {
        if (couponDiscountRow) couponDiscountRow.style.display = "flex";
        if (activeCouponTag) activeCouponTag.textContent = activeCoupon;
        if (couponDiscountVal) couponDiscountVal.textContent = `-₹${couponDiscount.toLocaleString("en-IN")}`;
    } else {
        if (couponDiscountRow) couponDiscountRow.style.display = "none";
    }
}

function changeCartQty(id, delta) {
    const item = cart.find(i => i._id === id);
    if (!item) return;
    item.quantity = (item.quantity || 1) + delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i._id !== id);
    }
    saveCart();
    renderCartPage();
}
window.changeCartQty = changeCartQty;

function removeCartItem(id) {
    cart = cart.filter(i => i._id !== id);
    saveCart();
    renderCartPage();
    showToast("Product removed from cart");
}
window.removeCartItem = removeCartItem;

function clearAllCartItems() {
    if (cart.length === 0) return;
    if (confirm("Are you sure you want to remove all products from your cart?")) {
        cart = [];
        activeCoupon = null;
        couponDiscount = 0;
        saveCart();
        renderCartPage();
        showToast("Cart cleared.");
    }
}
window.clearAllCartItems = clearAllCartItems;

function saveCart() {
    localStorage.setItem("cartoviaCart", JSON.stringify(cart));
    localStorage.setItem("shopEaseCart", JSON.stringify(cart));
}

// Coupon Logic
function quickApplyCoupon(code) {
    if (cartCouponInput) cartCouponInput.value = code;
    applyCartCoupon();
}
window.quickApplyCoupon = quickApplyCoupon;

function applyCartCoupon() {
    const code = cartCouponInput ? cartCouponInput.value.trim().toUpperCase() : "";
    if (!code) {
        showToast("Please enter a coupon code");
        return;
    }

    const currentTotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    if (code === "WELCOME50") {
        activeCoupon = "WELCOME50";
        couponDiscount = 50;
        showToast("Coupon WELCOME50 applied! ₹50 saved.");
    } else if (code === "FESTIVE20") {
        activeCoupon = "FESTIVE20";
        couponDiscount = Math.round(currentTotal * 0.20);
        showToast(`Coupon FESTIVE20 applied! 20% (₹${couponDiscount}) saved.`);
    } else if (code === "FLAT200") {
        if (currentTotal < 1999) {
            showToast("FLAT200 is valid only on orders above ₹1,999");
            return;
        }
        activeCoupon = "FLAT200";
        couponDiscount = 200;
        showToast("Coupon FLAT200 applied! ₹200 saved.");
    } else {
        showToast("Invalid promo code. Try WELCOME50 or FESTIVE20.");
        return;
    }

    renderCartPage();
}
window.applyCartCoupon = applyCartCoupon;

function proceedToCheckout() {
    if (cart.length === 0) {
        showToast("Your cart is empty!");
        return;
    }
    // Save active coupon if applied
    if (activeCoupon) {
        localStorage.setItem("shopEaseActiveCoupon", JSON.stringify({ code: activeCoupon, discount: couponDiscount }));
    }
    window.location.href = "index.html#checkout";
}
window.proceedToCheckout = proceedToCheckout;

// Render Placed Orders
function renderRecentOrders() {
    if (!cartRecentOrdersList) return;
    const orders = JSON.parse(localStorage.getItem("shopEasePlacedOrders")) || [];

    if (orders.length === 0) {
        cartRecentOrdersList.innerHTML = `
            <div style="text-align: center; padding: 16px; color: var(--text-light); font-size: 0.88rem;">
                No placed orders yet. Any completed purchases will appear here!
            </div>
        `;
        return;
    }

    cartRecentOrdersList.innerHTML = orders.slice(0, 3).map(ord => `
        <div style="background: var(--surface-soft); border-radius: 12px; padding: 12px 16px; border: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
            <div>
                <span style="font-weight: 700; color: var(--primary); font-size: 0.85rem;">Order #${(ord._id || ord.id || "ORD-5421").slice(-8).toUpperCase()}</span>
                <p style="font-size: 0.78rem; color: var(--text-light); margin-top: 2px;">Placed on ${new Date(ord.createdAt || Date.now()).toLocaleDateString("en-IN")}</p>
            </div>
            <div style="text-align: right;">
                <span style="font-weight: 700; font-size: 0.95rem; color: var(--text);">₹${(ord.totalPrice || ord.total || 999).toLocaleString("en-IN")}</span>
                <p style="font-size: 0.72rem; color: #10b981; font-weight: 700;">${ord.status || "CONFIRMED"}</p>
            </div>
        </div>
    `).join("");
}

// Toast
function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}
window.showToast = showToast;

// Theme Handling
let lastThemeToggleTime = 0;
function toggleTheme() {
    const now = Date.now();
    if (now - lastThemeToggleTime < 350) return;
    lastThemeToggleTime = now;

    const isDark = !document.body.classList.contains("dark-mode");
    if (isDark) {
        document.body.classList.add("dark-mode");
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("dark-theme");
    }

    localStorage.setItem("shopEaseTheme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
    }
}
window.toggleTheme = toggleTheme;

function initTheme() {
    const saved = localStorage.getItem("shopEaseTheme") || localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.add("dark-theme");
        if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

function setupEventListeners() {
    if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
}
