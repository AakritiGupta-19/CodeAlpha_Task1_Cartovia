/**
 * CARTOVIA - Dedicated Search & Category Results Page Logic
 * Features:
 * - Exact 2-Column Grid Layout (Meesho / Amazon style)
 * - Up to 100 Products per category or search query (~50 rows × 2 columns)
 * - Sorting by Relevance, Price Low-High, Price High-Low, Rating
 * - Category Chips Bar for 1-click filtering
 * - Cart, Wishlist & Modal persistence with localStorage
 */

// Base API URL: Automatically detects if accessed via Express (port 5000) or Live Server / other ports
const API_BASE = (window.location.protocol === "file:" || (window.location.port && window.location.port !== "5000"))
    ? "http://localhost:5000"
    : "";

let allProducts = (window.ALL_CATALOG_PRODUCTS && window.ALL_CATALOG_PRODUCTS.length > 0)
    ? window.ALL_CATALOG_PRODUCTS
    : [];

let currentQuery = "";
let currentCategory = "ALL";
let currentProducts = [];

// Cart & Wishlist synced with localStorage (shared with index.html)
let cart = JSON.parse(localStorage.getItem("cartoviaCart")) || JSON.parse(localStorage.getItem("shopEaseCart")) || JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("cartoviaWishlist")) || JSON.parse(localStorage.getItem("shopEaseWishlist")) || JSON.parse(localStorage.getItem("wishlist")) || [];

function saveCart() {
    localStorage.setItem("cartoviaCart", JSON.stringify(cart));
    localStorage.setItem("shopEaseCart", JSON.stringify(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
}

function saveWishlist() {
    try {
        localStorage.setItem("cartoviaWishlist", JSON.stringify(wishlist));
        localStorage.setItem("shopEaseWishlist", JSON.stringify(wishlist));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (e) {
        console.warn("Error saving wishlist:", e);
    }
    syncWishlistWithBackend();
}

async function loadWishlist() {
    try {
        const local = localStorage.getItem("shopEaseWishlist") || localStorage.getItem("wishlist");
        if (local) {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed)) wishlist = parsed;
        }
    } catch (e) {}

    updateWishlistCount();
    syncAllWishlistHeartIcons();

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
                    syncAllWishlistHeartIcons();
                }
            }
        } catch (err) {}
    }
}

async function syncWishlistWithBackend(productToToggle = null) {
    const token = localStorage.getItem("shopEaseToken");
    if (!token) return;
    try {
        if (productToToggle) {
            await fetch(`${API_BASE}/api/wishlist/toggle`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({ product: productToToggle })
            });
        } else {
            await fetch(`${API_BASE}/api/wishlist/sync`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({ localWishlist: wishlist })
            });
        }
    } catch (e) {}
}

// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const resultsPageTitle = document.getElementById("resultsPageTitle");
const resultsCountBadge = document.getElementById("resultsCountBadge");
const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");
const resultsSortSelect = document.getElementById("resultsSortSelect");
const resultsCategoryChips = document.getElementById("resultsCategoryChips");
const resultsGrid2Col = document.getElementById("resultsGrid2Col");
const resultsEmptyState = document.getElementById("resultsEmptyState");
const emptyStateMsg = document.getElementById("emptyStateMsg");
const emptyStateExploreBtn = document.getElementById("emptyStateExploreBtn");

// Modals
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const closeCartModal = document.getElementById("closeCartModal");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartTotal = document.getElementById("cartTotal");

const wishlistButton = document.getElementById("wishlistButton");
const wishlistCount = document.getElementById("wishlistCount");

const productModal = document.getElementById("productModal");
const closeProductModal = document.getElementById("closeProductModal");
const productDetails = document.getElementById("productDetails");

const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// Initialize on page load
document.addEventListener("DOMContentLoaded", async () => {
    initTheme();
    updateCartCount();
    loadWishlist();
    setupEventListeners();

    // Read URL query parameter (passed from home page category buttons or search bar)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("cat") || urlParams.get("category");
    const qParam = urlParams.get("q") || urlParams.get("search");

    const initialQuery = catParam || qParam || "Clothing";
    const isCatExplicit = Boolean(catParam);
    
    // Automatically fill the category / query in the search option
    if (searchInput) {
        searchInput.value = initialQuery;
        updateSearchClearBtn();
    }

    await executeSearch(initialQuery, isCatExplicit);
});

// Comprehensive Semantic Category Keywords Mapping
const CATEGORY_KEYWORD_RULES = [
    {
        category: "Clothing",
        keywords: [
            "kurti", "kurtis", "kurta", "kurtas", "shirt", "shirts", "t-shirt", "tshirt", "tshirts", "t-shirts",
            "top", "tops", "dress", "dresses", "jeans", "jean", "denim", "pant", "pants", "trouser", "trousers",
            "pajama", "pajamas", "pyjama", "pyjamas", "nightwear", "sleepwear", "jacket", "jackets", "hoodie", "hoodies",
            "suit", "suits", "saree", "sarees", "sari", "saris", "legging", "leggings", "skirt", "skirts",
            "cloth", "clothes", "clothing", "apparel", "wear", "ethnic", "blazer", "sweater", "sweatshirt",
            "tracksuit", "shorts", "dupatta", "palazzo", "lehenga"
        ]
    },
    {
        category: "Watches",
        keywords: [
            "girl watch", "girl watches", "girls watch", "girls watches",
            "boy watch", "boy watches", "boys watch", "boys watches",
            "women watch", "women watches", "womens watch", "ladies watch", "ladies watches",
            "men watch", "men watches", "mens watch", "kid watch", "kids watch",
            "smartwatch", "smart watch", "smartwatches", "smart watches",
            "analog watch", "digital watch", "chronograph", "wrist watch", "wristwatch", "wristwatches",
            "watch", "watches", "fitness band", "timepiece", "clock"
        ]
    },
    {
        category: "Bags",
        keywords: [
            "purse", "purses", "ladies purse", "ladies purses",
            "handbag", "handbags", "hand bag", "hand bags",
            "women bag", "women bags", "womens bag", "womens bags",
            "ladies bag", "ladies bags", "girl bag", "girls bag",
            "tote", "tote bag", "tote bags", "totes",
            "backpack", "backpacks", "clutch", "clutches", "wallet", "wallets",
            "sling bag", "sling bags", "shoulder bag", "shoulder bags",
            "crossbody", "duffle", "duffle bag", "travel bag", "luggage", "suitcase",
            "bag", "bags"
        ]
    },
    {
        category: "Shoes",
        keywords: [
            "running shoe", "running shoes", "sports shoe", "sports shoes", "formal shoe", "formal shoes",
            "sneaker", "sneakers", "shoe", "shoes", "footwear", "boot", "boots", "loafer", "loafers",
            "sandal", "sandals", "slipper", "slippers", "heel", "heels", "high heels", "flat", "flats",
            "jogger", "joggers", "canvas", "chappal", "flip flop", "flip flops", "slides", "crocs", "trainers"
        ]
    },
    {
        category: "Electronics",
        keywords: [
            "headphone", "headphones", "earphone", "earphones", "earbud", "earbuds", "airpod", "airpods",
            "speaker", "speakers", "bluetooth", "wireless", "laptop", "laptops", "mobile", "mobiles",
            "phone", "phones", "smartphone", "smartphones", "charger", "chargers", "cable", "cables",
            "power bank", "powerbank", "camera", "cameras", "mouse", "keyboard", "keyboards",
            "tablet", "tablets", "ipad", "gadget", "gadgets", "electronic", "electronics"
        ]
    },
    {
        category: "Accessories",
        keywords: [
            "sunglass", "sunglasses", "shades", "goggle", "goggles", "eyewear", "spectacle", "spectacles",
            "belt", "belts", "leather belt", "cap", "caps", "hat", "hats", "scarf", "scarves",
            "jewelry", "jewellery", "ring", "rings", "necklace", "necklaces", "chain", "chains",
            "bracelet", "bracelets", "bangle", "bangles", "earring", "earrings", "cufflinks",
            "accessory", "accessories"
        ]
    },
    {
        category: "Kids & Toys",
        keywords: [
            "kid toy", "kid toys", "kids toy", "kids toys", "baby toy", "baby toys",
            "toy", "toys", "kid", "kids", "baby", "toddler", "toddlers", "child", "children",
            "doll", "dolls", "action figure", "action figures", "board game", "board games",
            "puzzle", "puzzles", "lego", "blocks", "teddy", "teddy bear", "plush", "plushie"
        ]
    },
    {
        category: "Books",
        keywords: [
            "novel", "novels", "storybook", "storybooks", "comic", "comics", "manga",
            "fiction", "non-fiction", "biography", "textbook", "textbooks", "magazine", "magazines",
            "stationery", "notebook", "notebooks", "diary", "reading", "book", "books"
        ]
    },
    {
        category: "Home",
        keywords: [
            "cushion", "cushions", "bedsheet", "bedsheets", "curtain", "curtains", "lamp", "lamps",
            "light", "lighting", "wall decor", "vase", "vases", "carpet", "carpets", "rug", "rugs",
            "blanket", "blankets", "bedding", "cookware", "pot", "pots", "pan", "pans",
            "mug", "mugs", "cup", "cups", "pillow", "pillows", "furniture", "kitchen", "decor", "home"
        ]
    }
];

const knownCategories = [
    "Clothing", "Shoes", "Watches", "Electronics", 
    "Bags", "Accessories", "Kids & Toys", "Books", "Home"
];

function resolveSemanticCategory(input) {
    if (!input) return null;
    const clean = input.trim().toLowerCase();
    if (clean === "all") return null;

    // Check direct known categories
    const direct = knownCategories.find(c => c.toLowerCase() === clean);
    if (direct) return direct;

    // Check semantic keyword rules
    for (const rule of CATEGORY_KEYWORD_RULES) {
        for (const kw of rule.keywords) {
            if (clean === kw || clean.startsWith(kw + " ") || clean.endsWith(" " + kw) || clean.includes(" " + kw + " ") || clean.includes(kw)) {
                return rule.category;
            }
        }
    }
    return null;
}

// Execute Search and display up to 100 products in 2-Column Grid (Direct Backend Integration)
async function executeSearch(queryOrCategory, isCategoryExplicit = false) {
    const rawVal = (queryOrCategory || "").trim();
    if (!rawVal) return;

    currentQuery = rawVal;
    const qLower = rawVal.toLowerCase();

    let targetCategory = isCategoryExplicit
        ? (knownCategories.find(c => c.toLowerCase() === qLower) || rawVal)
        : resolveSemanticCategory(rawVal);

    if (!targetCategory && !isCategoryExplicit) {
        targetCategory = knownCategories.find(c => 
            c.toLowerCase() === qLower ||
            c.toLowerCase().startsWith(qLower) || 
            qLower.startsWith(c.toLowerCase().slice(0, 4))
        );
    }

    // Auto-fill and synchronize the search input with the active category/query
    if (searchInput) {
        searchInput.value = rawVal;
        updateSearchClearBtn();
    }

    // Show loading UI in grid
    if (resultsGrid2Col) {
        resultsGrid2Col.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-light);">
                <i class="fa-solid fa-spinner fa-spin fa-2x" style="color: var(--primary); margin-bottom: 12px;"></i>
                <p>Loading products from store catalog...</p>
            </div>
        `;
        resultsGrid2Col.style.display = "grid";
    }

    let fetchedFromBackend = false;

    // 1. Fetch from Backend /api/products (supports category & search query filtering up to 100 items)
    try {
        const queryUrl = targetCategory
            ? `${API_BASE}/api/products?category=${encodeURIComponent(targetCategory)}&limit=100`
            : `${API_BASE}/api/products?q=${encodeURIComponent(rawVal)}&limit=100`;

        const res = await fetch(queryUrl);
        if (res.ok) {
            const data = await res.json();
            if (data.success && Array.isArray(data.products) && data.products.length > 0) {
                currentProducts = data.products.slice(0, 100);
                fetchedFromBackend = true;
                if (data.category) targetCategory = data.category;
            }
        }
    } catch (err) {
        console.warn("Backend API query failed, falling back to local dataset:", err);
    }

    // 2. Fallback to in-memory catalog if offline or DB error
    if (!fetchedFromBackend) {
        const catalog = (allProducts && allProducts.length > 0)
            ? allProducts
            : (window.ALL_CATALOG_PRODUCTS || []);

        let matched = [];
        if (targetCategory && (isCategoryExplicit || categorySynonyms[qLower] || knownCategories.some(c => c.toLowerCase() === qLower))) {
            matched = catalog.filter(p => (p.category || "").toLowerCase() === targetCategory.toLowerCase());
        } else {
            const scored = [];
            catalog.forEach(product => {
                const score = getRelevanceScore(product, rawVal);
                if (score > 0) {
                    scored.push({ product, score });
                }
            });
            scored.sort((a, b) => b.score - a.score);
            matched = scored.map(s => s.product);
        }
        currentProducts = matched.slice(0, 100);
    }

    currentCategory = targetCategory || "ALL";

    // Update Header & Breadcrumbs
    if (resultsPageTitle) {
        if (currentCategory !== "ALL") {
            resultsPageTitle.textContent = `${currentCategory} Collection`;
        } else {
            resultsPageTitle.textContent = `Search Results for "${rawVal}"`;
        }
    }

    if (resultsCountBadge) {
        resultsCountBadge.textContent = `${currentProducts.length} Products`;
    }

    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = (currentCategory !== "ALL") ? currentCategory : `"${rawVal}"`;
    }

    // Highlight active category chip
    updateCategoryChips(currentCategory);

    // Reset sort
    if (resultsSortSelect) {
        resultsSortSelect.value = "relevance";
    }

    // Render 2-Column Grid with up to 100 products
    render2ColGrid(currentProducts);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Sync URL in address bar without reloading
    try {
        const newUrl = currentCategory !== "ALL"
            ? `search.html?cat=${encodeURIComponent(currentCategory)}&q=${encodeURIComponent(currentCategory)}`
            : `search.html?q=${encodeURIComponent(rawVal)}`;
        window.history.replaceState({ query: rawVal, category: currentCategory }, "", newUrl);
    } catch (e) {
        // history API might be restricted in some iframe environments
    }
}

// Multi-tier Relevance Scoring
function getRelevanceScore(product, query) {
    if (!query) return 1;
    const q = query.toLowerCase().trim();
    const name = (product.name || "").toLowerCase();
    const cat = (product.category || "").toLowerCase();

    let score = 0;
    if (name.startsWith(q)) score += 1000;
    const words = name.split(/[\s\-–,]+/);
    if (words.some(w => w.startsWith(q))) score += 800;
    if (cat.startsWith(q)) score += 750;
    if (name.includes(q)) score += 500;
    if (cat.includes(q)) score += 400;
    return score;
}

// Render 2-Column Grid
function render2ColGrid(products) {
    if (!resultsGrid2Col) return;
    resultsGrid2Col.innerHTML = "";

    if (!products || products.length === 0) {
        if (resultsEmptyState) {
            resultsEmptyState.style.display = "block";
            if (emptyStateMsg) {
                emptyStateMsg.textContent = `No products found matching "${currentQuery}". Try exploring categories like Clothing, Shoes, or Watches!`;
            }
        }
        resultsGrid2Col.style.display = "none";
        return;
    }

    if (resultsEmptyState) resultsEmptyState.style.display = "none";
    resultsGrid2Col.style.display = "grid";

    products.forEach((product, index) => {
        const inWishlist = wishlist.some(item => item._id === product._id);
        const originalPrice = Math.round(product.price * 1.35);
        const discountPercent = Math.round(((originalPrice - product.price) / originalPrice) * 100);
        const rating = Number(product.rating || 4.5).toFixed(1);
        const reviewsCount = 30 + ((index * 17) % 350);

        const card = document.createElement("article");
        card.className = "product-card-2col";
        card.setAttribute("data-id", product._id);

        card.innerHTML = `
            <div class="card-2col-media">
                <img 
                    src="${product.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'}" 
                    alt="${product.name}" 
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30';"
                    onclick="showProductDetails('${product._id}')"
                    style="cursor: pointer;"
                />
                <span class="card-2col-badge">${product.category}</span>
                <button 
                    type="button"
                    class="card-2col-wishlist-btn ${inWishlist ? 'active' : ''}" 
                    onclick="toggleWishlist('${product._id}', event)"
                    title="${inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                    aria-label="Wishlist">
                    <i class="${inWishlist ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>
            <div class="card-2col-body">
                <h3 class="card-2col-title" title="${product.name}" onclick="showProductDetails('${product._id}')" style="cursor: pointer;">
                    ${product.name}
                </h3>
                <div class="card-2col-price-row">
                    <span class="card-2col-current-price">₹${Number(product.price).toLocaleString("en-IN")}</span>
                    <span class="card-2col-original-price">₹${Number(originalPrice).toLocaleString("en-IN")}</span>
                    <span class="card-2col-discount">${discountPercent}% off</span>
                </div>
                <div class="card-2col-meta">
                    <div class="card-2col-rating">
                        <span>${rating}</span>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="card-2col-reviews">(${reviewsCount})</span>
                    <span class="card-2col-delivery"><i class="fa-solid fa-truck-fast"></i> Free Delivery</span>
                </div>
                <div class="card-2col-actions">
                    <button type="button" class="card-2col-add-btn" onclick="addToCart('${product._id}')">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;

        resultsGrid2Col.appendChild(card);
    });
}

// Sorting
function applySort() {
    if (!resultsSortSelect || !currentProducts || currentProducts.length === 0) return;
    const sortVal = resultsSortSelect.value;
    const sorted = [...currentProducts];

    if (sortVal === "price-asc") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-desc") {
        sorted.sort((a, b) => b.price - a.price);
    } else if (sortVal === "rating-desc") {
        sorted.sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5));
    } else {
        if (currentQuery) {
            sorted.sort((a, b) => getRelevanceScore(b, currentQuery) - getRelevanceScore(a, currentQuery));
        }
    }

    render2ColGrid(sorted);
}

// Category Chips Sync
function updateCategoryChips(activeCat) {
    if (!resultsCategoryChips) return;
    const chips = resultsCategoryChips.querySelectorAll(".res-cat-chip");
    chips.forEach(chip => {
        const cat = chip.dataset.category;
        chip.classList.toggle("active", cat.toLowerCase() === (activeCat || "ALL").toLowerCase());
    });
}

// Clear button update
function updateSearchClearBtn() {
    if (searchClearBtn && searchInput) {
        searchClearBtn.style.display = searchInput.value.trim() ? "inline-flex" : "none";
    }
}

function syncAllWishlistHeartIcons() {
    document.querySelectorAll(".card-2col-wishlist-btn").forEach(btn => {
        const card = btn.closest(".product-card-2col");
        if (card && card.dataset.id) {
            const isNowInWishlist = wishlist.some(i => String(i._id || i.id) === String(card.dataset.id));
            btn.classList.toggle("active", isNowInWishlist);
            btn.title = isNowInWishlist ? "Remove from Wishlist" : "Add to Wishlist";
            const icon = btn.querySelector("i");
            if (icon) {
                icon.className = isNowInWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart";
            }
        }
    });
}

// Wishlist Toggle
function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    const pIdStr = String(productId);
    const product = (currentProducts && currentProducts.find(p => String(p._id || p.id) === pIdStr)) ||
                    (allProducts && allProducts.find(p => String(p._id || p.id) === pIdStr)) ||
                    (window.ALL_CATALOG_PRODUCTS && window.ALL_CATALOG_PRODUCTS.find(p => String(p._id || p.id) === pIdStr)) ||
                    wishlist.find(p => String(p._id || p.id) === pIdStr);
    if (!product) return;

    const idx = wishlist.findIndex(item => String(item._id || item.id) === pIdStr);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast("Removed from wishlist");
        syncWishlistWithBackend(product);
    } else {
        const itemToSave = {
            _id: String(product._id || product.id || pIdStr),
            name: product.name,
            price: Number(product.price) || 0,
            image: product.image || "",
            category: product.category || "General",
            description: product.description || "",
            rating: Number(product.rating) || 4.5
        };
        wishlist.push(itemToSave);
        showToast("Added to wishlist!");
        syncWishlistWithBackend(itemToSave);
    }

    saveWishlist();
    updateWishlistCount();
    syncAllWishlistHeartIcons();

    const wishlistModal = document.getElementById("wishlistModal");
    if (wishlistModal && wishlistModal.classList.contains("active")) {
        renderWishlist();
    }
}

function updateWishlistCount() {
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

function openWishlist() {
    const wishlistModal = document.getElementById("wishlistModal");
    if (!wishlistModal) return;
    renderWishlist();
    wishlistModal.classList.add("active");
    document.body.style.overflow = "hidden";
}
window.openWishlist = openWishlist;

function closeWishlist() {
    const wishlistModal = document.getElementById("wishlistModal");
    if (!wishlistModal) return;
    wishlistModal.classList.remove("active");
    document.body.style.overflow = "";
}
window.closeWishlist = closeWishlist;

function renderWishlist() {
    const wishlistItemsList = document.getElementById("wishlistItemsList");
    const emptyWishlist = document.getElementById("emptyWishlist");
    if (!wishlistItemsList || !emptyWishlist) return;

    try {
        const local = localStorage.getItem("shopEaseWishlist") || localStorage.getItem("wishlist");
        if (local) {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed)) wishlist = parsed;
        }
    } catch (e) {}

    if (wishlist.length === 0) {
        wishlistItemsList.innerHTML = "";
        emptyWishlist.style.display = "block";
        return;
    }

    emptyWishlist.style.display = "none";
    wishlistItemsList.innerHTML = wishlist.map(item => `
        <div class="wishlist-item-row" id="wishlist-row-${item._id}" style="display: flex; gap: 12px; align-items: center; padding: 12px; border-bottom: 1px solid var(--border); justify-content: space-between;">
            <div style="display: flex; gap: 10px; align-items: center;">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
                <div>
                    <h4 style="font-size: 0.88rem; font-weight: 600; color: var(--text);">${item.name}</h4>
                    <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary);">₹${Number(item.price).toLocaleString("en-IN")}</span>
                </div>
            </div>
            <div style="display: flex; gap: 6px;">
                <button class="checkout-btn" style="padding: 6px 10px; font-size: 0.78rem; width: auto;" onclick="addToCart('${item._id}'); removeFromWishlist('${item._id}')" title="Move to Cart">Cart</button>
                <button class="remove-cart-item" onclick="removeFromWishlist('${item._id}')" title="Remove" style="background:none; border:none; color:var(--danger); cursor:pointer; font-size:1rem;"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `).join("");
}

function removeFromWishlist(productId) {
    const pIdStr = String(productId);
    wishlist = wishlist.filter(item => String(item._id || item.id) !== pIdStr);
    saveWishlist();
    updateWishlistCount();
    renderWishlist();
    syncAllWishlistHeartIcons();
    showToast("Removed from wishlist");
}
window.removeFromWishlist = removeFromWishlist;

// Cart
function addToCart(productId) {
    const product = (currentProducts && currentProducts.find(p => p._id === productId)) ||
                    (allProducts && allProducts.find(p => p._id === productId)) ||
                    (window.ALL_CATALOG_PRODUCTS && window.ALL_CATALOG_PRODUCTS.find(p => p._id === productId));
    if (!product) return;

    const existing = cart.find(item => item._id === productId);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

function updateCartCount() {
    const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
    const bottomCartBadge = document.getElementById("bottomCartCount");
    if (bottomCartBadge) {
        bottomCartBadge.textContent = totalItems;
    }
}

function openCart() {
    if (!cartModal) return;
    renderCart();
    cartModal.classList.add("active");
}

function closeCart() {
    if (cartModal) cartModal.classList.remove("active");
}

function renderCart() {
    if (!cartItems || !cartTotal || !emptyCart) return;
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        emptyCart.style.display = "block";
        cartTotal.textContent = "₹0";
        return;
    }

    emptyCart.style.display = "none";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>₹${Number(item.price).toLocaleString("en-IN")}</p>
                <div class="cart-qty-controls">
                    <button onclick="changeCartQty('${item._id}', -1)">-</button>
                    <span>${item.quantity || 1}</span>
                    <button onclick="changeCartQty('${item._id}', 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeCartItem('${item._id}')">
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

function removeCartItem(id) {
    cart = cart.filter(i => i._id !== id);
    saveCart();
    updateCartCount();
    renderCart();
    showToast("Item removed from cart");
}

// Product Details Modal
function showProductDetails(productId) {
    const product = (currentProducts && currentProducts.find(p => p._id === productId)) ||
                    (allProducts && allProducts.find(p => p._id === productId)) ||
                    (window.ALL_CATALOG_PRODUCTS && window.ALL_CATALOG_PRODUCTS.find(p => p._id === productId));
    if (!product || !productModal || !productDetails) return;

    productDetails.innerHTML = `
        <div class="product-details-container">
            <div class="product-details-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details-info">
                <span class="card-2col-badge" style="display:inline-block; margin-bottom: 8px;">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="product-rating" style="margin: 8px 0;">
                    <i class="fa-solid fa-star" style="color: #f59e0b;"></i>
                    <span>${product.rating || 4.5} / 5</span>
                </div>
                <p class="product-details-price" style="font-size: 1.5rem; font-weight: 700; color: var(--primary); margin: 12px 0;">
                    ₹${Number(product.price).toLocaleString("en-IN")}
                </p>
                <p class="product-details-desc" style="color: var(--text-light); line-height: 1.6; margin-bottom: 20px;">
                    ${product.description}
                </p>
                <div style="display: flex; gap: 12px;">
                    <button class="primary-btn" onclick="addToCart('${product._id}'); closeProductModalView();" style="flex: 1;">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="icon-btn" onclick="toggleWishlist('${product._id}', event)" title="Wishlist">
                        <i class="fa-solid fa-heart" style="color: ${wishlist.some(i => i._id === product._id) ? '#ef4444' : 'inherit'};"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    productModal.classList.add("active");
}

function closeProductModalView() {
    if (productModal) productModal.classList.remove("active");
}

// Toast
function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add("active");
    setTimeout(() => {
        toast.classList.remove("active");
    }, 2800);
}

// Theme
function initTheme() {
    const saved = localStorage.getItem("shopEaseTheme") || localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark-theme");
        if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("shopEaseTheme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
}

// Event Listeners
function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener("input", updateSearchClearBtn);
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                const val = searchInput.value.trim();
                if (val) executeSearch(val);
            }
        });
    }

    if (searchClearBtn) {
        searchClearBtn.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                searchInput.focus();
                updateSearchClearBtn();
            }
        });
    }

    if (resultsSortSelect) {
        resultsSortSelect.addEventListener("change", applySort);
    }

    if (resultsCategoryChips) {
        const chips = resultsCategoryChips.querySelectorAll(".res-cat-chip");
        chips.forEach(chip => {
            chip.addEventListener("click", () => {
                const cat = chip.dataset.category;
                if (cat === "ALL") {
                    if (searchInput) searchInput.value = "";
                    updateSearchClearBtn();
                    executeSearch("Clothing", false);
                } else {
                    if (searchInput) searchInput.value = cat;
                    updateSearchClearBtn();
                    executeSearch(cat, true);
                }
            });
        });
    }

    if (emptyStateExploreBtn) {
        emptyStateExploreBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "Clothing";
            updateSearchClearBtn();
            executeSearch("Clothing", true);
        });
    }

    if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
    if (cartButton) cartButton.addEventListener("click", openCart);
    const bottomCartBtn = document.getElementById("bottomCartBtn");
    if (bottomCartBtn) bottomCartBtn.addEventListener("click", openCart);
    if (closeCartModal) closeCartModal.addEventListener("click", closeCart);
    if (closeProductModal) closeProductModal.addEventListener("click", closeProductModalView);

    window.addEventListener("click", (e) => {
        if (e.target === cartModal) closeCart();
        if (e.target === productModal) closeProductModalView();
    });
}
