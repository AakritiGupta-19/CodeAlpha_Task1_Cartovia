// ==========================================
// SHOP EASE - E-COMMERCE JAVASCRIPT
// STEP 5C
// ==========================================

// ==========================================
// GLOBAL VARIABLES
// ==========================================

let allProducts = [];
let filteredProducts = [];

let cart = JSON.parse(localStorage.getItem("cartoviaCart")) || JSON.parse(localStorage.getItem("shopEaseCart")) || [];

// Step 9: Wishlist State
let wishlist = JSON.parse(localStorage.getItem("cartoviaWishlist")) || JSON.parse(localStorage.getItem("shopEaseWishlist")) || [];

// Step 9: Active Coupon State
let activeCoupon = null;

// Step 6: User Authentication State
let currentUser = JSON.parse(localStorage.getItem("cartoviaUser")) || JSON.parse(localStorage.getItem("shopEaseUser")) || null;
let authToken = localStorage.getItem("cartoviaToken") || localStorage.getItem("shopEaseToken") || null;

let selectedCategory = "all";

// ==========================================
// DOM ELEMENTS
// ==========================================

const productsGrid = document.getElementById("productsGrid");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

const searchInput = document.getElementById("searchInput");
const searchBoxContainer = document.getElementById("searchBoxContainer");
const searchClearBtn = document.getElementById("searchClearBtn");
const mobileSearchBoxContainer = document.getElementById("mobileSearchBoxContainer");
const mobileSearchClearBtn = document.getElementById("mobileSearchClearBtn");

const categoryButtons = document.querySelectorAll(".category-btn");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

const cartModal = document.getElementById("cartModal");
const closeCartModal = document.getElementById("closeCartModal");

const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartTotal = document.getElementById("cartTotal");

const checkoutButton = document.getElementById("checkoutButton");

const productModal = document.getElementById("productModal");
const closeProductModal = document.getElementById("closeProductModal");
const productDetails = document.getElementById("productDetails");

const themeToggle = document.getElementById("themeToggle");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

const newsletterForm = document.getElementById("newsletterForm");

// Base API URL: Automatically detects if accessed via Express (port 5000) or Live Preview / other ports
const API_BASE = (window.location.protocol === "file:" || (window.location.port && window.location.port !== "5000"))
    ? "http://localhost:5000"
    : "";

// Step 6: Auth DOM Elements
const authButton = document.getElementById("authButton");
const authBtnText = document.getElementById("authBtnText");
const mobileAuthBtn = document.getElementById("mobileAuthBtn");
const mobileAuthBtnText = document.getElementById("mobileAuthBtnText");

const mobileSearchInput = document.getElementById("mobileSearchInput");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");
const mobileCartBtn = document.getElementById("mobileCartBtn");
const mobileCartCount = document.getElementById("mobileCartCount");

const authModal = document.getElementById("authModal");
const closeAuthModalBtn = document.getElementById("closeAuthModal");
const authTabsHeader = document.getElementById("authTabsHeader");
const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginError = document.getElementById("loginError");
const registerError = document.getElementById("registerError");

const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");

const authProfileView = document.getElementById("authProfileView");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const logoutButton = document.getElementById("logoutButton");

// Step 7: Order & Checkout DOM Elements
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutModalBtn = document.getElementById("closeCheckoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const shipName = document.getElementById("shipName");
const shipPhone = document.getElementById("shipPhone");
const shipStreet = document.getElementById("shipStreet");
const shipCity = document.getElementById("shipCity");
const shipPin = document.getElementById("shipPin");
const checkoutItemsList = document.getElementById("checkoutItemsList");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutGrandTotal = document.getElementById("checkoutGrandTotal");
const checkoutError = document.getElementById("checkoutError");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const optCod = document.getElementById("optCod");
const optUpi = document.getElementById("optUpi");

const orderSuccessModal = document.getElementById("orderSuccessModal");
const successOrderId = document.getElementById("successOrderId");
const successDeliveryDate = document.getElementById("successDeliveryDate");
const successDeliverTo = document.getElementById("successDeliverTo");
const successTotalPaid = document.getElementById("successTotalPaid");
const successViewOrdersBtn = document.getElementById("successViewOrdersBtn");
const successContinueBtn = document.getElementById("successContinueBtn");

const myOrdersModal = document.getElementById("myOrdersModal");
const closeOrdersModalBtn = document.getElementById("closeOrdersModal");
const ordersContent = document.getElementById("ordersContent");
const profileOrdersBtn = document.getElementById("profileOrdersBtn");

// Step 7: Order Cancellation DOM Elements
const cancelOrderModal = document.getElementById("cancelOrderModal");
const closeCancelModalBtn = document.getElementById("closeCancelModal");
const cancelOrderForm = document.getElementById("cancelOrderForm");
const cancelTargetOrderId = document.getElementById("cancelTargetOrderId");
const cancelOtherBox = document.getElementById("cancelOtherBox");
const cancelOtherText = document.getElementById("cancelOtherText");
const cancelErrorMsg = document.getElementById("cancelErrorMsg");
const cancelDismissBtn = document.getElementById("cancelDismissBtn");
const confirmCancelBtn = document.getElementById("confirmCancelBtn");

let activeCancelOrderId = null;
let activeCancelOrderNum = "";

// Step 8: Invoice / Receipt DOM Elements
const invoiceModal = document.getElementById("invoiceModal");
const closeInvoiceModalBtn = document.getElementById("closeInvoiceModal");
const printInvoiceBtn = document.getElementById("printInvoiceBtn");
const invNumber = document.getElementById("invNumber");
const invDate = document.getElementById("invDate");
const invOrderId = document.getElementById("invOrderId");
const invCustName = document.getElementById("invCustName");
const invCustPhone = document.getElementById("invCustPhone");
const invCustAddress = document.getElementById("invCustAddress");
const invPayMethod = document.getElementById("invPayMethod");
const invPayStatus = document.getElementById("invPayStatus");
const invOrderStatus = document.getElementById("invOrderStatus");
const invItemsBody = document.getElementById("invItemsBody");
const invSubtotal = document.getElementById("invSubtotal");
const invGrandTotal = document.getElementById("invGrandTotal");

// Step 9: Wishlist DOM Elements
const wishlistButton = document.getElementById("wishlistButton");
const wishlistCount = document.getElementById("wishlistCount");
const mobileWishlistBtn = document.getElementById("mobileWishlistBtn");
const mobileWishlistCount = document.getElementById("mobileWishlistCount");
const wishlistModal = document.getElementById("wishlistModal");
const closeWishlistModalBtn = document.getElementById("closeWishlistModal");
const wishlistItemsList = document.getElementById("wishlistItemsList");
const emptyWishlist = document.getElementById("emptyWishlist");
const moveAllWishlistBtn = document.getElementById("moveAllWishlistBtn");

// Step 9: Coupon DOM Elements
const couponInput = document.getElementById("couponInput");
const applyCouponBtn = document.getElementById("applyCouponBtn");
const couponStatusBox = document.getElementById("couponStatusBox");
const checkoutDiscountRow = document.getElementById("checkoutDiscountRow");
const appliedCouponTag = document.getElementById("appliedCouponTag");
const checkoutDiscountAmount = document.getElementById("checkoutDiscountAmount");
const successDiscountRow = document.getElementById("successDiscountRow");
const successDiscountTag = document.getElementById("successDiscountTag");
const invDiscountRow = document.getElementById("invDiscountRow");
const invCouponCode = document.getElementById("invCouponCode");
const invDiscountVal = document.getElementById("invDiscountVal");

// Step 10: Admin Dashboard DOM Elements
const adminPortalBtn = document.getElementById("adminPortalBtn");
const mobileAdminBtn = document.getElementById("mobileAdminBtn");
const footerAdmin = document.getElementById("footerAdmin");
const adminModal = document.getElementById("adminModal");
const closeAdminModalBtn = document.getElementById("closeAdminModalBtn");
const refreshAdminBtn = document.getElementById("refreshAdminBtn");

const kpiRevenue = document.getElementById("kpiRevenue");
const kpiOrders = document.getElementById("kpiOrders");
const kpiActiveOrders = document.getElementById("kpiActiveOrders");
const kpiUsers = document.getElementById("kpiUsers");
const kpiProducts = document.getElementById("kpiProducts");

const adminOrderSearch = document.getElementById("adminOrderSearch");
const adminFilterPills = document.getElementById("adminFilterPills");
const adminOrdersTableBody = document.getElementById("adminOrdersTableBody");
const adminEmptyOrders = document.getElementById("adminEmptyOrders");

let allAdminOrders = [];
let selectedAdminStatusFilter = "all";
let adminSearchQuery = "";

let loadedUserOrders = [];
let modalSelectedQty = 1;

const footerLogin = document.getElementById("footerLogin");
const footerRegister = document.getElementById("footerRegister");
const footerOrders = document.getElementById("footerOrders");
const footerCart = document.getElementById("footerCart");

// ==========================================
// CARTOVIA APP LAUNCH SPLASH SCREEN (MYNTRA / AMAZON STYLE)
// ==========================================

function initCartoviaSplash() {
    const splash = document.getElementById("cartoviaSplash");
    if (!splash) return;

    // Check navigation type (reload vs navigating back from another page)
    let isReload = false;
    try {
        if (window.performance && window.performance.getEntriesByType) {
            const nav = window.performance.getEntriesByType("navigation");
            if (nav && nav.length > 0) isReload = (nav[0].type === "reload");
        }
        if (!isReload && window.performance && window.performance.navigation) {
            isReload = (window.performance.navigation.type === 1);
        }
    } catch (e) {}

    const hasLaunched = sessionStorage.getItem("cartovia_launched");

    // If already launched in this session and NOT a refresh (e.g. going back to home), skip animation!
    if (document.documentElement.classList.contains("cartovia-hide-splash") || (hasLaunched && !isReload)) {
        splash.style.display = "none";
        document.body.classList.remove("cartovia-splash-active");
        document.documentElement.classList.add("cartovia-hide-splash");
        document.documentElement.classList.remove("cartovia-show-splash");
        return;
    }

    // Mark launched for this browser session
    sessionStorage.setItem("cartovia_launched", "true");
    document.body.classList.add("cartovia-splash-active");
    document.documentElement.classList.add("cartovia-show-splash");
    document.documentElement.classList.remove("cartovia-hide-splash");

    let isDismissed = false;

    function dismissSplash() {
        if (isDismissed) return;
        isDismissed = true;

        splash.classList.add("cartovia-splash-exit");
        setTimeout(() => {
            splash.style.display = "none";
            document.body.classList.remove("cartovia-splash-active");
            document.documentElement.classList.remove("cartovia-show-splash");
            document.documentElement.classList.add("cartovia-hide-splash");
            window.dispatchEvent(new CustomEvent("cartoviaSplashFinished"));
        }, 550);
    }

    // Auto-dismiss after ~2.4 seconds (2 to 3 second duration)
    const splashTimer = setTimeout(dismissSplash, 2400);

    // Skip button
    const skipBtn = document.getElementById("cartoviaSplashSkip");
    if (skipBtn) {
        skipBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            clearTimeout(splashTimer);
            dismissSplash();
        });
    }

    // Tap/click to skip
    splash.addEventListener("click", () => {
        clearTimeout(splashTimer);
        dismissSplash();
    });

    // Keyboard skip (Escape or Space)
    const handleSplashKey = (e) => {
        if (e.key === "Escape" || e.code === "Space") {
            clearTimeout(splashTimer);
            dismissSplash();
            document.removeEventListener("keydown", handleSplashKey);
        }
    };
    document.addEventListener("keydown", handleSplashKey);

    // Safety fallback
    setTimeout(() => {
        if (!isDismissed) dismissSplash();
    }, 4200);
}

// ==========================================
// START APPLICATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initCartoviaSplash();
    loadProducts();
    updateCartCount();
    loadWishlist();
    loadSavedTheme();
    updateAuthUI();
    setupEventListeners();
});

// ==========================================
// ==========================================
// LOAD PRODUCTS FROM API (WITH RESILIENT FALLBACK)
// ==========================================

const FALLBACK_PRODUCTS = (typeof window !== "undefined" && Array.isArray(window.ALL_CATALOG_PRODUCTS) && window.ALL_CATALOG_PRODUCTS.length > 0)
    ? window.ALL_CATALOG_PRODUCTS
    : [];

let currentDisplayLimit = 36;
const HOME_FEED_LIMIT = 36;
const SEARCH_FEED_LIMIT = 150;

const productsHeading = document.getElementById("productsHeading");
const catalogCountText = document.getElementById("catalogCountText");
const loadMoreWrapper = document.getElementById("loadMoreWrapper");
const loadMoreBtn = document.getElementById("loadMoreBtn");

async function loadProducts() {
    showLoading();
    if (errorMessage) {
        errorMessage.style.display = "none";
    }

    try {
        const response = await fetch(`${API_BASE}/api/products`);

        if (response.ok) {
            const data = await response.json();

            if (data.success && Array.isArray(data.products) && data.products.length > 0) {
                allProducts = data.products;
                hideLoading();
                if (errorMessage) errorMessage.style.display = "none";
                searchProducts();
                return;
            }
        }
        throw new Error("API returned non-success or empty product list");
    } catch (error) {
        console.warn("Product loading from API failed, using resilient catalog fallback:", error);
        allProducts = (window.ALL_CATALOG_PRODUCTS && window.ALL_CATALOG_PRODUCTS.length > 0)
            ? [...window.ALL_CATALOG_PRODUCTS]
            : [...FALLBACK_PRODUCTS];
        hideLoading();
        if (errorMessage) errorMessage.style.display = "none";
        searchProducts();
    }
}

// ==========================================
// CURATED DIVERSE FEED GENERATOR (HOME VIEW)
// ==========================================
// Distributes items evenly round-robin across all categories:
// e.g. [Clothing, Shoes, Watches, Electronics, Bags, Accessories, Kids & Toys, Books, Home, ...]
function getCuratedDiverseFeed(itemsList) {
    const catMap = {};
    itemsList.forEach(item => {
        const cat = item.category || "Other";
        if (!catMap[cat]) catMap[cat] = [];
        catMap[cat].push(item);
    });

    const categoryKeys = Object.keys(catMap);
    const curatedList = [];
    const maxItemsInAnyCat = Math.max(...categoryKeys.map(k => catMap[k].length), 0);

    for (let round = 0; round < maxItemsInAnyCat; round++) {
        for (const cat of categoryKeys) {
            if (catMap[cat][round]) {
                curatedList.push(catMap[cat][round]);
            }
        }
    }

    return curatedList;
}

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

const KNOWN_CATEGORIES = [
    "Clothing", "Shoes", "Watches", "Electronics", 
    "Bags", "Accessories", "Kids & Toys", "Books", "Home"
];

function resolveSemanticCategory(input) {
    if (!input) return null;
    const clean = input.trim().toLowerCase();
    if (clean === "all") return null;

    const direct = KNOWN_CATEGORIES.find(c => c.toLowerCase() === clean);
    if (direct) return direct;

    for (const rule of CATEGORY_KEYWORD_RULES) {
        for (const kw of rule.keywords) {
            if (clean === kw || clean.startsWith(kw + " ") || clean.endsWith(" " + kw) || clean.includes(" " + kw + " ") || clean.includes(kw)) {
                return rule.category;
            }
        }
    }
    return null;
}

// ==========================================
// TOP-DOWN RELEVANCE SCORING ALGORITHM
// ==========================================
function getSearchRelevanceScore(product, query) {
    if (!query) return 1;
    const q = query.toLowerCase().trim();
    const name = (product.name || "").toLowerCase();
    const cat = (product.category || "").toLowerCase();
    const desc = (product.description || "").toLowerCase();

    let score = 0;

    // 0. Semantic Keyword Matching (e.g. kurti/shirt -> Clothing, girl watch -> Watches, purse -> Bags)
    const semanticCat = resolveSemanticCategory(q);
    if (semanticCat && cat === semanticCat.toLowerCase()) {
        score += 700;
    }

    // 1. Product name starts directly with search query
    if (name.startsWith(q)) {
        score += 1000 + (100 - Math.min(name.length, 90));
    }

    // 2. Individual word in product name starts with query
    const nameWords = name.split(/[\s\-–,]+/);
    if (nameWords.some(w => w.startsWith(q))) {
        score += 800;
    }

    // 3. Category starts directly with query
    if (cat.startsWith(q)) {
        score += 750;
    }

    // 4. Product name contains query anywhere
    if (name.includes(q)) {
        score += 500;
    }

    // 5. Category contains query anywhere
    if (cat.includes(q)) {
        score += 400;
    }

    // 6. Word in description starts with query
    const descWords = desc.split(/[\s\-–,]+/);
    if (descWords.some(w => w.startsWith(q))) {
        score += 200;
    }

    // 7. Description contains query
    if (desc.includes(q)) {
        score += 100;
    }

    return score;
}

// ==========================================
// RENDER PRODUCT CARDS
// ==========================================

function renderProducts(products) {
    productsGrid.innerHTML = "";

    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fa-solid fa-box-open"></i>
                <h3>No products found</h3>
                <p>Try searching for clothes, shoes, watches, electronics, bags, books or toys.</p>
            </div>
        `;
        return;
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const inWishlist = isInWishlist(product._id);

        card.innerHTML = `
            <div class="product-image-container">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80'"
                >
                <span class="product-category">
                    ${product.category}
                </span>
                <button
                    class="wishlist-btn ${inWishlist ? 'active' : ''}"
                    onclick="toggleWishlist('${product._id}', event)"
                    title="${inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                    aria-label="Wishlist"
                >
                    <i class="${inWishlist ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 title="${product.name}">
                    ${product.name}
                </h3>
                <p class="product-description">
                    ${product.description}
                </p>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    <span>
                        ${product.rating || 4.5}
                    </span>
                    <span class="rating-number">
                        / 5
                    </span>
                </div>
                <div class="product-bottom">
                    <span class="product-price">
                        ₹${Number(product.price).toLocaleString("en-IN")}
                    </span>
                    <button
                        class="add-cart-btn"
                        onclick="addToCart('${product._id}')"
                    >
                        <i class="fa-solid fa-cart-plus"></i>
                        Add
                    </button>
                </div>
                <button
                    class="view-details-btn"
                    onclick="showProductDetails('${product._id}')"
                >
                    View Details
                </button>
            </div>
        `;

        productsGrid.appendChild(card);
    });
}

// ==========================================
// SEARCH PRODUCTS (WITH TOP-DOWN RELEVANCE)
// ==========================================

function searchProducts(event) {
    const targetInput = (event && event.target) ? event.target : searchInput;
    const rawVal = targetInput ? targetInput.value : "";
    const searchText = rawVal.trim().toLowerCase();

    // Sync desktop and mobile search inputs
    if (searchInput && searchInput !== targetInput) searchInput.value = rawVal;
    if (mobileSearchInput && mobileSearchInput !== targetInput) mobileSearchInput.value = rawVal;

    // CASE 1: USER IS SEARCHING WITH TEXT
    if (searchText.length > 0) {
        // Compute relevance scores and filter
        const scoredProducts = [];
        allProducts.forEach(product => {
            // If a category filter is active (other than "all"), enforce category matching
            if (selectedCategory !== "all" && product.category !== selectedCategory) {
                return;
            }

            const score = getSearchRelevanceScore(product, searchText);
            if (score > 0) {
                scoredProducts.push({ product, score });
            }
        });

        // Sort by relevance score descending:
        // Products whose names start with the search term or whose category starts with it appear at the top!
        scoredProducts.sort((a, b) => b.score - a.score);
        const matchedProducts = scoredProducts.map(item => item.product);

        // Allow up to 100+ matching cards on search
        filteredProducts = matchedProducts.slice(0, SEARCH_FEED_LIMIT);

        // Update Section Header and Count Badge
        if (productsHeading) {
            productsHeading.textContent = `Search Results for "${rawVal.trim()}"`;
        }
        if (catalogCountText) {
            catalogCountText.textContent = `Found ${matchedProducts.length} matching products (ranked by relevance)`;
        }

        if (loadMoreWrapper) {
            loadMoreWrapper.style.display = (matchedProducts.length > filteredProducts.length) ? "flex" : "none";
        }

        renderProducts(filteredProducts);
        return;
    }

    // CASE 2: DEFAULT HOME FEED (CATEGORY === "ALL", NO SEARCH)
    // Curate an interleaved, balanced selection of 32-36 cards across all categories
    if (selectedCategory === "all") {
        const curatedCatalog = getCuratedDiverseFeed(allProducts);
        filteredProducts = curatedCatalog.slice(0, currentDisplayLimit);

        if (productsHeading) {
            productsHeading.textContent = "Popular Products";
        }
        if (catalogCountText) {
            catalogCountText.textContent = `Showing ${filteredProducts.length} curated products across 9 categories`;
        }

        if (loadMoreWrapper) {
            loadMoreWrapper.style.display = (curatedCatalog.length > currentDisplayLimit) ? "flex" : "none";
        }

        renderProducts(filteredProducts);
        return;
    }

    // CASE 3: SPECIFIC CATEGORY FILTERED (e.g. Shoes, Clothing, Watches, etc.) ON FRONT PAGE
    // Shows 30 to 35 products in 4-5 columns as requested by user
    const categoryMatched = allProducts.filter(p => p.category === selectedCategory);
    filteredProducts = categoryMatched.slice(0, currentDisplayLimit);

    if (productsHeading) {
        productsHeading.textContent = `${selectedCategory} Collection`;
    }
    if (catalogCountText) {
        catalogCountText.textContent = `Showing ${filteredProducts.length} products in ${selectedCategory}`;
    }

    if (loadMoreWrapper) {
        loadMoreWrapper.style.display = (categoryMatched.length > filteredProducts.length) ? "flex" : "none";
    }

    renderProducts(filteredProducts);
}

// ==========================================
// CATEGORY FILTER & SYNC (FRONT PAGE)
// ==========================================

function filterByCategory(category) {
    selectedCategory = category;

    // Show 30 to 35 products (32 items) for selected category on front page, or 36 for "all"
    currentDisplayLimit = (category === "all") ? HOME_FEED_LIMIT : 32;

    // Sync active category buttons (grid pills)
    const categoryButtonsList = document.querySelectorAll(".category-btn");
    categoryButtonsList.forEach(button => {
        button.classList.toggle("active", button.dataset.category === category);
    });

    // Sync active Meesho-style top cards strip
    const topStripPills = document.querySelectorAll(".category-pill-card");
    topStripPills.forEach(card => {
        card.classList.toggle("active", card.dataset.category === category);
    });

    searchProducts();
}

// ==========================================
// SEARCH REDIRECT TO DEDICATED SEARCH PAGE
// ==========================================

function handleSearchSubmit(query) {
    const trimmed = (query || "").trim();
    if (!trimmed) return;
    // Redirect to separate dedicated search page showing 100 products in 2-column layout
    window.location.href = `search.html?q=${encodeURIComponent(trimmed)}`;
}

// Update Clear buttons visibility
function updateSearchClearButtons() {
    const sVal = searchInput ? searchInput.value.trim() : "";
    const mVal = mobileSearchInput ? mobileSearchInput.value.trim() : "";

    if (searchClearBtn) {
        searchClearBtn.style.display = sVal ? "inline-flex" : "none";
    }
    if (mobileSearchClearBtn) {
        mobileSearchClearBtn.style.display = mVal ? "inline-flex" : "none";
    }
}

// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addToCart(productId, qty = 1, showNotification = true) {
    const product = allProducts.find(
        item => item._id === productId
    );

    if (!product) {
        showToast("Product not found");
        return;
    }

    const quantityToAdd = Number(qty) > 0 ? Number(qty) : 1;
    const existingProduct = cart.find(
        item => item._id === productId
    );

    if (existingProduct) {
        existingProduct.quantity += quantityToAdd;
    } else {
        cart.push({
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantityToAdd
        });
    }

    saveCart();
    updateCartCount();
    if (showNotification) {
        showToast(`${quantityToAdd > 1 ? quantityToAdd + ' × ' : ''}${product.name} added to cart`);
    }
}

// ==========================================
// SAVE CART
// ==========================================

function saveCart() {
    localStorage.setItem("cartoviaCart", JSON.stringify(cart));
    localStorage.setItem("shopEaseCart", JSON.stringify(cart));
}

// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {
    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    if (cartCount) cartCount.textContent = totalQuantity;
    if (mobileCartCount) mobileCartCount.textContent = totalQuantity;
    const bottomCartCount = document.getElementById("bottomCartCount");
    if (bottomCartCount) bottomCartCount.textContent = totalQuantity;
}

// ==========================================
// OPEN CART
// ==========================================

function openCart() {
    renderCart();
    cartModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// ==========================================
// CLOSE CART
// ==========================================

function closeCart() {
    cartModal.classList.remove("active");
    document.body.style.overflow = "";
}

// ==========================================
// RENDER CART
// ==========================================

function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        emptyCart.style.display = "block";
        cartItems.style.display = "none";
        cartTotal.textContent = "₹0";
        checkoutButton.disabled = true;
        checkoutButton.style.opacity = "0.5";
        checkoutButton.style.cursor = "not-allowed";
        return;
    }

    emptyCart.style.display = "none";
    cartItems.style.display = "block";
    checkoutButton.disabled = false;
    checkoutButton.style.opacity = "1";
    checkoutButton.style.cursor = "pointer";

    let total = 0;

    cart.forEach(item => {
        const itemTotal =
            Number(item.price) * item.quantity;

        total += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                >
            </div>
            <div class="cart-item-info">
                <h4>
                    ${item.name}
                </h4>
                <p>
                    ₹${Number(item.price).toLocaleString("en-IN")}
                </p>
                <div class="cart-quantity">
                    <button
                        onclick="changeQuantity('${item._id}', -1)"
                        aria-label="Decrease quantity"
                    >
                        -
                    </button>
                    <span>
                        ${item.quantity}
                    </span>
                    <button
                        onclick="changeQuantity('${item._id}', 1)"
                        aria-label="Increase quantity"
                    >
                        +
                    </button>
                </div>
            </div>
            <div class="cart-item-right">
                <div class="cart-item-price">
                    ₹${itemTotal.toLocaleString("en-IN")}
                </div>
                <button
                    class="remove-cart-btn"
                    onclick="removeFromCart('${item._id}')"
                    aria-label="Remove product"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent =
        `₹${total.toLocaleString("en-IN")}`;
}

// ==========================================
// CHANGE CART QUANTITY
// ==========================================

function changeQuantity(productId, change) {
    const item = cart.find(
        product => product._id === productId
    );

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(
            product => product._id !== productId
        );
    }

    saveCart();
    updateCartCount();
    renderCart();
}

// ==========================================
// REMOVE PRODUCT FROM CART
// ==========================================

function removeFromCart(productId) {
    const removedItem = cart.find(
        item => item._id === productId
    );

    cart = cart.filter(
        item => item._id !== productId
    );

    saveCart();
    updateCartCount();
    renderCart();

    if (removedItem) {
        showToast(
            `${removedItem.name} removed from cart`
        );
    }
}

// ==========================================
// SHOW PRODUCT DETAILS
// ==========================================

function changeModalQty(delta) {
    modalSelectedQty = Math.max(1, Math.min(10, modalSelectedQty + delta));
    const qtySpan = document.getElementById("modalQtyDisplay");
    if (qtySpan) qtySpan.textContent = modalSelectedQty;
}

function buyNowProduct(productId) {
    addToCart(productId, modalSelectedQty);
    closeProductDetails();
    handleCheckout();
}

function showProductDetails(productId) {
    const product = allProducts.find(
        item => item._id === productId
    );

    if (!product) {
        showToast("Product not found");
        return;
    }

    modalSelectedQty = 1;
    const reviewsCount = Math.floor(45 + (product.price % 60) * 3);

    productDetails.innerHTML = `
        <div class="product-details-content">
            <div class="product-details-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                >
            </div>
            <div class="product-details-info">
                <div class="modal-badge-row">
                    <span class="product-category">
                        ${product.category}
                    </span>
                    <span class="stock-badge">
                        <i class="fa-solid fa-circle-check"></i> In Stock & Ready to Ship
                    </span>
                </div>

                <h2>
                    ${product.name}
                </h2>

                <div class="product-rating-box">
                    <div class="rating-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span class="rating-score">${product.rating} / 5</span>
                    <span class="rating-count">(${reviewsCount} verified reviews)</span>
                </div>

                <div class="details-price-row">
                    <div class="details-price">
                        ₹${Number(product.price).toLocaleString("en-IN")}
                    </div>
                    <span class="price-tax-note">Inclusive of all demo taxes</span>
                </div>

                <p class="product-desc">
                    ${product.description}
                </p>

                <!-- Micro Specifications -->
                <div class="product-specs-grid">
                    <div class="spec-pill">
                        <i class="fa-solid fa-tag"></i>
                        <span>Category: <strong>${product.category}</strong></span>
                    </div>
                    <div class="spec-pill">
                        <i class="fa-solid fa-truck-fast"></i>
                        <span>Dispatch: <strong>24 Hours</strong></span>
                    </div>
                </div>

                <!-- Trust Guarantees -->
                <div class="product-trust-strip">
                    <div class="trust-item">
                        <i class="fa-solid fa-shield-halved"></i>
                        <span>100% Genuine Quality</span>
                    </div>
                    <div class="trust-item">
                        <i class="fa-solid fa-truck"></i>
                        <span>Free Express Delivery</span>
                    </div>
                    <div class="trust-item">
                        <i class="fa-solid fa-rotate-left"></i>
                        <span>7 Days Easy Return</span>
                    </div>
                    <div class="trust-item">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                        <span>Cash on Delivery Demo</span>
                    </div>
                </div>

                <!-- Action Controls -->
                <div class="modal-actions-area">
                    <div class="modal-qty-row">
                        <label>Quantity:</label>
                        <div class="modal-qty-control">
                            <button type="button" class="modal-qty-btn" onclick="changeModalQty(-1)" aria-label="Decrease quantity">-</button>
                            <span class="modal-qty-val" id="modalQtyDisplay">1</span>
                            <button type="button" class="modal-qty-btn" onclick="changeModalQty(1)" aria-label="Increase quantity">+</button>
                        </div>
                    </div>

                    <div class="modal-cta-buttons">
                        <button
                            class="add-cart-btn"
                            type="button"
                            onclick="addToCart('${product._id}', modalSelectedQty); closeProductDetails();"
                        >
                            <i class="fa-solid fa-cart-plus"></i>
                            Add to Cart
                        </button>
                        <button
                            class="buy-now-btn"
                            type="button"
                            onclick="buyNowProduct('${product._id}')"
                        >
                            <i class="fa-solid fa-bolt"></i>
                            Buy Now
                        </button>
                        <button
                            class="wishlist-modal-toggle-btn ${isInWishlist(product._id) ? 'active' : ''}"
                            type="button"
                            onclick="toggleWishlist('${product._id}', event, true)"
                            title="${isInWishlist(product._id) ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                        >
                            <i class="${isInWishlist(product._id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                            <span>${isInWishlist(product._id) ? 'Wishlisted' : 'Wishlist'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// ==========================================
// CLOSE PRODUCT DETAILS
// ==========================================

function closeProductDetails() {
    productModal.classList.remove("active");
    document.body.style.overflow = "";
}

// ==========================================
// THEME TOGGLE
// ==========================================
// THEME SWITCHING (DARK / LIGHT MODE)
// ==========================================

let lastThemeToggleTime = 0;

function toggleTheme() {
    const now = Date.now();
    if (now - lastThemeToggleTime < 350) return; // Prevent double-trigger from inline onclick + event listener
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

    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains("dark-mode") || document.body.classList.contains("dark-theme");
    if (themeToggle) {
        const icon = themeToggle.querySelector("i");
        if (icon) {
            icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
        themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
    }

    if (mobileThemeToggle) {
        const mIcon = mobileThemeToggle.querySelector("i");
        if (mIcon) {
            mIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
        mobileThemeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
    }
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem("shopEaseTheme") || localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("dark-theme");
    }
    updateThemeIcon();
}

// ==========================================
// MOBILE MENU
// ==========================================

function toggleMobileMenu() {
    if (!mobileNav) return;
    mobileNav.classList.toggle("active");

    if (mobileMenuBtn) {
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) {
            icon.className = mobileNav.classList.contains("active")
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars";
        }
    }
}

// ==========================================
// CLOSE MOBILE MENU
// ==========================================

function closeMobileMenu() {
    mobileNav.classList.remove("active");

    const icon =
        mobileMenuBtn.querySelector("i");

    icon.className =
        "fa-solid fa-bars";
}

// ==========================================
// TOAST MESSAGE
// ==========================================

let toastTimer;

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ==========================================
// LOADING STATE
// ==========================================

function showLoading() {
    loadingMessage.style.display = "flex";
    errorMessage.style.display = "none";
    productsGrid.innerHTML = "";
}

// ==========================================
// HIDE LOADING
// ==========================================

function hideLoading() {
    loadingMessage.style.display = "none";
}

// ==========================================
// SHOW ERROR
// ==========================================

function showError() {
    errorMessage.style.display = "block";
}

// ==========================================
// NEWSLETTER
// ==========================================

function handleNewsletter(event) {
    event.preventDefault();

    const email =
        document.getElementById("newsletterEmail").value;

    if (!email) {
        showToast("Please enter your email");
        return;
    }

    showToast("Thank you for subscribing!");
    newsletterForm.reset();
}

// ==========================================
// STEP 6: AUTHENTICATION FUNCTIONS
// ==========================================

// 1. Update Navbar UI based on Login State
function updateAuthUI() {
    if (currentUser && currentUser.name) {
        // Logged in: show user's first name
        const firstName = currentUser.name.split(" ")[0];
        authBtnText.textContent = firstName;
        authButton.classList.add("logged-in");
        authButton.title = `Logged in as ${currentUser.name} (Click for profile / logout)`;
        if (mobileAuthBtnText) {
            mobileAuthBtnText.textContent = `Hi, ${firstName} (Account / Logout)`;
        }
        if (mobileAuthBtn) {
            mobileAuthBtn.classList.add("logged-in");
        }
    } else {
        // Logged out
        authBtnText.textContent = "Login";
        authButton.classList.remove("logged-in");
        authButton.title = "Login or Register";
        if (mobileAuthBtnText) {
            mobileAuthBtnText.textContent = "Login / Register";
        }
        if (mobileAuthBtn) {
            mobileAuthBtn.classList.remove("logged-in");
        }
    }
}

// 2. Open Auth Modal
function openAuthModal(mode = "login") {
    clearAuthErrors();

    if (currentUser) {
        // Already logged in: show profile card with logout button
        authTabsHeader.style.display = "none";
        loginForm.classList.remove("active");
        registerForm.classList.remove("active");
        authProfileView.style.display = "block";

        profileName.textContent = currentUser.name;
        profileEmail.textContent = currentUser.email;
    } else {
        // Not logged in: show Login or Register tab
        authTabsHeader.style.display = "flex";
        authProfileView.style.display = "none";
        switchAuthTab(mode);
    }

    authModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// 3. Close Auth Modal
function closeAuthModal() {
    authModal.classList.remove("active");
    document.body.style.overflow = "";
    clearAuthErrors();
}

// 4. Switch between Login and Register tabs
function switchAuthTab(mode) {
    clearAuthErrors();
    if (mode === "login") {
        tabLogin.classList.add("active");
        tabRegister.classList.remove("active");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
    } else {
        tabRegister.classList.add("active");
        tabLogin.classList.remove("active");
        registerForm.classList.add("active");
        loginForm.classList.remove("active");
    }
}

function clearAuthErrors() {
    loginError.textContent = "";
    loginError.classList.remove("show");
    registerError.textContent = "";
    registerError.classList.remove("show");
}

// 5. Handle Login Submit
async function handleLogin(event) {
    event.preventDefault();
    clearAuthErrors();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const submitBtn = document.getElementById("loginSubmitBtn");

    if (!email || !password) {
        loginError.textContent = "Please enter both email and password";
        loginError.classList.add("show");
        return;
    }

    try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';

        const response = await fetch(`${API_BASE}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!data.success) {
            loginError.textContent = data.message || "Invalid credentials";
            loginError.classList.add("show");
            return;
        }

        // Save User & Token to localStorage
        currentUser = data.user;
        authToken = data.token;
        localStorage.setItem("cartoviaUser", JSON.stringify(currentUser));
        localStorage.setItem("cartoviaToken", authToken);
        localStorage.setItem("shopEaseUser", JSON.stringify(currentUser));
        localStorage.setItem("shopEaseToken", authToken);

        loginForm.reset();
        updateAuthUI();
        loadWishlist();
        closeAuthModal();
        showToast(`Welcome back, ${currentUser.name}!`);
    } catch (error) {
        console.error("Login fetch error:", error);
        loginError.textContent = "Unable to connect to server. Please try again.";
        loginError.classList.add("show");
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Login</span> <i class="fa-solid fa-arrow-right"></i>';
    }
}

// 6. Handle Register Submit
async function handleRegister(event) {
    event.preventDefault();
    clearAuthErrors();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const submitBtn = document.getElementById("registerSubmitBtn");

    if (!name || !email || !password) {
        registerError.textContent = "Please fill in all fields";
        registerError.classList.add("show");
        return;
    }

    if (password.length < 6) {
        registerError.textContent = "Password must be at least 6 characters";
        registerError.classList.add("show");
        return;
    }

    try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

        const response = await fetch(`${API_BASE}/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (!data.success) {
            registerError.textContent = data.message || "Registration failed";
            registerError.classList.add("show");
            return;
        }

        // Save User & Token to localStorage
        currentUser = data.user;
        authToken = data.token;
        localStorage.setItem("cartoviaUser", JSON.stringify(currentUser));
        localStorage.setItem("cartoviaToken", authToken);
        localStorage.setItem("shopEaseUser", JSON.stringify(currentUser));
        localStorage.setItem("shopEaseToken", authToken);

        registerForm.reset();
        updateAuthUI();
        loadWishlist();
        closeAuthModal();
        showToast(`Welcome to CARTOVIA, ${currentUser.name}!`);
    } catch (error) {
        console.error("Register fetch error:", error);
        registerError.textContent = "Unable to connect to server. Please try again.";
        registerError.classList.add("show");
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Create Account</span> <i class="fa-solid fa-arrow-right"></i>';
    }
}

// 7. Handle Logout
function handleLogout() {
    currentUser = null;
    authToken = null;
    localStorage.removeItem("cartoviaUser");
    localStorage.removeItem("cartoviaToken");
    localStorage.removeItem("shopEaseUser");
    localStorage.removeItem("shopEaseToken");

    updateAuthUI();
    closeAuthModal();
    showToast("Logged out successfully");
}

// ==========================================
// STEP 7: CHECKOUT & ORDER PROCESSING
// ==========================================

function handleCheckout() {
    openCheckoutModal();
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast("Your cart is empty");
        return;
    }

    if (!currentUser) {
        closeCart();
        showToast("Please login first to proceed to checkout!");
        openAuthModal("login");
        return;
    }

    closeCart();

    // Pre-fill user's name if input is empty
    if (shipName && (!shipName.value || shipName.value.trim() === "")) {
        shipName.value = currentUser.name || "";
    }

    // Clear previous errors
    if (checkoutError) {
        checkoutError.textContent = "";
        checkoutError.classList.remove("show");
    }

    renderCheckoutSummary();

    if (checkoutModal) {
        checkoutModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeCheckoutModal() {
    if (checkoutModal) {
        checkoutModal.classList.remove("active");
    }
    document.body.style.overflow = "";
}

function renderCheckoutSummary() {
    if (!checkoutItemsList) return;

    checkoutItemsList.innerHTML = cart.map(item => {
        const title = item.name || item.title || "Product";
        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 1;
        const lineTotal = price * qty;

        return `
            <div class="checkout-item-row">
                <img src="${item.image}" alt="${title}" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80'">
                <div class="checkout-item-details">
                    <h5>${title}</h5>
                    <span>Qty: ${qty} × ₹${price.toLocaleString("en-IN")}</span>
                </div>
                <div class="checkout-item-price">
                    ₹${lineTotal.toLocaleString("en-IN")}
                </div>
            </div>
        `;
    }).join("");

    const subtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 1)), 0);
    if (checkoutSubtotal) {
        checkoutSubtotal.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
    }

    // Step 9: Promo Coupon Discount Calculation
    let discount = 0;
    if (activeCoupon) {
        discount = calculateCouponDiscount(subtotal);
        activeCoupon.discount = discount;

        if (checkoutDiscountRow) {
            checkoutDiscountRow.style.display = "flex";
        }
        if (appliedCouponTag) {
            appliedCouponTag.textContent = activeCoupon.code;
        }
        if (checkoutDiscountAmount) {
            checkoutDiscountAmount.textContent = `-₹${discount.toLocaleString("en-IN")}`;
        }
    } else {
        if (checkoutDiscountRow) {
            checkoutDiscountRow.style.display = "none";
        }
    }

    const grandTotal = Math.max(0, subtotal - discount);
    if (checkoutGrandTotal) {
        checkoutGrandTotal.textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
    }
}

async function handlePlaceOrder(event) {
    event.preventDefault();

    if (checkoutError) {
        checkoutError.textContent = "";
        checkoutError.classList.remove("show");
    }

    if (!currentUser || !authToken) {
        closeCheckoutModal();
        showToast("Session expired. Please log in again.");
        openAuthModal("login");
        return;
    }

    if (cart.length === 0) {
        showToast("Your cart is empty");
        closeCheckoutModal();
        return;
    }

    const name = shipName ? shipName.value.trim() : "";
    const phone = shipPhone ? shipPhone.value.trim() : "";
    const street = shipStreet ? shipStreet.value.trim() : "";
    const city = shipCity ? shipCity.value.trim() : "";
    const postalCode = shipPin ? shipPin.value.trim() : "";

    if (!name || !phone || !street || !city || !postalCode) {
        if (checkoutError) {
            checkoutError.textContent = "Please fill in all shipping address fields.";
            checkoutError.classList.add("show");
        }
        return;
    }

    const selectedPayRadio = document.querySelector('input[name="payMethod"]:checked');
    const paymentMethod = selectedPayRadio ? selectedPayRadio.value : "Cash on Delivery";

    try {
        if (placeOrderBtn) {
            placeOrderBtn.disabled = true;
            placeOrderBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Placing Order...';
        }

        const itemsPrice = cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 1)), 0);
        const shippingPrice = 0;
        const discountAmount = activeCoupon ? calculateCouponDiscount(itemsPrice) : 0;
        const totalAmount = Math.max(0, itemsPrice + shippingPrice - discountAmount);

        const orderData = {
            orderItems: cart.map(item => ({
                product: item._id,
                name: item.name || item.title || "Product",
                quantity: Number(item.quantity) || 1,
                price: Number(item.price) || 0,
                image: item.image || ""
            })),
            shippingAddress: {
                fullName: name,
                phone: phone,
                street: street,
                city: city,
                postalCode: postalCode
            },
            paymentMethod: paymentMethod,
            itemsPrice: itemsPrice,
            shippingPrice: shippingPrice,
            couponCode: activeCoupon ? activeCoupon.code : null,
            discountAmount: discountAmount,
            totalAmount: totalAmount
        };

        const response = await fetch(`${API_BASE}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();

        if (!data.success) {
            if (checkoutError) {
                checkoutError.textContent = data.message || "Failed to place order. Please try again.";
                checkoutError.classList.add("show");
            }
            return;
        }

        // 1. Clear cart
        cart = [];
        saveCart();
        updateCartCount();
        renderCart();

        // 2. Reset checkout form
        if (checkoutForm) {
            checkoutForm.reset();
        }

        // 3. Close checkout modal
        closeCheckoutModal();

        // 4. Fill success modal details
        const createdOrder = data.order;
        if (successOrderId) {
            const orderNum = createdOrder.orderId ? (createdOrder.orderId.startsWith('#') ? createdOrder.orderId : '#' + createdOrder.orderId) : `#ORD-${createdOrder._id.slice(-8).toUpperCase()}`;
            successOrderId.textContent = orderNum;
        }
        if (successDeliveryDate) {
            const deliveryDate = new Date();
            deliveryDate.setDate(deliveryDate.getDate() + 4);
            successDeliveryDate.textContent = `${deliveryDate.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })} (Estimated)`;
        }
        if (successDeliverTo) {
            successDeliverTo.textContent = `${name}, ${city} (${postalCode})`;
        }
        if (successTotalPaid) {
            successTotalPaid.textContent = `₹${Number(createdOrder.totalAmount || totalAmount).toLocaleString("en-IN")}`;
        }

        // Step 9: Success discount row
        if (successDiscountRow && successDiscountTag) {
            if (createdOrder.discountAmount && createdOrder.discountAmount > 0) {
                successDiscountRow.style.display = "flex";
                successDiscountTag.textContent = `-₹${Number(createdOrder.discountAmount).toLocaleString("en-IN")} (${createdOrder.couponCode || 'PROMO'})`;
            } else {
                successDiscountRow.style.display = "none";
            }
        }

        // Reset coupon
        activeCoupon = null;
        if (couponInput) couponInput.value = "";
        if (couponStatusBox) {
            couponStatusBox.style.display = "none";
            couponStatusBox.innerHTML = "";
        }

        // 5. Open success modal
        if (orderSuccessModal) {
            orderSuccessModal.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        showToast("Order placed successfully! 🎉");
    } catch (error) {
        console.error("Place order error:", error);
        if (checkoutError) {
            checkoutError.textContent = "Network error. Unable to connect to server.";
            checkoutError.classList.add("show");
        }
    } finally {
        if (placeOrderBtn) {
            placeOrderBtn.disabled = false;
            placeOrderBtn.innerHTML = '<i class="fa-solid fa-lock"></i> <span>Place Order Now</span>';
        }
    }
}

// ==========================================
// MY ORDERS & ORDER HISTORY
// ==========================================

async function openOrdersModal() {
    if (!currentUser || !authToken) {
        showToast("Please login first to view your orders");
        openAuthModal("login");
        return;
    }

    closeSuccessModal();
    closeAuthModal();

    if (myOrdersModal) {
        myOrdersModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    if (ordersContent) {
        ordersContent.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-light);">
                <i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
                <p>Loading your orders...</p>
            </div>
        `;
    }

    try {
        const response = await fetch(`${API_BASE}/api/orders/my-orders`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        });
        const data = await response.json();

        if (data.success) {
            loadedUserOrders = data.orders || [];
            renderMyOrders(loadedUserOrders);
        } else {
            if (ordersContent) {
                ordersContent.innerHTML = `
                    <div class="empty-orders">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <h3>Unable to load orders</h3>
                        <p>${data.message || "Please try again later."}</p>
                    </div>
                `;
            }
        }
    } catch (error) {
        console.error("Fetch my orders error:", error);
        if (ordersContent) {
            ordersContent.innerHTML = `
                <div class="empty-orders">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <h3>Network Error</h3>
                    <p>Could not connect to the server to fetch your orders.</p>
                </div>
            `;
        }
    }
}

function renderMyOrders(orders) {
    if (!ordersContent) return;

    if (!orders || orders.length === 0) {
        ordersContent.innerHTML = `
            <div class="empty-orders">
                <i class="fa-solid fa-box-open"></i>
                <h3>No Orders Yet</h3>
                <p>You haven't placed any orders yet. Start exploring our collection and place your first order!</p>
            </div>
        `;
        return;
    }

    ordersContent.innerHTML = orders.map(order => {
        const orderDate = new Date(order.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        const itemsHtml = (order.orderItems || []).map(item => {
            const itemName = item.name || item.title || "Product";
            const itemQty = Number(item.quantity || item.qty) || 1;
            const itemPrice = Number(item.price) || 0;
            const itemTotal = itemPrice * itemQty;

            return `
                <div class="order-product-row">
                    <img src="${item.image}" alt="${itemName}" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80'">
                    <div class="order-product-info">
                        <h5>${itemName}</h5>
                        <p>Qty: ${itemQty} × ₹${itemPrice.toLocaleString("en-IN")}</p>
                    </div>
                    <div class="order-product-price">
                        ₹${itemTotal.toLocaleString("en-IN")}
                    </div>
                </div>
            `;
        }).join("");

        const orderNum = order.orderId ? (order.orderId.startsWith('#') ? order.orderId : '#' + order.orderId) : ('#ORD-' + order._id.slice(-8).toUpperCase());
        const isCancelled = (order.orderStatus === "Cancelled");

        const statusBadge = isCancelled 
            ? `<span class="order-status-badge status-cancelled"><i class="fa-solid fa-ban"></i> Cancelled</span>`
            : `<span class="order-status-badge status-confirmed"><i class="fa-solid fa-circle-check"></i> ${order.orderStatus || 'Confirmed'}</span>`;

        const cancelReasonNote = isCancelled && order.cancelReason
            ? `<div class="order-cancel-note"><i class="fa-solid fa-circle-info"></i> Reason: ${order.cancelReason}</div>`
            : '';

        const actionButton = isCancelled
            ? `<span class="cancelled-tag"><i class="fa-solid fa-ban"></i> Order Cancelled</span>`
            : `<button class="cancel-order-btn" type="button" onclick="openCancelOrderModal('${order._id}', '${orderNum}')"><i class="fa-solid fa-xmark"></i> Cancel Order</button>`;

        // Visual Order Tracking Progress
        let trackerHtml = "";
        if (isCancelled) {
            trackerHtml = `
                <div class="order-tracker-container">
                    <div class="tracker-header">
                        <span>Order Status</span>
                        <span style="color: #ef4444;"><i class="fa-solid fa-ban"></i> Order Cancelled</span>
                    </div>
                    <div class="tracker-steps">
                        <div class="tracker-line-bg">
                            <div class="tracker-line-fill" style="width: 100%; background: #ef4444;"></div>
                        </div>
                        <div class="tracker-step done">
                            <div class="tracker-dot"><i class="fa-solid fa-check"></i></div>
                            <span class="tracker-label">Placed</span>
                        </div>
                        <div class="tracker-step cancelled-step">
                            <div class="tracker-dot"><i class="fa-solid fa-xmark"></i></div>
                            <span class="tracker-label">Cancelled</span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            trackerHtml = `
                <div class="order-tracker-container">
                    <div class="tracker-header">
                        <span>Live Delivery Tracker</span>
                        <span style="color: var(--success);"><i class="fa-solid fa-truck-fast"></i> On Schedule (3-5 Days)</span>
                    </div>
                    <div class="tracker-steps">
                        <div class="tracker-line-bg">
                            <div class="tracker-line-fill" style="width: 32%;"></div>
                        </div>
                        <div class="tracker-step done">
                            <div class="tracker-dot"><i class="fa-solid fa-check"></i></div>
                            <span class="tracker-label">Placed</span>
                        </div>
                        <div class="tracker-step active">
                            <div class="tracker-dot"><i class="fa-solid fa-box-open"></i></div>
                            <span class="tracker-label">Confirmed</span>
                        </div>
                        <div class="tracker-step">
                            <div class="tracker-dot"><i class="fa-solid fa-boxes-packing"></i></div>
                            <span class="tracker-label">Packed</span>
                        </div>
                        <div class="tracker-step">
                            <div class="tracker-dot"><i class="fa-solid fa-truck"></i></div>
                            <span class="tracker-label">Shipping</span>
                        </div>
                        <div class="tracker-step">
                            <div class="tracker-dot"><i class="fa-solid fa-house"></i></div>
                            <span class="tracker-label">Delivered</span>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="order-card">
                <div class="order-card-header">
                    <div class="order-card-id">
                        <h4>${orderNum}</h4>
                        <span>Placed on ${orderDate}</span>
                        ${cancelReasonNote}
                    </div>
                    ${statusBadge}
                </div>

                ${trackerHtml}

                <div class="order-card-items">
                    ${itemsHtml}
                </div>
                <div class="order-card-footer">
                    <div>
                        <span>Payment: <strong>${order.paymentMethod}</strong></span>
                        <span style="margin-left: 14px;">Total: <strong>₹${Number(order.totalAmount).toLocaleString("en-IN")}</strong></span>
                    </div>
                    <div class="order-card-actions">
                        <button class="invoice-btn" type="button" onclick="openInvoiceModal('${order._id}')">
                            <i class="fa-solid fa-file-invoice"></i> Invoice
                        </button>
                        ${actionButton}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function closeOrdersModal() {
    if (myOrdersModal) {
        myOrdersModal.classList.remove("active");
    }
    document.body.style.overflow = "";
}

function closeSuccessModal() {
    if (orderSuccessModal) {
        orderSuccessModal.classList.remove("active");
    }
    document.body.style.overflow = "";
}

// ==========================================
// STEP 8: INVOICE / RECEIPT SYSTEM
// ==========================================

function openInvoiceModal(orderId) {
    const order = loadedUserOrders.find(o => o._id === orderId);
    if (!order) {
        showToast("Order details not found");
        return;
    }

    const orderNum = order.orderId ? (order.orderId.startsWith('#') ? order.orderId : '#' + order.orderId) : ('#ORD-' + order._id.slice(-8).toUpperCase());
    const orderDate = new Date(order.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    if (invNumber) invNumber.textContent = `INV-${order._id.slice(-6).toUpperCase()}`;
    if (invDate) invDate.textContent = orderDate;
    if (invOrderId) invOrderId.textContent = orderNum;

    const ship = order.shippingAddress || {};
    if (invCustName) invCustName.textContent = ship.fullName || (currentUser ? currentUser.name : "Valued Customer");
    if (invCustPhone) invCustPhone.textContent = ship.phone || "—";
    if (invCustAddress) invCustAddress.textContent = `${ship.street || ''}, ${ship.city || ''} (${ship.postalCode || ''})`;

    if (invPayMethod) invPayMethod.textContent = order.paymentMethod || "Cash on Delivery";
    if (invPayStatus) {
        invPayStatus.textContent = order.paymentStatus || (order.paymentMethod === "Cash on Delivery" ? "Pending on Delivery" : "Paid");
    }
    if (invOrderStatus) {
        invOrderStatus.textContent = order.orderStatus || "Confirmed";
        if (order.orderStatus === "Cancelled") {
            invOrderStatus.style.background = "rgba(239, 68, 68, 0.12)";
            invOrderStatus.style.color = "#ef4444";
        } else {
            invOrderStatus.style.background = "rgba(34, 197, 94, 0.12)";
            invOrderStatus.style.color = "var(--success)";
        }
    }

    if (invItemsBody) {
        invItemsBody.innerHTML = (order.orderItems || []).map((item, idx) => {
            const name = item.name || item.title || "Product";
            const qty = Number(item.quantity || item.qty) || 1;
            const price = Number(item.price) || 0;
            const total = price * qty;

            return `
                <tr>
                    <td class="text-center">${idx + 1}</td>
                    <td><strong>${name}</strong></td>
                    <td class="text-center">${qty}</td>
                    <td class="text-right">₹${price.toLocaleString("en-IN")}</td>
                    <td class="text-right"><strong>₹${total.toLocaleString("en-IN")}</strong></td>
                </tr>
            `;
        }).join("");
    }

    const itemsSub = order.itemsPrice || order.totalAmount || 0;
    if (invSubtotal) invSubtotal.textContent = `₹${Number(itemsSub).toLocaleString("en-IN")}`;

    // Step 9: Invoice Coupon Discount display
    if (invDiscountRow && invCouponCode && invDiscountVal) {
        if (order.discountAmount && order.discountAmount > 0) {
            invDiscountRow.style.display = "flex";
            invCouponCode.textContent = order.couponCode || "PROMO";
            invDiscountVal.textContent = `-₹${Number(order.discountAmount).toLocaleString("en-IN")}`;
        } else {
            invDiscountRow.style.display = "none";
        }
    }

    if (invGrandTotal) invGrandTotal.textContent = `₹${Number(order.totalAmount).toLocaleString("en-IN")}`;

    if (invoiceModal) {
        invoiceModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeInvoiceModal() {
    if (invoiceModal) {
        invoiceModal.classList.remove("active");
    }

    if (myOrdersModal && myOrdersModal.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

function printInvoice() {
    window.print();
}

// ==========================================
// CANCEL ORDER LOGIC
// ==========================================

function openCancelOrderModal(orderId, orderNum) {
    activeCancelOrderId = orderId;
    activeCancelOrderNum = orderNum;

    if (cancelTargetOrderId) {
        cancelTargetOrderId.textContent = orderNum;
    }

    if (cancelOrderForm) {
        cancelOrderForm.reset();
    }

    const defaultRadio = document.querySelector('input[name="cancelReason"][value="Ordered by mistake"]');
    if (defaultRadio) {
        defaultRadio.checked = true;
    }

    if (cancelOtherBox) {
        cancelOtherBox.style.display = "none";
    }
    if (cancelOtherText) {
        cancelOtherText.value = "";
    }
    if (cancelErrorMsg) {
        cancelErrorMsg.textContent = "";
        cancelErrorMsg.classList.remove("show");
    }

    if (cancelOrderModal) {
        cancelOrderModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeCancelOrderModal() {
    if (cancelOrderModal) {
        cancelOrderModal.classList.remove("active");
    }
    activeCancelOrderId = null;
    activeCancelOrderNum = "";

    // Keep scroll locked if order history modal is still active underneath
    if (myOrdersModal && myOrdersModal.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

async function handleCancelOrderSubmit(event) {
    event.preventDefault();

    if (cancelErrorMsg) {
        cancelErrorMsg.textContent = "";
        cancelErrorMsg.classList.remove("show");
    }

    if (!activeCancelOrderId) {
        closeCancelOrderModal();
        return;
    }

    const selectedRadio = document.querySelector('input[name="cancelReason"]:checked');
    if (!selectedRadio) {
        if (cancelErrorMsg) {
            cancelErrorMsg.textContent = "Please select a cancellation reason.";
            cancelErrorMsg.classList.add("show");
        }
        return;
    }

    let finalReason = selectedRadio.value;
    if (finalReason === "Other") {
        const customText = cancelOtherText ? cancelOtherText.value.trim() : "";
        if (!customText) {
            if (cancelErrorMsg) {
                cancelErrorMsg.textContent = "Please specify your reason for cancellation.";
                cancelErrorMsg.classList.add("show");
            }
            if (cancelOtherText) cancelOtherText.focus();
            return;
        }
        finalReason = customText;
    }

    try {
        if (confirmCancelBtn) {
            confirmCancelBtn.disabled = true;
            confirmCancelBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Cancelling...</span>';
        }

        const response = await fetch(`${API_BASE}/api/orders/${activeCancelOrderId}/cancel`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            body: JSON.stringify({ reason: finalReason })
        });

        const data = await response.json();

        if (!data.success) {
            if (cancelErrorMsg) {
                cancelErrorMsg.textContent = data.message || "Failed to cancel order.";
                cancelErrorMsg.classList.add("show");
            }
            return;
        }

        showToast(`Order ${activeCancelOrderNum} has been cancelled.`);
        closeCancelOrderModal();

        // Refresh My Orders list immediately
        await openOrdersModal();
    } catch (error) {
        console.error("Cancel order submit error:", error);
        if (cancelErrorMsg) {
            cancelErrorMsg.textContent = "Network error. Please try again.";
            cancelErrorMsg.classList.add("show");
        }
    } finally {
        if (confirmCancelBtn) {
            confirmCancelBtn.disabled = false;
            confirmCancelBtn.innerHTML = '<i class="fa-solid fa-ban"></i> <span>Cancel Order</span>';
        }
    }
}

// ==========================================
// STEP 9: WISHLIST / FAVORITES SYSTEM (PERSISTENT & DATABASE BACKED)
// ==========================================

function saveWishlist() {
    try {
        localStorage.setItem("shopEaseWishlist", JSON.stringify(wishlist));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (e) {
        console.warn("Error saving wishlist to localStorage:", e);
    }

    // Background sync with MongoDB if logged in
    syncWishlistWithBackend();
}

async function loadWishlist() {
    try {
        const local = localStorage.getItem("shopEaseWishlist") || localStorage.getItem("wishlist");
        if (local) {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed)) {
                wishlist = parsed;
            }
        }
    } catch (e) {
        console.warn("Failed to parse local wishlist:", e);
    }

    updateWishlistCount();
    syncAllWishlistHeartIcons();

    // If user is logged in, pull & merge from MongoDB backend
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
                    wishlist.forEach(item => { if (item && item._id) map.set(String(item._id), item); });
                    data.wishlist.forEach(item => { if (item && item._id) map.set(String(item._id), item); });
                    wishlist = Array.from(map.values());
                    localStorage.setItem("shopEaseWishlist", JSON.stringify(wishlist));
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));
                    updateWishlistCount();
                    syncAllWishlistHeartIcons();
                }
            }
        } catch (err) {
            // Offline fallback
        }
    }
}

async function syncWishlistWithBackend(productToToggle = null) {
    const token = localStorage.getItem("shopEaseToken");
    if (!token) return;

    try {
        if (productToToggle) {
            await fetch(`${API_BASE}/api/wishlist/toggle`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ product: productToToggle })
            });
        } else {
            await fetch(`${API_BASE}/api/wishlist/sync`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ localWishlist: wishlist })
            });
        }
    } catch (e) {
        // Silently retain localStorage copy
    }
}

function updateWishlistCount() {
    const count = wishlist.length;
    if (wishlistCount) {
        wishlistCount.textContent = count;
        wishlistCount.classList.add("bump");
        setTimeout(() => {
            if (wishlistCount) wishlistCount.classList.remove("bump");
        }, 300);
    }
    if (mobileWishlistCount) {
        mobileWishlistCount.textContent = count;
    }
}

function isInWishlist(productId) {
    if (!productId) return false;
    const pIdStr = String(productId);
    return wishlist.some(item => String(item._id || item.id) === pIdStr);
}

function syncAllWishlistHeartIcons() {
    const cardButtons = document.querySelectorAll(".wishlist-btn");
    cardButtons.forEach(btn => {
        const onclickAttr = btn.getAttribute("onclick") || "";
        const match = onclickAttr.match(/toggleWishlist\(['"]([^'"]+)['"]/);
        if (match && match[1]) {
            const inList = isInWishlist(match[1]);
            btn.classList.toggle("active", inList);
            btn.title = inList ? "Remove from Wishlist" : "Add to Wishlist";
            btn.innerHTML = `<i class="${inList ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
        }
    });
}

function toggleWishlist(productId, event, isModal = false) {
    if (event) {
        event.stopPropagation();
    }

    const pIdStr = String(productId);
    const product = allProducts.find(p => String(p._id || p.id) === pIdStr) ||
                    (window.ALL_CATALOG_PRODUCTS && window.ALL_CATALOG_PRODUCTS.find(p => String(p._id || p.id) === pIdStr)) ||
                    wishlist.find(p => String(p._id || p.id) === pIdStr);

    if (!product) return;

    const existingIndex = wishlist.findIndex(item => String(item._id || item.id) === pIdStr);

    if (existingIndex > -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        saveWishlist();
        updateWishlistCount();
        showToast(`Removed "${product.name}" from Wishlist`);
        syncWishlistWithBackend(product);
    } else {
        // Add to wishlist
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
        saveWishlist();
        updateWishlistCount();
        showToast(`Added "${product.name}" to Wishlist ❤️`);
        syncWishlistWithBackend(itemToSave);
    }

    // Sync heart icons across product grid
    syncAllWishlistHeartIcons();

    // Update modal button if currently viewing this product
    if (isModal) {
        const inList = isInWishlist(productId);
        const modalToggle = document.querySelector(".wishlist-modal-toggle-btn");
        if (modalToggle) {
            if (inList) {
                modalToggle.classList.add("active");
                modalToggle.innerHTML = '<i class="fa-solid fa-heart"></i> <span>Wishlisted</span>';
            } else {
                modalToggle.classList.remove("active");
                modalToggle.innerHTML = '<i class="fa-regular fa-heart"></i> <span>Wishlist</span>';
            }
        }
    }

    // If wishlist modal is open, re-render it
    if (wishlistModal && wishlistModal.classList.contains("active")) {
        renderWishlist();
    }
}

function openWishlist() {
    renderWishlist();
    if (wishlistModal) {
        wishlistModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeWishlist() {
    if (wishlistModal) {
        wishlistModal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

function renderWishlist() {
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
        if (moveAllWishlistBtn) moveAllWishlistBtn.style.display = "none";
        return;
    }

    emptyWishlist.style.display = "none";
    if (moveAllWishlistBtn) moveAllWishlistBtn.style.display = "flex";

    wishlistItemsList.innerHTML = wishlist.map(item => `
        <div class="wishlist-item-row" id="wishlist-row-${item._id}">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80'">
            <div class="wishlist-item-info">
                <h4>${item.name}</h4>
                <span class="item-cat">${item.category}</span>
                <span class="item-price">₹${Number(item.price).toLocaleString("en-IN")}</span>
            </div>
            <div class="wishlist-item-actions">
                <button class="wishlist-move-btn" type="button" onclick="moveWishlistToCart('${item._id}')" title="Move to Cart">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span>Move to Cart</span>
                </button>
                <button class="wishlist-remove-btn" type="button" onclick="removeFromWishlist('${item._id}')" title="Remove">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join("");
}

function removeFromWishlist(productId) {
    const pIdStr = String(productId);
    const product = allProducts.find(p => String(p._id || p.id) === pIdStr) || wishlist.find(p => String(p._id || p.id) === pIdStr);
    wishlist = wishlist.filter(item => String(item._id || item.id) !== pIdStr);
    saveWishlist();
    updateWishlistCount();
    renderWishlist();
    syncAllWishlistHeartIcons();
    showToast(product ? `Removed "${product.name}" from Wishlist` : "Item removed from Wishlist");

    // Also call delete endpoint if user logged in
    const token = localStorage.getItem("shopEaseToken");
    if (token) {
        fetch(`${API_BASE}/api/wishlist/${encodeURIComponent(pIdStr)}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        }).catch(() => {});
    }
}

function moveWishlistToCart(productId) {
    addToCart(productId, 1, false);
    removeFromWishlist(productId);
    showToast("Moved item to Cart! 🛒");
}

function moveAllWishlistToCart() {
    if (wishlist.length === 0) return;
    const count = wishlist.length;
    wishlist.forEach(item => {
        addToCart(item._id, 1, false);
    });
    wishlist = [];
    saveWishlist();
    updateWishlistCount();
    renderWishlist();
    closeWishlist();
    openCart();
    showToast(`Moved all ${count} items to Cart! 🛒`);
}

// ==========================================
// STEP 9: PROMO / COUPON SYSTEM
// ==========================================

const AVAILABLE_COUPONS = {
    "WELCOME10": {
        code: "WELCOME10",
        type: "percent",
        value: 10,
        minOrder: 0,
        description: "10% Instant Discount on Your Order"
    },
    "INTERN50": {
        code: "INTERN50",
        type: "flat",
        value: 50,
        minOrder: 150,
        description: "Flat ₹50 OFF on orders above ₹150"
    },
    "SUPER20": {
        code: "SUPER20",
        type: "percent",
        value: 20,
        minOrder: 500,
        description: "20% Super Saver on orders above ₹500"
    }
};

function calculateCouponDiscount(subtotal) {
    if (!activeCoupon) return 0;
    const rule = AVAILABLE_COUPONS[activeCoupon.code];
    if (!rule) return 0;

    if (subtotal < (rule.minOrder || 0)) {
        return 0;
    }

    if (rule.type === "percent") {
        return Math.round((subtotal * rule.value) / 100);
    } else if (rule.type === "flat") {
        return Math.min(rule.value, subtotal);
    }
    return 0;
}

function applyCoupon(forcedCode = null) {
    const code = (forcedCode || (couponInput ? couponInput.value : "")).trim().toUpperCase();

    if (!code) {
        setCouponStatus("Please enter a valid coupon code.", "error");
        return;
    }

    const couponRule = AVAILABLE_COUPONS[code];
    if (!couponRule) {
        setCouponStatus(`Invalid coupon "${code}". Try WELCOME10, INTERN50, or SUPER20!`, "error");
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 1)), 0);

    if (subtotal < couponRule.minOrder) {
        setCouponStatus(`Coupon "${code}" requires a minimum order of ₹${couponRule.minOrder}.`, "error");
        return;
    }

    const discount = couponRule.type === "percent"
        ? Math.round((subtotal * couponRule.value) / 100)
        : Math.min(couponRule.value, subtotal);

    activeCoupon = {
        code: couponRule.code,
        discount: discount,
        description: couponRule.description
    };

    if (couponInput) couponInput.value = code;

    setCouponStatus(`
        <span>🎉 Coupon <strong>${code}</strong> applied! You saved ₹${discount.toLocaleString("en-IN")}.</span>
        <button type="button" class="remove-coupon-btn" onclick="removeCoupon()">Remove</button>
    `, "success");

    renderCheckoutSummary();
    showToast(`Coupon "${code}" applied! Saved ₹${discount}`);
}

function quickApplyCoupon(code) {
    if (couponInput) couponInput.value = code;
    applyCoupon(code);
}

function removeCoupon() {
    const prevCode = activeCoupon ? activeCoupon.code : "";
    activeCoupon = null;
    if (couponInput) couponInput.value = "";
    if (couponStatusBox) {
        couponStatusBox.style.display = "none";
        couponStatusBox.innerHTML = "";
    }
    renderCheckoutSummary();
    if (prevCode) {
        showToast(`Coupon "${prevCode}" removed`);
    }
}

function setCouponStatus(message, type) {
    if (!couponStatusBox) return;
    couponStatusBox.className = `coupon-status ${type}`;
    couponStatusBox.innerHTML = message;
    couponStatusBox.style.display = "flex";
}

// ==========================================
// STEP 10: ADMIN DASHBOARD & ORDER STATUS MANAGER
// ==========================================

async function openAdminModal() {
    if (adminModal) {
        adminModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
    await Promise.all([loadAdminStats(), loadAdminOrders()]);
}

function closeAdminModal() {
    if (adminModal) {
        adminModal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

async function loadAdminStats() {
    try {
        const response = await fetch(`${API_BASE}/api/orders/admin/stats`);
        if (!response.ok) throw new Error("Failed to load admin stats");
        const data = await response.json();

        if (data.success && data.stats) {
            const { totalRevenue, totalOrders, totalUsers, totalProducts, breakdown } = data.stats;

            if (kpiRevenue) kpiRevenue.textContent = `₹${Number(totalRevenue || 0).toLocaleString("en-IN")}`;
            if (kpiOrders) kpiOrders.textContent = totalOrders || 0;
            if (kpiUsers) kpiUsers.textContent = totalUsers || 0;
            if (kpiProducts) kpiProducts.textContent = totalProducts || 24;

            if (kpiActiveOrders && breakdown) {
                const activeCount = (breakdown.confirmed || 0) + (breakdown.processing || 0) + (breakdown.shipped || 0);
                kpiActiveOrders.textContent = `${activeCount} In Progress • ${breakdown.delivered || 0} Delivered`;
            }
        }
    } catch (error) {
        console.error("Load Admin Stats Error:", error);
    }
}

async function loadAdminOrders() {
    try {
        if (adminOrdersTableBody) {
            adminOrdersTableBody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 30px; color: var(--text-light);">
                        <i class="fa-solid fa-spinner fa-spin"></i> Loading live store orders...
                    </td>
                </tr>
            `;
        }

        const response = await fetch(`${API_BASE}/api/orders/admin/all`);
        if (!response.ok) throw new Error("Failed to load store orders");
        const data = await response.json();

        if (data.success) {
            allAdminOrders = data.orders || [];
            // Also synchronize loadedUserOrders if logged in
            data.orders.forEach(adminOrd => {
                const idx = loadedUserOrders.findIndex(uOrd => uOrd._id === adminOrd._id);
                if (idx > -1) {
                    loadedUserOrders[idx] = adminOrd;
                }
            });
            renderAdminOrders();
        }
    } catch (error) {
        console.error("Load Admin Orders Error:", error);
        if (adminOrdersTableBody) {
            adminOrdersTableBody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 30px; color: #ef4444;">
                        <i class="fa-solid fa-circle-exclamation"></i> Error loading orders. Please click refresh.
                    </td>
                </tr>
            `;
        }
    }
}

function renderAdminOrders() {
    if (!adminOrdersTableBody) return;

    const query = adminSearchQuery.trim().toLowerCase();
    const filtered = allAdminOrders.filter(order => {
        const orderId = (order.orderId || order._id || "").toLowerCase();
        const custName = (order.shippingAddress?.fullName || order.user?.name || "").toLowerCase();
        const city = (order.shippingAddress?.city || "").toLowerCase();
        const matchesQuery = !query || orderId.includes(query) || custName.includes(query) || city.includes(query);

        const matchesStatus = selectedAdminStatusFilter === "all" || order.orderStatus === selectedAdminStatusFilter;

        return matchesQuery && matchesStatus;
    });

    if (filtered.length === 0) {
        adminOrdersTableBody.innerHTML = "";
        if (adminEmptyOrders) adminEmptyOrders.style.display = "block";
        return;
    }

    if (adminEmptyOrders) adminEmptyOrders.style.display = "none";

    adminOrdersTableBody.innerHTML = filtered.map(order => {
        const orderNum = order.orderId ? (order.orderId.startsWith('#') ? order.orderId : '#' + order.orderId) : ('#ORD-' + order._id.slice(-8).toUpperCase());
        const orderDate = new Date(order.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        });

        const custName = order.shippingAddress?.fullName || order.user?.name || "Customer";
        const city = order.shippingAddress?.city || "—";
        const phone = order.shippingAddress?.phone || "—";

        const itemsCount = (order.orderItems || []).reduce((sum, it) => sum + (Number(it.quantity || it.qty) || 1), 0);
        const itemNames = (order.orderItems || []).map(it => it.name || it.title || "Product").join(", ");

        const totalAmount = `₹${Number(order.totalAmount || 0).toLocaleString("en-IN")}`;
        const payMethod = order.paymentMethod === "Cash on Delivery" ? "COD" : "Instant Pay";
        const couponTag = order.couponCode ? ` • <span style="color: #10b981;">🎟️ ${order.couponCode}</span>` : "";

        const currentStatus = order.orderStatus || "Confirmed";

        return `
            <tr id="admin-order-row-${order._id}">
                <td>
                    <span class="admin-order-id-badge">${orderNum}</span>
                    <small style="display: block; color: var(--text-light); font-size: 0.7rem;">${orderDate}</small>
                </td>
                <td>
                    <div class="admin-cust-info">
                        <strong>${custName}</strong>
                        <span><i class="fa-solid fa-location-dot"></i> ${city} • ${phone}</span>
                    </div>
                </td>
                <td>
                    <div class="admin-items-summary">
                        <span class="items-count">${itemsCount} Item${itemsCount > 1 ? 's' : ''}</span>
                        <span class="items-preview" title="${itemNames}">${itemNames}</span>
                    </div>
                </td>
                <td>
                    <div class="admin-pay-col">
                        <strong>${totalAmount}</strong>
                        <span>${payMethod}${couponTag}</span>
                    </div>
                </td>
                <td>
                    <select 
                        class="status-select-badge status-${currentStatus}"
                        onchange="handleAdminStatusChange('${order._id}', this.value)"
                        title="Change status to update customer timeline live"
                    >
                        <option value="Confirmed" ${currentStatus === "Confirmed" ? "selected" : ""}>🔵 Confirmed</option>
                        <option value="Processing" ${currentStatus === "Processing" ? "selected" : ""}>🟡 Processing</option>
                        <option value="Shipped" ${currentStatus === "Shipped" ? "selected" : ""}>🟣 Shipped</option>
                        <option value="Delivered" ${currentStatus === "Delivered" ? "selected" : ""}>🟢 Delivered</option>
                        <option value="Cancelled" ${currentStatus === "Cancelled" ? "selected" : ""}>🔴 Cancelled</option>
                    </select>
                </td>
                <td class="text-right">
                    <button class="admin-action-btn" type="button" onclick="previewAdminOrderInvoice('${order._id}')" title="View / Print Tax Invoice">
                        <i class="fa-solid fa-receipt"></i>
                        <span>Invoice</span>
                    </button>
                </td>
            </tr>
        `;
    }).join("");
}

async function handleAdminStatusChange(orderId, newStatus) {
    try {
        const response = await fetch(`${API_BASE}/api/orders/admin/${orderId}/status`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: newStatus })
        });

        const data = await response.json();

        if (!data.success) {
            showToast(data.message || "Failed to update order status");
            await loadAdminOrders();
            return;
        }

        showToast(`Order status updated to "${newStatus}"! Live timeline synced.`);

        // Update in local lists
        const targetIdx = allAdminOrders.findIndex(o => o._id === orderId);
        if (targetIdx > -1) {
            allAdminOrders[targetIdx] = data.order;
        }

        const userOrderIdx = loadedUserOrders.findIndex(o => o._id === orderId);
        if (userOrderIdx > -1) {
            loadedUserOrders[userOrderIdx] = data.order;
        }

        // Re-render admin orders and refresh stats
        renderAdminOrders();
        loadAdminStats();

        // If My Orders modal is open, re-render customer timeline view immediately
        if (myOrdersModal && myOrdersModal.classList.contains("active")) {
            renderMyOrders(loadedUserOrders);
        }
    } catch (error) {
        console.error("Status Change Error:", error);
        showToast("Network error updating status.");
        await loadAdminOrders();
    }
}

function previewAdminOrderInvoice(orderId) {
    // Ensure order is in loadedUserOrders so openInvoiceModal can display it
    const order = allAdminOrders.find(o => o._id === orderId);
    if (order) {
        const existingIdx = loadedUserOrders.findIndex(o => o._id === orderId);
        if (existingIdx > -1) {
            loadedUserOrders[existingIdx] = order;
        } else {
            loadedUserOrders.push(order);
        }
    }
    openInvoiceModal(orderId);
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEventListeners() {
    // Search (Desktop and Mobile) Input, Enter Key, Clear
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchProducts(e);
            updateSearchClearButtons();
        });
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                const val = searchInput.value.trim();
                if (val) {
                    handleSearchSubmit(val);
                }
            }
        });
    }

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener("input", (e) => {
            searchProducts(e);
            updateSearchClearButtons();
        });
        mobileSearchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                const val = mobileSearchInput.value.trim();
                if (val) {
                    handleSearchSubmit(val);
                }
            }
        });
    }

    // Search Clear Buttons
    if (searchClearBtn) {
        searchClearBtn.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                searchInput.focus();
            }
            updateSearchClearButtons();
            searchProducts();
        });
    }
    if (mobileSearchClearBtn) {
        mobileSearchClearBtn.addEventListener("click", () => {
            if (mobileSearchInput) {
                mobileSearchInput.value = "";
                mobileSearchInput.focus();
            }
            updateSearchClearButtons();
            searchProducts();
        });
    }



    // Dismiss suggestions dropdown when clicking outside
    // Top Horizontal Category Strip Cards (Directly opens dedicated search page pre-filled with up to 100 products)
    const topCategoryCards = document.querySelectorAll(".category-pill-card");
    topCategoryCards.forEach(card => {
        card.addEventListener("click", (e) => {
            const category = card.dataset.category;
            if (category && category.toLowerCase() !== "all") {
                e.preventDefault();
                window.location.href = `search.html?cat=${encodeURIComponent(category)}&q=${encodeURIComponent(category)}`;
            } else {
                filterByCategory("all");
                const prodSection = document.getElementById("products");
                if (prodSection) {
                    prodSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Category filter buttons (Grid pills - Also opens dedicated search page pre-filled with up to 100 products)
    const categoryBtnList = document.querySelectorAll(".category-btn");
    categoryBtnList.forEach(button => {
        button.addEventListener("click", (e) => {
            const category = button.dataset.category;
            if (category && category.toLowerCase() !== "all") {
                e.preventDefault();
                window.location.href = `search.html?cat=${encodeURIComponent(category)}&q=${encodeURIComponent(category)}`;
            } else {
                filterByCategory("all");
                const prodSection = document.getElementById("products");
                if (prodSection) {
                    prodSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Load More Products Button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            currentDisplayLimit += 24;
            searchProducts();
        });
    }

    // Cart Modal open/close
    if (cartButton) {
        cartButton.addEventListener("click", openCart);
    }
    const bottomCartBtn = document.getElementById("bottomCartBtn");
    if (bottomCartBtn) {
        bottomCartBtn.addEventListener("click", openCart);
    }
    if (closeCartModal) {
        closeCartModal.addEventListener("click", closeCart);
    }

    // Product details modal
    if (closeProductModal) {
        closeProductModal.addEventListener("click", closeProductDetails);
    }

    // Auth Button in Navbar & Mobile
    if (authButton) {
        authButton.addEventListener("click", () => openAuthModal("login"));
    }
    if (mobileAuthBtn) {
        mobileAuthBtn.addEventListener("click", () => {
            closeMobileMenu();
            openAuthModal("login");
        });
    }

    // Close Auth Modal
    if (closeAuthModalBtn) {
        closeAuthModalBtn.addEventListener("click", closeAuthModal);
    }

    // Mobile specific buttons (Theme and Cart)
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener("click", toggleTheme);
    }
    if (mobileCartBtn) {
        mobileCartBtn.addEventListener("click", () => {
            closeMobileMenu();
            openCart();
        });
    }

    // Auth Tabs & Switch links
    if (tabLogin) {
        tabLogin.addEventListener("click", () => switchAuthTab("login"));
    }
    if (tabRegister) {
        tabRegister.addEventListener("click", () => switchAuthTab("register"));
    }
    if (switchToRegister) {
        switchToRegister.addEventListener("click", () => switchAuthTab("register"));
    }
    if (switchToLogin) {
        switchToLogin.addEventListener("click", () => switchAuthTab("login"));
    }

    // Auth Forms Submit
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
    if (registerForm) {
        registerForm.addEventListener("submit", handleRegister);
    }

    // Logout & View Orders in Auth Profile view
    if (logoutButton) {
        logoutButton.addEventListener("click", handleLogout);
    }
    if (profileOrdersBtn) {
        profileOrdersBtn.addEventListener("click", () => {
            closeAuthModal();
            openOrdersModal();
        });
    }

    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }

    // Mobile menu hamburger
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", toggleMobileMenu);
    }

    // Newsletter
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", handleNewsletter);
    }

    // Checkout button inside Cart
    if (checkoutButton) {
        checkoutButton.addEventListener("click", handleCheckout);
    }

    // Step 7: Checkout Modal listeners
    if (closeCheckoutModalBtn) {
        closeCheckoutModalBtn.addEventListener("click", closeCheckoutModal);
    }
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", handlePlaceOrder);
    }

    // Payment Option selection toggles
    if (optCod) {
        optCod.addEventListener("click", () => {
            optCod.classList.add("selected");
            if (optUpi) optUpi.classList.remove("selected");
            const radio = optCod.querySelector("input");
            if (radio) radio.checked = true;
        });
    }
    if (optUpi) {
        optUpi.addEventListener("click", () => {
            optUpi.classList.add("selected");
            if (optCod) optCod.classList.remove("selected");
            const radio = optUpi.querySelector("input");
            if (radio) radio.checked = true;
        });
    }

    // Step 7: Order Success Modal buttons
    if (successViewOrdersBtn) {
        successViewOrdersBtn.addEventListener("click", () => {
            closeSuccessModal();
            openOrdersModal();
        });
    }
    if (successContinueBtn) {
        successContinueBtn.addEventListener("click", closeSuccessModal);
    }

    // Step 7: My Orders Modal close
    if (closeOrdersModalBtn) {
        closeOrdersModalBtn.addEventListener("click", closeOrdersModal);
    }

    // Step 7: Cancel Order Modal listeners
    if (closeCancelModalBtn) {
        closeCancelModalBtn.addEventListener("click", closeCancelOrderModal);
    }
    if (cancelDismissBtn) {
        cancelDismissBtn.addEventListener("click", closeCancelOrderModal);
    }
    if (cancelOrderForm) {
        cancelOrderForm.addEventListener("submit", handleCancelOrderSubmit);
    }

    // Cancel reason radio selection (toggle "Other" text input)
    const reasonRadios = document.querySelectorAll('input[name="cancelReason"]');
    reasonRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.value === "Other") {
                if (cancelOtherBox) cancelOtherBox.style.display = "block";
                if (cancelOtherText) cancelOtherText.focus();
            } else {
                if (cancelOtherBox) cancelOtherBox.style.display = "none";
            }
        });
    });

    // Footer quick links
    if (footerLogin) {
        footerLogin.addEventListener("click", e => {
            e.preventDefault();
            openAuthModal("login");
        });
    }
    if (footerRegister) {
        footerRegister.addEventListener("click", e => {
            e.preventDefault();
            openAuthModal("register");
        });
    }
    if (footerOrders) {
        footerOrders.addEventListener("click", e => {
            e.preventDefault();
            openOrdersModal();
        });
    }
    if (footerCart) {
        footerCart.addEventListener("click", e => {
            e.preventDefault();
            openCart();
        });
    }

    // Step 8: Invoice Modal listeners
    if (closeInvoiceModalBtn) {
        closeInvoiceModalBtn.addEventListener("click", closeInvoiceModal);
    }
    if (printInvoiceBtn) {
        printInvoiceBtn.addEventListener("click", printInvoice);
    }

    // Step 9: Wishlist Modal listeners
    if (wishlistButton) {
        wishlistButton.addEventListener("click", openWishlist);
    }
    if (mobileWishlistBtn) {
        mobileWishlistBtn.addEventListener("click", () => {
            closeMobileMenu();
            openWishlist();
        });
    }
    if (closeWishlistModalBtn) {
        closeWishlistModalBtn.addEventListener("click", closeWishlist);
    }
    if (moveAllWishlistBtn) {
        moveAllWishlistBtn.addEventListener("click", moveAllWishlistToCart);
    }

    // Step 9: Promo Coupon listeners
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener("click", () => applyCoupon());
    }
    if (couponInput) {
        couponInput.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                event.preventDefault();
                applyCoupon();
            }
        });
    }

    // Step 10: Admin Dashboard listeners
    if (adminPortalBtn) {
        adminPortalBtn.addEventListener("click", openAdminModal);
    }
    if (mobileAdminBtn) {
        mobileAdminBtn.addEventListener("click", () => {
            closeMobileMenu();
            openAdminModal();
        });
    }
    if (footerAdmin) {
        footerAdmin.addEventListener("click", e => {
            e.preventDefault();
            openAdminModal();
        });
    }
    if (closeAdminModalBtn) {
        closeAdminModalBtn.addEventListener("click", closeAdminModal);
    }
    if (refreshAdminBtn) {
        refreshAdminBtn.addEventListener("click", async () => {
            const icon = refreshAdminBtn.querySelector("i");
            if (icon) icon.classList.add("fa-spin");
            await Promise.all([loadAdminStats(), loadAdminOrders()]);
            setTimeout(() => {
                if (icon) icon.classList.remove("fa-spin");
            }, 600);
            showToast("Admin data refreshed! 🔄");
        });
    }

    // Admin Search filter
    if (adminOrderSearch) {
        adminOrderSearch.addEventListener("input", e => {
            adminSearchQuery = e.target.value;
            renderAdminOrders();
        });
    }

    // Admin Status Filter Pills
    if (adminFilterPills) {
        const pills = adminFilterPills.querySelectorAll(".admin-pill-btn");
        pills.forEach(pill => {
            pill.addEventListener("click", () => {
                pills.forEach(p => p.classList.remove("active"));
                pill.classList.add("active");
                selectedAdminStatusFilter = pill.dataset.filter || "all";
                renderAdminOrders();
            });
        });
    }

    // Close modals on backdrop click
    if (cartModal) {
        cartModal.addEventListener("click", event => {
            if (event.target === cartModal) closeCart();
        });
    }
    if (wishlistModal) {
        wishlistModal.addEventListener("click", event => {
            if (event.target === wishlistModal) closeWishlist();
        });
    }
    if (adminModal) {
        adminModal.addEventListener("click", event => {
            if (event.target === adminModal) closeAdminModal();
        });
    }
    if (productModal) {
        productModal.addEventListener("click", event => {
            if (event.target === productModal) closeProductDetails();
        });
    }
    if (authModal) {
        authModal.addEventListener("click", event => {
            if (event.target === authModal) closeAuthModal();
        });
    }
    if (checkoutModal) {
        checkoutModal.addEventListener("click", event => {
            if (event.target === checkoutModal) closeCheckoutModal();
        });
    }
    if (orderSuccessModal) {
        orderSuccessModal.addEventListener("click", event => {
            if (event.target === orderSuccessModal) closeSuccessModal();
        });
    }
    if (myOrdersModal) {
        myOrdersModal.addEventListener("click", event => {
            if (event.target === myOrdersModal) closeOrdersModal();
        });
    }
    if (cancelOrderModal) {
        cancelOrderModal.addEventListener("click", event => {
            if (event.target === cancelOrderModal) closeCancelOrderModal();
        });
    }
    if (invoiceModal) {
        invoiceModal.addEventListener("click", event => {
            if (event.target === invoiceModal) closeInvoiceModal();
        });
    }

    // Close mobile menu after clicking any nav link
    if (mobileNav) {
        const mobileLinks = mobileNav.querySelectorAll("a");
        mobileLinks.forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });
    }

    // Anchor smooth scrolling for in-page section links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId && targetId !== "#" && targetId.length > 1) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    scrollToSection(targetId);
                }
            }
        });
    });

    // Hero buttons explicit bindings
    const heroShopNow = document.getElementById("heroShopNowBtn");
    if (heroShopNow) {
        heroShopNow.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToSection("#products");
        });
    }
    const heroExplore = document.getElementById("heroExploreBtn");
    if (heroExplore) {
        heroExplore.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToSection("#products");
        });
    }

    // Escape key closes all modals
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCart();
            closeWishlist();
            closeAdminModal();
            closeProductDetails();
            closeAuthModal();
            closeCheckoutModal();
            closeSuccessModal();
            closeCancelOrderModal();
            closeInvoiceModal();
            closeOrdersModal();
            closeMobileMenu();
        }
    });
}

// ==========================================
// SMOOTH SECTION NAVIGATION (PRODUCTS, ABOUT, CONTACT, HOME)
// ==========================================

function scrollToSection(targetId) {
    if (!targetId) return;

    // Immediately dismiss splash if active
    if (document.body.classList.contains("cartovia-splash-active")) {
        const splash = document.getElementById("cartoviaSplash");
        if (splash) splash.style.display = "none";
        document.body.classList.remove("cartovia-splash-active");
        document.documentElement.classList.remove("cartovia-show-splash");
        document.documentElement.classList.add("cartovia-hide-splash");
    }

    if (typeof closeMobileMenu === "function") {
        closeMobileMenu();
    }

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
        const navbar = document.querySelector('.navbar.header') || document.querySelector('.navbar');
        const navHeight = navbar ? navbar.getBoundingClientRect().height : 72;
        const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: "smooth"
        });

        // Update active class on desktop and mobile nav links
        document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
            const href = link.getAttribute("href");
            if (href === targetId) {
                link.classList.add("active");
            } else if (href && href.startsWith("#")) {
                link.classList.remove("active");
            }
        });
    } else {
        window.location.href = "index.html" + targetId;
    }
}

// Global window bindings for direct button triggers
window.scrollToSection = scrollToSection;
window.toggleTheme = toggleTheme;
window.openWishlist = openWishlist;
window.closeWishlist = closeWishlist;
window.openCart = openCart;
window.closeCart = closeCart;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.openAdminModal = openAdminModal;
window.closeAdminModal = closeAdminModal;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.showProductDetails = showProductDetails;
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;