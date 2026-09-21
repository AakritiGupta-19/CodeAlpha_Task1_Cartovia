// ==========================================
// ACCOUNT PAGE JAVASCRIPT - CARTOVIA
// ==========================================

let currentUser = JSON.parse(localStorage.getItem("cartoviaUser")) || JSON.parse(localStorage.getItem("shopEaseUser")) || null;
let authToken = localStorage.getItem("cartoviaToken") || localStorage.getItem("shopEaseToken") || null;
let cart = JSON.parse(localStorage.getItem("cartoviaCart")) || JSON.parse(localStorage.getItem("shopEaseCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("cartoviaWishlist")) || JSON.parse(localStorage.getItem("shopEaseWishlist")) || [];

const API_BASE = (window.location.protocol === "file:" || (window.location.port && window.location.port !== "5000"))
    ? "http://localhost:5000"
    : "";

// DOM Elements
const accountUserName = document.getElementById("accountUserName");
const accountUserContact = document.getElementById("accountUserContact");
const accountAvatarInitials = document.getElementById("accountAvatarInitials");
const accountLogoutBtnText = document.getElementById("accountLogoutBtnText");
const accountHeaderActionText = document.getElementById("accountHeaderActionText");
const accountWishlistCount = document.getElementById("accountWishlistCount");
const bottomCartCount = document.getElementById("bottomCartCount");

const authModal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");
const loginError = document.getElementById("loginError");
const registerError = document.getElementById("registerError");

const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartTotal = document.getElementById("cartTotal");

const wishlistModal = document.getElementById("wishlistModal");
const wishlistItems = document.getElementById("wishlistItems");
const emptyWishlist = document.getElementById("emptyWishlist");

const myOrdersModal = document.getElementById("myOrdersModal");
const myOrdersList = document.getElementById("myOrdersList");
const emptyOrdersState = document.getElementById("emptyOrdersState");

const couponsModal = document.getElementById("couponsModal");
const helpModal = document.getElementById("helpModal");
const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderUserProfile();
    updateCartCount();
    loadAccountWishlist();
    setupEventListeners();
});

// User Profile Rendering
function renderUserProfile() {
    currentUser = JSON.parse(localStorage.getItem("shopEaseUser")) || null;
    authToken = localStorage.getItem("shopEaseToken") || null;

    if (currentUser && (currentUser.name || currentUser.email)) {
        const name = currentUser.name || "Valued Shopper";
        const email = currentUser.email || "";
        accountUserName.textContent = name;
        accountUserContact.innerHTML = `<i class="fa-solid fa-envelope"></i> ${email}`;

        // Get initials (e.g. "DR" from "Deepanshu Rajput")
        const names = name.trim().split(" ");
        let initials = names[0] ? names[0][0].toUpperCase() : "U";
        if (names.length > 1) {
            initials += names[names.length - 1][0].toUpperCase();
        }
        accountAvatarInitials.textContent = initials;

        accountLogoutBtnText.textContent = "Log Out";
        accountHeaderActionText.textContent = "Edit";
    } else {
        accountUserName.textContent = "Welcome, Shopper";
        accountUserContact.innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i> Sign in for faster checkout & tracking`;
        accountAvatarInitials.textContent = "G";
        accountLogoutBtnText.textContent = "Login / Register";
        accountHeaderActionText.textContent = "Login";
    }
}

function handleProfileHeaderAction() {
    if (currentUser) {
        openEditProfileModal();
    } else {
        openAuthModal("login");
    }
}
window.handleProfileHeaderAction = handleProfileHeaderAction;

function handleAccountLogout() {
    if (currentUser) {
        if (confirm("Are you sure you want to log out of ShopEase?")) {
            localStorage.removeItem("shopEaseUser");
            localStorage.removeItem("shopEaseToken");
            currentUser = null;
            authToken = null;
            renderUserProfile();
            showToast("You have been logged out successfully.");
        }
    } else {
        openAuthModal("login");
    }
}
window.handleAccountLogout = handleAccountLogout;

// Auth Modal
function openAuthModal(tab = "login") {
    if (!authModal) return;
    authModal.classList.add("active");
    switchAuthTab(tab);
    document.body.style.overflow = "hidden";
}
window.openAuthModal = openAuthModal;

function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove("active");
    document.body.style.overflow = "";
}
window.closeAuthModal = closeAuthModal;

function switchAuthTab(tab) {
    if (loginError) loginError.style.display = "none";
    if (registerError) registerError.style.display = "none";

    if (tab === "login") {
        tabLogin.classList.add("active");
        tabRegister.classList.remove("active");
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    } else {
        tabRegister.classList.add("active");
        tabLogin.classList.remove("active");
        registerForm.style.display = "flex";
        loginForm.style.display = "none";
    }
}
window.switchAuthTab = switchAuthTab;

async function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    try {
        const res = await fetch(`${API_BASE}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (!res.ok) {
            loginError.textContent = data.message || "Invalid login credentials";
            loginError.style.display = "block";
            return;
        }

        localStorage.setItem("shopEaseToken", data.token);
        localStorage.setItem("shopEaseUser", JSON.stringify(data.user));
        currentUser = data.user;
        authToken = data.token;

        closeAuthModal();
        renderUserProfile();
        showToast(`Welcome back, ${data.user.name || "Shopper"}!`);
    } catch (err) {
        // Fallback for offline or local preview
        const mockUser = { name: email.split("@")[0], email };
        localStorage.setItem("shopEaseUser", JSON.stringify(mockUser));
        currentUser = mockUser;
        closeAuthModal();
        renderUserProfile();
        showToast(`Welcome back, ${mockUser.name}!`);
    }
}
window.handleLoginSubmit = handleLoginSubmit;

async function handleRegisterSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;

    try {
        const res = await fetch(`${API_BASE}/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();
        if (!res.ok) {
            registerError.textContent = data.message || "Registration failed";
            registerError.style.display = "block";
            return;
        }

        localStorage.setItem("shopEaseToken", data.token);
        localStorage.setItem("shopEaseUser", JSON.stringify(data.user));
        currentUser = data.user;
        authToken = data.token;

        closeAuthModal();
        renderUserProfile();
        showToast(`Account created! Welcome to ShopEase, ${data.user.name}!`);
    } catch (err) {
        const mockUser = { name, email };
        localStorage.setItem("shopEaseUser", JSON.stringify(mockUser));
        currentUser = mockUser;
        closeAuthModal();
        renderUserProfile();
        showToast(`Welcome to ShopEase, ${name}!`);
    }
}
window.handleRegisterSubmit = handleRegisterSubmit;

// Quick Actions & Modals
async function openMyOrdersModal() {
    if (!myOrdersModal) return;
    myOrdersModal.classList.add("active");
    document.body.style.overflow = "hidden";

    if (!currentUser) {
        myOrdersList.innerHTML = "";
        emptyOrdersState.style.display = "block";
        emptyOrdersState.querySelector("h3").textContent = "Please Login to View Orders";
        emptyOrdersState.querySelector("p").innerHTML = `<button class="checkout-btn" style="margin-top: 10px; width: auto; padding: 8px 16px;" onclick="closeMyOrdersModal(); openAuthModal('login');">Login Now</button>`;
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/api/orders/myorders`, {
            headers: { "Authorization": `Bearer ${authToken}` }
        });
        if (res.ok) {
            const orders = await res.json();
            renderOrdersList(orders);
            return;
        }
    } catch (e) {
        // Fallback to locally placed order mock
    }

    const localOrders = JSON.parse(localStorage.getItem("shopEasePlacedOrders")) || [];
    renderOrdersList(localOrders);
}
window.openMyOrdersModal = openMyOrdersModal;

function renderOrdersList(orders) {
    if (!orders || orders.length === 0) {
        myOrdersList.innerHTML = "";
        emptyOrdersState.style.display = "block";
        emptyOrdersState.querySelector("h3").textContent = "No orders placed yet";
        emptyOrdersState.querySelector("p").textContent = "Browse our catalog and place your first order!";
        return;
    }

    emptyOrdersState.style.display = "none";
    myOrdersList.innerHTML = orders.map(ord => `
        <div style="background: var(--surface-soft, #fff0f4); border-radius: 12px; padding: 14px; margin-bottom: 12px; border: 1px solid var(--border, #f8d3df);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-weight: 700; color: var(--primary, #5e1343); font-size: 0.85rem;">Order #${(ord._id || ord.id || "ORD-" + Math.floor(1000 + Math.random() * 9000)).slice(-8).toUpperCase()}</span>
                <span style="background: #10b981; color: #fff; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 99px;">${ord.status || "CONFIRMED"}</span>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-light, #7e5a70); margin-bottom: 6px;">Date: ${new Date(ord.createdAt || Date.now()).toLocaleDateString("en-IN")}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(0,0,0,0.06); padding-top: 8px;">
                <span style="font-size: 0.85rem; font-weight: 600;">Total: ₹${(ord.totalPrice || ord.total || 999).toLocaleString("en-IN")}</span>
                <span style="font-size: 0.78rem; color: var(--primary, #5e1343); font-weight: 600;"><i class="fa-solid fa-truck-fast"></i> Expected in 3 days</span>
            </div>
        </div>
    `).join("");
}

function closeMyOrdersModal() {
    if (!myOrdersModal) return;
    myOrdersModal.classList.remove("active");
    document.body.style.overflow = "";
}
window.closeMyOrdersModal = closeMyOrdersModal;

function openCouponsModal() {
    if (!couponsModal) return;
    couponsModal.classList.add("active");
    document.body.style.overflow = "hidden";
}
window.openCouponsModal = openCouponsModal;

function closeCouponsModal() {
    if (!couponsModal) return;
    couponsModal.classList.remove("active");
    document.body.style.overflow = "";
}
window.closeCouponsModal = closeCouponsModal;

function copyCouponCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast(`Coupon code ${code} copied!`);
    }).catch(() => {
        showToast(`Coupon: ${code}`);
    });
}
window.copyCouponCode = copyCouponCode;

function openHelpModal() {
    if (!helpModal) return;
    helpModal.classList.add("active");
    document.body.style.overflow = "hidden";
}
window.openHelpModal = openHelpModal;

function closeHelpModal() {
    if (!helpModal) return;
    helpModal.classList.remove("active");
    document.body.style.overflow = "";
}
window.closeHelpModal = closeHelpModal;

// Wishlist
async function loadAccountWishlist() {
    try {
        const local = localStorage.getItem("shopEaseWishlist") || localStorage.getItem("wishlist");
        if (local) {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed)) wishlist = parsed;
        }
    } catch (e) {}

    updateWishlistCount();

    const token = localStorage.getItem("shopEaseToken");
    if (token) {
        try {
            const res = await fetch(`${API_BASE}/api/wishlist`, {
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                if (data.success && Array.isArray(data.wishlist)) {
                    const map = new Map();
                    wishlist.forEach(i => { if (i && i._id) map.set(String(i._id), i); });
                    data.wishlist.forEach(i => { if (i && i._id) map.set(String(i._id), i); });
                    wishlist = Array.from(map.values());
                    localStorage.setItem("shopEaseWishlist", JSON.stringify(wishlist));
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));
                    updateWishlistCount();
                }
            }
        } catch (err) {}
    }
}

function updateWishlistCount() {
    try {
        const local = localStorage.getItem("shopEaseWishlist") || localStorage.getItem("wishlist");
        if (local) {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed)) wishlist = parsed;
        }
    } catch (e) {}

    if (accountWishlistCount) {
        accountWishlistCount.textContent = wishlist.length;
    }
}

function openWishlist() {
    if (!wishlistModal) return;
    renderWishlist();
    wishlistModal.classList.add("active");
    document.body.style.overflow = "hidden";
}
window.openWishlist = openWishlist;

function closeWishlist() {
    if (!wishlistModal) return;
    wishlistModal.classList.remove("active");
    document.body.style.overflow = "";
}
window.closeWishlist = closeWishlist;

function renderWishlist() {
    try {
        const local = localStorage.getItem("shopEaseWishlist") || localStorage.getItem("wishlist");
        if (local) {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed)) wishlist = parsed;
        }
    } catch (e) {}

    if (!wishlistItems || !emptyWishlist) return;

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = "";
        emptyWishlist.style.display = "block";
        return;
    }

    emptyWishlist.style.display = "none";
    wishlistItems.innerHTML = "";

    wishlist.forEach(item => {
        const el = document.createElement("div");
        el.className = "wishlist-item";
        el.style.display = "flex";
        el.style.alignItems = "center";
        el.style.justifyContent = "space-between";
        el.style.padding = "10px";
        el.style.borderBottom = "1px solid var(--border, #f8d3df)";
        el.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;">
                <div>
                    <h4 style="font-size: 0.85rem; font-weight: 600; color: var(--text);">${item.name}</h4>
                    <p style="font-size: 0.8rem; color: var(--primary); font-weight: 700;">₹${Number(item.price).toLocaleString("en-IN")}</p>
                </div>
            </div>
            <button class="remove-cart-item" onclick="removeWishlistItem('${item._id}')" title="Remove from wishlist">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        wishlistItems.appendChild(el);
    });
}

function removeWishlistItem(id) {
    const pIdStr = String(id);
    wishlist = wishlist.filter(item => String(item._id || item.id) !== pIdStr);
    localStorage.setItem("shopEaseWishlist", JSON.stringify(wishlist));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlist();
    showToast("Item removed from wishlist");

    const token = localStorage.getItem("shopEaseToken");
    if (token) {
        fetch(`${API_BASE}/api/wishlist/${encodeURIComponent(pIdStr)}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        }).catch(() => {});
    }
}
window.removeWishlistItem = removeWishlistItem;

// Cart
function updateCartCount() {
    cart = JSON.parse(localStorage.getItem("shopEaseCart")) || [];
    const total = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    if (bottomCartCount) {
        bottomCartCount.textContent = total;
    }
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
window.closeCart = closeCart;

function renderCart() {
    cart = JSON.parse(localStorage.getItem("shopEaseCart")) || [];
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
    localStorage.setItem("shopEaseCart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
}
window.changeCartQty = changeCartQty;

function removeCartItem(id) {
    cart = cart.filter(i => i._id !== id);
    localStorage.setItem("shopEaseCart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showToast("Item removed from cart");
}
window.removeCartItem = removeCartItem;

// Interactive Feedback Placeholders for Settings
function openPlusZoneModal() {
    showToast("ShopEase Plus: You have 120 SuperCoins active with Free Express Delivery!");
}
window.openPlusZoneModal = openPlusZoneModal;

function openEditProfileModal() {
    if (!currentUser) {
        openAuthModal("login");
        return;
    }
    const newName = prompt("Enter your updated display name:", currentUser.name || "");
    if (newName && newName.trim()) {
        currentUser.name = newName.trim();
        localStorage.setItem("shopEaseUser", JSON.stringify(currentUser));
        renderUserProfile();
        showToast("Profile name updated successfully!");
    }
}
window.openEditProfileModal = openEditProfileModal;

function openSavedCardsModal() {
    showToast("Saved Payment Modes: 1 UPI ID (GPay) & 1 Rupay Debit Card on file.");
}
window.openSavedCardsModal = openSavedCardsModal;

function openSavedAddressesModal() {
    showToast("Default Address: Sector 62, Noida, Uttar Pradesh - 201301");
}
window.openSavedAddressesModal = openSavedAddressesModal;

function openLanguageModal() {
    showToast("Language currently set to English (IN). Hindi and Regional languages coming soon!");
}
window.openLanguageModal = openLanguageModal;

function openNotificationsModal() {
    showToast("Notifications: Order updates & exclusive discounts are enabled.");
}
window.openNotificationsModal = openNotificationsModal;

function openCreatorStudioModal() {
    showToast("ShopEase Creator Studio: Earn up to 10% commission on shared links!");
}
window.openCreatorStudioModal = openCreatorStudioModal;

function openSellOnStoreModal() {
    showToast("Seller Portal: Register with your GSTIN to reach millions of customers.");
}
window.openSellOnStoreModal = openSellOnStoreModal;

function openTermsModal() {
    showToast("Terms & Privacy Policy: 100% genuine products with 7-day hassle-free replacement.");
}
window.openTermsModal = openTermsModal;

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

    window.addEventListener("click", (e) => {
        if (e.target === authModal) closeAuthModal();
        if (e.target === cartModal) closeCart();
        if (e.target === wishlistModal) closeWishlist();
        if (e.target === myOrdersModal) closeMyOrdersModal();
        if (e.target === couponsModal) closeCouponsModal();
        if (e.target === helpModal) closeHelpModal();
    });
}
