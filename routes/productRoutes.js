const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");
const router = express.Router();
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

const KNOWN_STORE_CATEGORIES = [
    "Clothing", "Shoes", "Watches", "Electronics",
    "Bags", "Accessories", "Kids & Toys", "Books", "Home"
];

const resolveSemanticCategory = (input) => {
    if (!input) return null;
    const clean = input.trim().toLowerCase();
    if (clean === "all") return null;

    // Check if directly a known category
    const direct = KNOWN_STORE_CATEGORIES.find(c => c.toLowerCase() === clean);
    if (direct) return direct;

    // Search semantic keywords
    for (const rule of CATEGORY_KEYWORD_RULES) {
        for (const kw of rule.keywords) {
            if (clean === kw || clean.startsWith(kw + " ") || clean.endsWith(" " + kw) || clean.includes(" " + kw + " ") || clean.includes(kw)) {
                return rule.category;
            }
        }
    }
    return null;
};

// GET products (Supports ?category=..., ?q=... / ?search=..., ?limit=100)
router.get("/", async (req, res) => {
    const { category, q, search, limit } = req.query;
    const rawSearch = (q || search || "").trim();
    const resolvedCat = resolveSemanticCategory(category) || resolveSemanticCategory(rawSearch);
    const maxLimit = parseInt(limit, 10) > 0 ? parseInt(limit, 10) : 100;

    try {
        if (mongoose.connection && mongoose.connection.readyState === 1) {
            let filter = {};

            if (resolvedCat) {
                filter.category = new RegExp(`^${resolvedCat.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i");
            }

            if (rawSearch && !resolvedCat) {
                const searchRegex = new RegExp(rawSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
                filter.$or = [
                    { name: searchRegex },
                    { category: searchRegex },
                    { description: searchRegex }
                ];
            }

            const products = await Product.find(filter).limit(maxLimit).maxTimeMS(3000);
            if (products && products.length > 0) {
                return res.json({
                    success: true,
                    count: products.length,
                    category: resolvedCat || undefined,
                    query: rawSearch || undefined,
                    products: products
                });
            }
        }

        // Fallback if DB has 0 items
        const localCatalog = require("../data/productsData");
        let filtered = localCatalog;

        if (resolvedCat) {
            const catLower = resolvedCat.toLowerCase();
            filtered = filtered.filter(p => (p.category || "").toLowerCase() === catLower);
        } else if (rawSearch) {
            const sLower = rawSearch.toLowerCase();
            filtered = filtered.filter(p =>
                (p.name && p.name.toLowerCase().includes(sLower)) ||
                (p.category && p.category.toLowerCase().includes(sLower)) ||
                (p.description && p.description.toLowerCase().includes(sLower))
            );
        }

        return res.json({
            success: true,
            count: Math.min(filtered.length, maxLimit),
            totalAvailable: filtered.length,
            category: resolvedCat || undefined,
            query: rawSearch || undefined,
            products: filtered.slice(0, maxLimit),
            source: "local-catalog"
        });
    } catch (error) {
        // Fallback on DB connection failure / timeout
        try {
            const localCatalog = require("../data/productsData");
            let filtered = localCatalog;

            if (resolvedCat) {
                const catLower = resolvedCat.toLowerCase();
                filtered = filtered.filter(p => (p.category || "").toLowerCase() === catLower);
            } else if (rawSearch) {
                const sLower = rawSearch.toLowerCase();
                filtered = filtered.filter(p =>
                    (p.name && p.name.toLowerCase().includes(sLower)) ||
                    (p.category && p.category.toLowerCase().includes(sLower)) ||
                    (p.description && p.description.toLowerCase().includes(sLower))
                );
            }

            return res.json({
                success: true,
                count: Math.min(filtered.length, maxLimit),
                totalAvailable: filtered.length,
                category: resolvedCat || undefined,
                query: rawSearch || undefined,
                products: filtered.slice(0, maxLimit),
                source: "local-catalog-fallback"
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch products"
            });
        }
    }
});
// GET single product
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.json({
            success: true,
            product: product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid product ID"
        });
    }
});
// POST new product
router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create product",
            error: error.message
        });
    }
});
module.exports = router;