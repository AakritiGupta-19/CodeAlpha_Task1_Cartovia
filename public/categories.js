// ==========================================
// CATEGORIES PAGE JAVASCRIPT - CARTOVIA
// ==========================================

let cart = JSON.parse(localStorage.getItem("cartoviaCart")) || JSON.parse(localStorage.getItem("shopEaseCart")) || [];

// DOM Elements
const themeToggle = document.getElementById("themeToggle");
const cartModal = document.getElementById("cartModal");
const closeCartModal = document.getElementById("closeCartModal");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartTotal = document.getElementById("cartTotal");
const bottomCartBtn = document.getElementById("bottomCartBtn");
const bottomCartCount = document.getElementById("bottomCartCount");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    updateCartCount();
    setupEventListeners();
});

// Category Navigation to Search with 100 Products
function openCategorySearch(categoryName) {
    if (!categoryName) return;
    const cleanCat = categoryName.trim();
    window.location.href = `search.html?cat=${encodeURIComponent(cleanCat)}&q=${encodeURIComponent(cleanCat)}`;
}
window.openCategorySearch = openCategorySearch;

// Cart Helpers
function updateCartCount() {
    const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    if (bottomCartCount) {
        bottomCartCount.textContent = totalItems;
    }
}

function saveCart() {
    localStorage.setItem("cartoviaCart", JSON.stringify(cart));
    localStorage.setItem("shopEaseCart", JSON.stringify(cart));
}

function openCart() {
    if (!cartModal) return;
    renderCart();
    cartModal.classList.add("active");
    document.body.style.overflow = "hidden";
}
window.openCart = openCart;

function closeCart() {
    if (!cartModal) return;
    cartModal.classList.remove("active");
    document.body.style.overflow = "";
}

function renderCart() {
    if (!cartItems || !cartTotal || !emptyCart) return;

    if (cart.length === 0) {
        cartItems.innerHTML = "";
        emptyCart.style.display = "block";
        cartTotal.textContent = "₹0";
        return;
    }

    emptyCart.style.display = "none";
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</p>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="changeCartQty('${item._id}', -1)">-</button>
                    <span>${item.quantity || 1}</span>
                    <button class="qty-btn" onclick="changeCartQty('${item._id}', 1)">+</button>
                </div>
            </div>
            <button class="remove-cart-item" onclick="removeCartItem('${item._id}')" title="Remove item">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(row);
    });

    cartTotal.textContent = `₹${total.toLocaleString("en-IN")}`;
}

function changeCartQty(id, delta) {
    const item = cart.find(i => i._id === id);
    if (!item) return;
    item.quantity = (item.quantity || 1) + delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i._id !== id);
    }
    saveCart();
    updateCartCount();
    renderCart();
}
window.changeCartQty = changeCartQty;

function removeCartItem(id) {
    cart = cart.filter(i => i._id !== id);
    saveCart();
    updateCartCount();
    renderCart();
    showToast("Item removed from cart");
}
window.removeCartItem = removeCartItem;

function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

// Theme Handling
function initTheme() {
    const saved = localStorage.getItem("shopEaseTheme") || localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("shopEaseTheme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
}

function setupEventListeners() {
    if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
    if (bottomCartBtn) bottomCartBtn.addEventListener("click", openCart);
    if (closeCartModal) closeCartModal.addEventListener("click", closeCart);

    window.addEventListener("click", (e) => {
        if (e.target === cartModal) closeCart();
    });
}
