<div align="center">

# 🛒 CARTOVIA — E-Commerce Platform

**A full-stack, responsive modern shopping application built with Node.js, Express 5, MongoDB, and Vanilla JavaScript.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Cartovia-FF5A82?style=for-the-badge&logo=googlechrome&logoColor=white)](https://aakritigupta-19.github.io/CodeAlpha_Task1_Cartovia/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%209.9-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT Auth](https://img.shields.io/badge/Auth-JWT%20%2B%20Bcrypt-FFB13B?style=for-the-badge&logo=jsonwebtokens&logoColor=black)](https://jwt.io/)

<br/>

👉 **[🚀 Launch Live Demo Website](https://aakritigupta-19.github.io/CodeAlpha_Task1_Cartovia/)** 👈

</div>

---

## ⚡ Highlights & Key Features

| Category | Highlights |
|---|---|
| **🎨 Modern Storefront** | Dark & Light theme switcher, dynamic splash screen, quick-view modals, flash deals countdown, responsive bottom navigation. |
| **🧠 Semantic Search** | NLP keyword resolver across 9 departments (*e.g., "kurti" ➔ Clothing, "sneakers" ➔ Shoes*); instant multi-field query matching with offline catalog fallback. |
| **💳 Cart & Checkout** | Real-time totals & tax calculation, promo coupons (`SAVE10`, `FREESHIP`), multi-mode checkout (COD, UPI demo, Card demo), human-readable order IDs (`ORD-XXXXXX`). |
| **👤 User Account & Wishlist** | Order history with live status progression, order cancellation with recorded reasons, SuperCoins rewards, and automatic guest-to-cloud wishlist synchronization. |
| **📊 Admin Dashboard** | Real-time analytics KPI cards (Revenue aggregation, order counts, user stats) and instant order status progression controls. |
| **🔒 Security & Auth** | JWT stateless tokens (30-day validity), 10-round bcrypt password hashing, and user ownership authorization checks on sensitive actions. |

---

## 🛠️ Tech Stack

- **Backend:** Node.js (v18+), Express.js (v5.2)
- **Database:** MongoDB Atlas / Local MongoDB via Mongoose (v9.9)
- **Authentication:** JSON Web Tokens (`jsonwebtoken`), `bcryptjs`
- **Frontend:** Semantic HTML5, Vanilla JavaScript (ES6+), Custom Responsive CSS3
- **Icons & Fonts:** Font Awesome 6.5, Google Fonts (*Poppins* & *Inter*)

---

## 🚀 Quick Start (Local Setup)

```bash
# 1. Clone the repository
git clone https://github.com/aakritigupta-19/CodeAlpha_Task1_Cartovia.git
cd CodeAlpha_Task1_Cartovia

# 2. Install dependencies
npm install

# 3. Setup environment variables (copy template)
cp .env.example .env    # On Windows PowerShell: Copy-Item .env.example .env

# 4. Seed initial products to MongoDB
node seedProducts.js

# 5. Start the development server
npm run dev
```

Visit: **`http://localhost:5000`** in your browser.

> [!TIP]
> Even without an active MongoDB connection, the store automatically switches to its bundled local catalog (`data/productsData.js`) for seamless offline browsing!

---

## 🔌 API Reference

### Core Endpoints

| Area | Method | Endpoint | Access | Summary |
|---|---|---|---|---|
| **Auth** | `POST` | `/api/auth/register` | Public | Register new user account |
| | `POST` | `/api/auth/login` | Public | Login & retrieve JWT token |
| | `GET` | `/api/auth/me` | Protected | Fetch current logged-in user profile |
| **Products** | `GET` | `/api/products` | Public | List products (`?category=`, `?q=`, `?limit=`) |
| | `GET` | `/api/products/:id` | Public | Get product details by ID |
| | `POST` | `/api/products` | Public / Admin | Create new product |
| **Orders** | `POST` | `/api/orders` | Protected | Create order with items & shipping address |
| | `GET` | `/api/orders/my-orders` | Protected | Retrieve user's order history |
| | `GET` | `/api/orders/:id` | Protected | Fetch specific order details |
| | `PUT` | `/api/orders/:id/cancel` | Protected | Cancel unfulfilled order with user reason |
| **Admin** | `GET` | `/api/orders/admin/stats` | Admin | Store KPI metrics (Revenue, totals, breakdown) |
| | `GET` | `/api/orders/admin/all` | Admin | View all customer orders |
| | `PUT` | `/api/orders/admin/:id/status` | Admin | Update status (`Confirmed` ➔ `Delivered`) |
| **Wishlist** | `GET` | `/api/wishlist` | Protected | Fetch user wishlist |
| | `POST` | `/api/wishlist/toggle` | Protected | Add / remove product from wishlist |
| | `POST` | `/api/wishlist/sync` | Protected | Sync guest localStorage items to account |
| | `DELETE`| `/api/wishlist/:id` | Protected | Remove item from wishlist |

<details>
<summary><b>🔍 Click to view Sample Request / Response Payloads</b></summary>

#### Login Response (`POST /api/auth/login`)
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsIn...",
  "user": { "_id": "65fc...", "name": "Jane Doe", "email": "jane@example.com" }
}
```

#### Create Order Payload (`POST /api/orders`)
```json
{
  "orderItems": [{ "product": "65fc...", "name": "Watch", "quantity": 1, "price": 2499, "image": "..." }],
  "shippingAddress": { "fullName": "Jane Doe", "phone": "9876543210", "street": "Main St", "city": "Delhi", "postalCode": "110001" },
  "paymentMethod": "Cash on Delivery",
  "couponCode": "SAVE10",
  "discountAmount": 250,
  "itemsPrice": 2499,
  "totalAmount": 2249
}
```
</details>

---

## 📂 Project Architecture

<details>
<summary><b>📁 Click to view Folder Structure</b></summary>

```text
├── config/database.js         # MongoDB connection
├── data/productsData.js       # Fallback product catalog
├── models/                    # Mongoose Schemas (User, Product, Order)
├── public/                    # Frontend Client
│   ├── index.html / script.js # Storefront & modals
│   ├── categories.html / .js  # Category exploration
│   ├── search.html / .js      # Real-time search engine
│   ├── cart.html / .js        # Cart & multi-step checkout
│   ├── account.html / .js     # User profile, orders & admin view
│   └── style.css              # Universal responsive design system
├── routes/                    # API Route Handlers (Auth, Products, Orders, Wishlist)
├── .env.example               # Safe environment configuration template
├── package.json               # Dependencies & scripts
├── seedProducts.js            # Database seeder script
└── server.js                  # Application entry point
```
</details>

---

## 📄 License

This project is open-source under the **ISC License**.

<div align="center">
  <sub>Built with ❤️ by <b>Aakriti Gupta</b></sub>
</div>
