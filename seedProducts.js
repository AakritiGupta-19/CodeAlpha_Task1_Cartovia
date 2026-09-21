// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const Product = require("./models/Product");

// dotenv.config();

// const products = [
//     {
//         name: "Classic T-Shirt",
//         price: 599,
//         description: "Comfortable cotton t-shirt for everyday wear.",
//         image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//         category: "Clothing",
//         rating: 4.5
//     },
//     {
//         name: "Running Shoes",
//         price: 1499,
//         description: "Lightweight running shoes with a comfortable design.",
//         image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//         category: "Shoes",
//         rating: 4.4
//     },
//     {
//         name: "Leather Handbag",
//         price: 1999,
//         description: "Stylish handbag suitable for everyday use.",
//         image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
//         category: "Bags",
//         rating: 4.3
//     },
//     {
//         name: "Classic Watch",
//         price: 2499,
//         description: "Elegant watch with a classic design.",
//         image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
//         category: "Accessories",
//         rating: 4.6
//     },
//     {
//         name: "Denim Jacket",
//         price: 1799,
//         description: "Classic denim jacket with a modern casual look.",
//         image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
//         category: "Clothing",
//         rating: 4.5
//     },
//     {
//         name: "Sunglasses",
//         price: 899,
//         description: "Modern sunglasses suitable for casual outfits.",
//         image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
//         category: "Accessories",
//         rating: 4.2
//     }
// ];

// const seedProducts = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);

//         await Product.deleteMany();

//         await Product.insertMany(products);

//         console.log("Sample products added successfully!");

//         await mongoose.connection.close();
//     } catch (error) {
//         console.error("Error adding products:", error.message);
//     }
// };

// seedProducts();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const products = require("./data/productsData");

dotenv.config();

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully!");

        await Product.deleteMany();
        console.log("Cleared existing products.");

        // Remove the custom _id before inserting so MongoDB generates standard ObjectIds
        const cleanProducts = products.map(({ _id, ...rest }) => rest);
        const inserted = await Product.insertMany(cleanProducts);

        console.log(`Successfully seeded ${inserted.length} products across ${new Set(inserted.map(p => p.category)).size} categories!`);
        process.exit(0);
    } catch (error) {
        console.error("Error seeding products:", error.message);
        process.exit(1);
    }
};

seedProducts();