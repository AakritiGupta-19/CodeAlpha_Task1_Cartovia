// Comprehensive Catalog: 100 products per category (Total: 900)
const products = [
  {
    "_id": "6aa3e8408db3804f79e2000001",
    "name": "Classic Cotton Regular Crewneck T-Shirt",
    "price": 349,
    "description": "High-grade cotton regular crewneck t-shirt featuring classic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000002",
    "name": "Urban Heavyweight Fleece Oversized Hoodie",
    "price": 1186,
    "description": "High-grade heavyweight fleece oversized hoodie featuring urban craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000003",
    "name": "Vintage Vintage Denim Trucker Jacket",
    "price": 1823,
    "description": "High-grade vintage denim trucker jacket featuring vintage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000004",
    "name": "Modern Modern Slim Fit Stretch Jeans",
    "price": 1460,
    "description": "High-grade modern slim fit stretch jeans featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000005",
    "name": "Relaxed Breathable Casual Linen Resort Shirt",
    "price": 997,
    "description": "High-grade breathable casual linen resort shirt featuring relaxed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000006",
    "name": "Slim-Fit Premium Pique Polo Collar Shirt",
    "price": 884,
    "description": "High-grade premium pique polo collar shirt featuring slim-fit craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000007",
    "name": "Organic Urban Tapered Utility Cargo Joggers",
    "price": 1171,
    "description": "High-grade urban tapered utility cargo joggers featuring organic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000008",
    "name": "Streetwear All-Weather Waterproof Windbreaker",
    "price": 1808,
    "description": "High-grade all-weather waterproof windbreaker featuring streetwear craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000009",
    "name": "Athletic Chunky Knit Cable Winter Sweater",
    "price": 1745,
    "description": "High-grade chunky knit cable winter sweater featuring athletic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200000a",
    "name": "Casual Nautical Striped Sailor Cotton Tee",
    "price": 532,
    "description": "High-grade nautical striped sailor cotton tee featuring casual craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200000b",
    "name": "Breezy Formal Tailored Chino Trousers",
    "price": 1319,
    "description": "High-grade formal tailored chino trousers featuring breezy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200000c",
    "name": "Cozy Feminine Floral Summer Wrap Dress",
    "price": 1256,
    "description": "High-grade feminine floral summer wrap dress featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200000d",
    "name": "Tailored Cotton Regular Crewneck T-Shirt Edition 2",
    "price": 493,
    "description": "High-grade cotton regular crewneck t-shirt featuring tailored craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200000e",
    "name": "Comfort Heavyweight Fleece Oversized Hoodie Edition 2",
    "price": 1330,
    "description": "High-grade heavyweight fleece oversized hoodie featuring comfort craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200000f",
    "name": "Essential Vintage Denim Trucker Jacket Edition 2",
    "price": 1967,
    "description": "High-grade vintage denim trucker jacket featuring essential craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000010",
    "name": "Classic Modern Slim Fit Stretch Jeans Edition 2",
    "price": 1604,
    "description": "High-grade modern slim fit stretch jeans featuring classic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000011",
    "name": "Urban Breathable Casual Linen Resort Shirt Edition 2",
    "price": 1141,
    "description": "High-grade breathable casual linen resort shirt featuring urban craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000012",
    "name": "Vintage Premium Pique Polo Collar Shirt Edition 2",
    "price": 728,
    "description": "High-grade premium pique polo collar shirt featuring vintage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000013",
    "name": "Modern Urban Tapered Utility Cargo Joggers Edition 2",
    "price": 1015,
    "description": "High-grade urban tapered utility cargo joggers featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000014",
    "name": "Relaxed All-Weather Waterproof Windbreaker Edition 2",
    "price": 1652,
    "description": "High-grade all-weather waterproof windbreaker featuring relaxed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000015",
    "name": "Slim-Fit Chunky Knit Cable Winter Sweater Edition 2",
    "price": 1589,
    "description": "High-grade chunky knit cable winter sweater featuring slim-fit craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000016",
    "name": "Organic Nautical Striped Sailor Cotton Tee Edition 2",
    "price": 676,
    "description": "High-grade nautical striped sailor cotton tee featuring organic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000017",
    "name": "Streetwear Formal Tailored Chino Trousers Edition 2",
    "price": 1463,
    "description": "High-grade formal tailored chino trousers featuring streetwear craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000018",
    "name": "Athletic Feminine Floral Summer Wrap Dress Edition 2",
    "price": 1400,
    "description": "High-grade feminine floral summer wrap dress featuring athletic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000019",
    "name": "Casual Cotton Regular Crewneck T-Shirt Edition 3",
    "price": 637,
    "description": "High-grade cotton regular crewneck t-shirt featuring casual craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200001a",
    "name": "Breezy Heavyweight Fleece Oversized Hoodie Edition 3",
    "price": 1174,
    "description": "High-grade heavyweight fleece oversized hoodie featuring breezy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200001b",
    "name": "Cozy Vintage Denim Trucker Jacket Edition 3",
    "price": 1811,
    "description": "High-grade vintage denim trucker jacket featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200001c",
    "name": "Tailored Modern Slim Fit Stretch Jeans Edition 3",
    "price": 1448,
    "description": "High-grade modern slim fit stretch jeans featuring tailored craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200001d",
    "name": "Comfort Breathable Casual Linen Resort Shirt Edition 3",
    "price": 985,
    "description": "High-grade breathable casual linen resort shirt featuring comfort craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200001e",
    "name": "Essential Premium Pique Polo Collar Shirt Edition 3",
    "price": 872,
    "description": "High-grade premium pique polo collar shirt featuring essential craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200001f",
    "name": "Classic Urban Tapered Utility Cargo Joggers Edition 3",
    "price": 1159,
    "description": "High-grade urban tapered utility cargo joggers featuring classic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000020",
    "name": "Urban All-Weather Waterproof Windbreaker Edition 3",
    "price": 1796,
    "description": "High-grade all-weather waterproof windbreaker featuring urban craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000021",
    "name": "Vintage Chunky Knit Cable Winter Sweater Edition 3",
    "price": 1733,
    "description": "High-grade chunky knit cable winter sweater featuring vintage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000022",
    "name": "Modern Nautical Striped Sailor Cotton Tee Edition 3",
    "price": 520,
    "description": "High-grade nautical striped sailor cotton tee featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000023",
    "name": "Relaxed Formal Tailored Chino Trousers Edition 3",
    "price": 1307,
    "description": "High-grade formal tailored chino trousers featuring relaxed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000024",
    "name": "Slim-Fit Feminine Floral Summer Wrap Dress Edition 3",
    "price": 1244,
    "description": "High-grade feminine floral summer wrap dress featuring slim-fit craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000025",
    "name": "Organic Cotton Regular Crewneck T-Shirt Edition 4",
    "price": 481,
    "description": "High-grade cotton regular crewneck t-shirt featuring organic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000026",
    "name": "Streetwear Heavyweight Fleece Oversized Hoodie Edition 4",
    "price": 1318,
    "description": "High-grade heavyweight fleece oversized hoodie featuring streetwear craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000027",
    "name": "Athletic Vintage Denim Trucker Jacket Edition 4",
    "price": 1955,
    "description": "High-grade vintage denim trucker jacket featuring athletic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000028",
    "name": "Casual Modern Slim Fit Stretch Jeans Edition 4",
    "price": 1592,
    "description": "High-grade modern slim fit stretch jeans featuring casual craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000029",
    "name": "Breezy Breathable Casual Linen Resort Shirt Edition 4",
    "price": 1129,
    "description": "High-grade breathable casual linen resort shirt featuring breezy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200002a",
    "name": "Cozy Premium Pique Polo Collar Shirt Edition 4",
    "price": 716,
    "description": "High-grade premium pique polo collar shirt featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200002b",
    "name": "Tailored Urban Tapered Utility Cargo Joggers Edition 4",
    "price": 1003,
    "description": "High-grade urban tapered utility cargo joggers featuring tailored craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200002c",
    "name": "Comfort All-Weather Waterproof Windbreaker Edition 4",
    "price": 1640,
    "description": "High-grade all-weather waterproof windbreaker featuring comfort craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200002d",
    "name": "Essential Chunky Knit Cable Winter Sweater Edition 4",
    "price": 1577,
    "description": "High-grade chunky knit cable winter sweater featuring essential craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200002e",
    "name": "Classic Nautical Striped Sailor Cotton Tee Edition 4",
    "price": 664,
    "description": "High-grade nautical striped sailor cotton tee featuring classic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200002f",
    "name": "Urban Formal Tailored Chino Trousers Edition 4",
    "price": 1451,
    "description": "High-grade formal tailored chino trousers featuring urban craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000030",
    "name": "Vintage Feminine Floral Summer Wrap Dress Edition 4",
    "price": 1388,
    "description": "High-grade feminine floral summer wrap dress featuring vintage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000031",
    "name": "Modern Cotton Regular Crewneck T-Shirt Edition 5",
    "price": 625,
    "description": "High-grade cotton regular crewneck t-shirt featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000032",
    "name": "Relaxed Heavyweight Fleece Oversized Hoodie Edition 5",
    "price": 1162,
    "description": "High-grade heavyweight fleece oversized hoodie featuring relaxed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000033",
    "name": "Slim-Fit Vintage Denim Trucker Jacket Edition 5",
    "price": 1799,
    "description": "High-grade vintage denim trucker jacket featuring slim-fit craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000034",
    "name": "Organic Modern Slim Fit Stretch Jeans Edition 5",
    "price": 1436,
    "description": "High-grade modern slim fit stretch jeans featuring organic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000035",
    "name": "Streetwear Breathable Casual Linen Resort Shirt Edition 5",
    "price": 973,
    "description": "High-grade breathable casual linen resort shirt featuring streetwear craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000036",
    "name": "Athletic Premium Pique Polo Collar Shirt Edition 5",
    "price": 860,
    "description": "High-grade premium pique polo collar shirt featuring athletic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000037",
    "name": "Casual Urban Tapered Utility Cargo Joggers Edition 5",
    "price": 1147,
    "description": "High-grade urban tapered utility cargo joggers featuring casual craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000038",
    "name": "Breezy All-Weather Waterproof Windbreaker Edition 5",
    "price": 1784,
    "description": "High-grade all-weather waterproof windbreaker featuring breezy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000039",
    "name": "Cozy Chunky Knit Cable Winter Sweater Edition 5",
    "price": 1721,
    "description": "High-grade chunky knit cable winter sweater featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200003a",
    "name": "Tailored Nautical Striped Sailor Cotton Tee Edition 5",
    "price": 508,
    "description": "High-grade nautical striped sailor cotton tee featuring tailored craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200003b",
    "name": "Comfort Formal Tailored Chino Trousers Edition 5",
    "price": 1295,
    "description": "High-grade formal tailored chino trousers featuring comfort craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200003c",
    "name": "Essential Feminine Floral Summer Wrap Dress Edition 5",
    "price": 1232,
    "description": "High-grade feminine floral summer wrap dress featuring essential craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200003d",
    "name": "Classic Cotton Regular Crewneck T-Shirt Edition 6",
    "price": 469,
    "description": "High-grade cotton regular crewneck t-shirt featuring classic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200003e",
    "name": "Urban Heavyweight Fleece Oversized Hoodie Edition 6",
    "price": 1306,
    "description": "High-grade heavyweight fleece oversized hoodie featuring urban craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200003f",
    "name": "Vintage Vintage Denim Trucker Jacket Edition 6",
    "price": 1943,
    "description": "High-grade vintage denim trucker jacket featuring vintage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000040",
    "name": "Modern Modern Slim Fit Stretch Jeans Edition 6",
    "price": 1580,
    "description": "High-grade modern slim fit stretch jeans featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000041",
    "name": "Relaxed Breathable Casual Linen Resort Shirt Edition 6",
    "price": 1117,
    "description": "High-grade breathable casual linen resort shirt featuring relaxed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000042",
    "name": "Slim-Fit Premium Pique Polo Collar Shirt Edition 6",
    "price": 704,
    "description": "High-grade premium pique polo collar shirt featuring slim-fit craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000043",
    "name": "Organic Urban Tapered Utility Cargo Joggers Edition 6",
    "price": 991,
    "description": "High-grade urban tapered utility cargo joggers featuring organic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000044",
    "name": "Streetwear All-Weather Waterproof Windbreaker Edition 6",
    "price": 1628,
    "description": "High-grade all-weather waterproof windbreaker featuring streetwear craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000045",
    "name": "Athletic Chunky Knit Cable Winter Sweater Edition 6",
    "price": 1565,
    "description": "High-grade chunky knit cable winter sweater featuring athletic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000046",
    "name": "Casual Nautical Striped Sailor Cotton Tee Edition 6",
    "price": 652,
    "description": "High-grade nautical striped sailor cotton tee featuring casual craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000047",
    "name": "Breezy Formal Tailored Chino Trousers Edition 6",
    "price": 1439,
    "description": "High-grade formal tailored chino trousers featuring breezy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000048",
    "name": "Cozy Feminine Floral Summer Wrap Dress Edition 6",
    "price": 1376,
    "description": "High-grade feminine floral summer wrap dress featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000049",
    "name": "Tailored Cotton Regular Crewneck T-Shirt Edition 7",
    "price": 613,
    "description": "High-grade cotton regular crewneck t-shirt featuring tailored craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200004a",
    "name": "Comfort Heavyweight Fleece Oversized Hoodie Edition 7",
    "price": 1150,
    "description": "High-grade heavyweight fleece oversized hoodie featuring comfort craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200004b",
    "name": "Essential Vintage Denim Trucker Jacket Edition 7",
    "price": 1787,
    "description": "High-grade vintage denim trucker jacket featuring essential craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200004c",
    "name": "Classic Modern Slim Fit Stretch Jeans Edition 7",
    "price": 1424,
    "description": "High-grade modern slim fit stretch jeans featuring classic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200004d",
    "name": "Urban Breathable Casual Linen Resort Shirt Edition 7",
    "price": 961,
    "description": "High-grade breathable casual linen resort shirt featuring urban craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200004e",
    "name": "Vintage Premium Pique Polo Collar Shirt Edition 7",
    "price": 848,
    "description": "High-grade premium pique polo collar shirt featuring vintage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200004f",
    "name": "Modern Urban Tapered Utility Cargo Joggers Edition 7",
    "price": 1135,
    "description": "High-grade urban tapered utility cargo joggers featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000050",
    "name": "Relaxed All-Weather Waterproof Windbreaker Edition 7",
    "price": 1772,
    "description": "High-grade all-weather waterproof windbreaker featuring relaxed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000051",
    "name": "Slim-Fit Chunky Knit Cable Winter Sweater Edition 7",
    "price": 1709,
    "description": "High-grade chunky knit cable winter sweater featuring slim-fit craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000052",
    "name": "Organic Nautical Striped Sailor Cotton Tee Edition 7",
    "price": 796,
    "description": "High-grade nautical striped sailor cotton tee featuring organic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000053",
    "name": "Streetwear Formal Tailored Chino Trousers Edition 7",
    "price": 1283,
    "description": "High-grade formal tailored chino trousers featuring streetwear craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000054",
    "name": "Athletic Feminine Floral Summer Wrap Dress Edition 7",
    "price": 1220,
    "description": "High-grade feminine floral summer wrap dress featuring athletic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000055",
    "name": "Casual Cotton Regular Crewneck T-Shirt Edition 8",
    "price": 457,
    "description": "High-grade cotton regular crewneck t-shirt featuring casual craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000056",
    "name": "Breezy Heavyweight Fleece Oversized Hoodie Edition 8",
    "price": 1294,
    "description": "High-grade heavyweight fleece oversized hoodie featuring breezy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000057",
    "name": "Cozy Vintage Denim Trucker Jacket Edition 8",
    "price": 1931,
    "description": "High-grade vintage denim trucker jacket featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000058",
    "name": "Tailored Modern Slim Fit Stretch Jeans Edition 8",
    "price": 1568,
    "description": "High-grade modern slim fit stretch jeans featuring tailored craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000059",
    "name": "Comfort Breathable Casual Linen Resort Shirt Edition 8",
    "price": 1105,
    "description": "High-grade breathable casual linen resort shirt featuring comfort craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200005a",
    "name": "Essential Premium Pique Polo Collar Shirt Edition 8",
    "price": 992,
    "description": "High-grade premium pique polo collar shirt featuring essential craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200005b",
    "name": "Classic Urban Tapered Utility Cargo Joggers Edition 8",
    "price": 979,
    "description": "High-grade urban tapered utility cargo joggers featuring classic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200005c",
    "name": "Urban All-Weather Waterproof Windbreaker Edition 8",
    "price": 1616,
    "description": "High-grade all-weather waterproof windbreaker featuring urban craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200005d",
    "name": "Vintage Chunky Knit Cable Winter Sweater Edition 8",
    "price": 1553,
    "description": "High-grade chunky knit cable winter sweater featuring vintage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200005e",
    "name": "Modern Nautical Striped Sailor Cotton Tee Edition 8",
    "price": 640,
    "description": "High-grade nautical striped sailor cotton tee featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200005f",
    "name": "Relaxed Formal Tailored Chino Trousers Edition 8",
    "price": 1427,
    "description": "High-grade formal tailored chino trousers featuring relaxed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000060",
    "name": "Slim-Fit Feminine Floral Summer Wrap Dress Edition 8",
    "price": 1364,
    "description": "High-grade feminine floral summer wrap dress featuring slim-fit craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000061",
    "name": "Organic Cotton Regular Crewneck T-Shirt Edition 9",
    "price": 601,
    "description": "High-grade cotton regular crewneck t-shirt featuring organic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000062",
    "name": "Streetwear Heavyweight Fleece Oversized Hoodie Edition 9",
    "price": 1438,
    "description": "High-grade heavyweight fleece oversized hoodie featuring streetwear craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000063",
    "name": "Athletic Vintage Denim Trucker Jacket Edition 9",
    "price": 1775,
    "description": "High-grade vintage denim trucker jacket featuring athletic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000064",
    "name": "Casual Modern Slim Fit Stretch Jeans Edition 9",
    "price": 1412,
    "description": "High-grade modern slim fit stretch jeans featuring casual craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    "category": "Clothing",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000065",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes",
    "price": 2049,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000066",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers",
    "price": 1686,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000067",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes",
    "price": 2423,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000068",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes",
    "price": 1460,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000069",
    "name": "Shoes - Cushioned Vintage Court High-Top Canvas Sneakers",
    "price": 1297,
    "description": "High-grade vintage court high-top canvas sneakers featuring cushioned craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200006a",
    "name": "Shoes - Flexible Handcrafted Genuine Leather Penny Loafers",
    "price": 2334,
    "description": "High-grade handcrafted genuine leather penny loafers featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200006b",
    "name": "Shoes - Rugged Air Cushion High-Performance Basketball Shoes",
    "price": 2871,
    "description": "High-grade air cushion high-performance basketball shoes featuring rugged craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b661ac?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200006c",
    "name": "Shoes - All-Day Formal Wingtip Brogue Oxford Dress Shoes",
    "price": 2208,
    "description": "High-grade formal wingtip brogue oxford dress shoes featuring all-day craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200006d",
    "name": "Shoes - Waterproof Breathable Knit Sock-Fit Slip-On Shoes",
    "price": 1345,
    "description": "High-grade breathable knit sock-fit slip-on shoes featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200006e",
    "name": "Shoes - Breathable Suede Ankle Desert Chukka Boots",
    "price": 2282,
    "description": "High-grade suede ankle desert chukka boots featuring breathable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200006f",
    "name": "Shoes - Speed Molded Arch Support Comfort Slides",
    "price": 619,
    "description": "High-grade molded arch support comfort slides featuring speed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000070",
    "name": "Shoes - Padded Reinforced Grip Urban Skate Shoes",
    "price": 1656,
    "description": "High-grade reinforced grip urban skate shoes featuring padded craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000071",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes Edition 2",
    "price": 2193,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000072",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers Edition 2",
    "price": 1830,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000073",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes Edition 2",
    "price": 2567,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000074",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes Edition 2",
    "price": 1604,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000075",
    "name": "Shoes - Cushioned Vintage Court High-Top Canvas Sneakers Edition 2",
    "price": 1441,
    "description": "High-grade vintage court high-top canvas sneakers featuring cushioned craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000076",
    "name": "Shoes - Flexible Handcrafted Genuine Leather Penny Loafers Edition 2",
    "price": 2178,
    "description": "High-grade handcrafted genuine leather penny loafers featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000077",
    "name": "Shoes - Rugged Air Cushion High-Performance Basketball Shoes Edition 2",
    "price": 2715,
    "description": "High-grade air cushion high-performance basketball shoes featuring rugged craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b661ac?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000078",
    "name": "Shoes - All-Day Formal Wingtip Brogue Oxford Dress Shoes Edition 2",
    "price": 2052,
    "description": "High-grade formal wingtip brogue oxford dress shoes featuring all-day craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000079",
    "name": "Shoes - Waterproof Breathable Knit Sock-Fit Slip-On Shoes Edition 2",
    "price": 1189,
    "description": "High-grade breathable knit sock-fit slip-on shoes featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200007a",
    "name": "Shoes - Breathable Suede Ankle Desert Chukka Boots Edition 2",
    "price": 2426,
    "description": "High-grade suede ankle desert chukka boots featuring breathable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200007b",
    "name": "Shoes - Speed Molded Arch Support Comfort Slides Edition 2",
    "price": 763,
    "description": "High-grade molded arch support comfort slides featuring speed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200007c",
    "name": "Shoes - Padded Reinforced Grip Urban Skate Shoes Edition 2",
    "price": 1800,
    "description": "High-grade reinforced grip urban skate shoes featuring padded craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200007d",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes Edition 3",
    "price": 2337,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200007e",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers Edition 3",
    "price": 1674,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200007f",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes Edition 3",
    "price": 2411,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000080",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes Edition 3",
    "price": 1448,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000081",
    "name": "Shoes - Cushioned Vintage Court High-Top Canvas Sneakers Edition 3",
    "price": 1285,
    "description": "High-grade vintage court high-top canvas sneakers featuring cushioned craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000082",
    "name": "Shoes - Flexible Handcrafted Genuine Leather Penny Loafers Edition 3",
    "price": 2322,
    "description": "High-grade handcrafted genuine leather penny loafers featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000083",
    "name": "Shoes - Rugged Air Cushion High-Performance Basketball Shoes Edition 3",
    "price": 2859,
    "description": "High-grade air cushion high-performance basketball shoes featuring rugged craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b661ac?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000084",
    "name": "Shoes - All-Day Formal Wingtip Brogue Oxford Dress Shoes Edition 3",
    "price": 2196,
    "description": "High-grade formal wingtip brogue oxford dress shoes featuring all-day craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000085",
    "name": "Shoes - Waterproof Breathable Knit Sock-Fit Slip-On Shoes Edition 3",
    "price": 1333,
    "description": "High-grade breathable knit sock-fit slip-on shoes featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000086",
    "name": "Shoes - Breathable Suede Ankle Desert Chukka Boots Edition 3",
    "price": 2270,
    "description": "High-grade suede ankle desert chukka boots featuring breathable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000087",
    "name": "Shoes - Speed Molded Arch Support Comfort Slides Edition 3",
    "price": 607,
    "description": "High-grade molded arch support comfort slides featuring speed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000088",
    "name": "Shoes - Padded Reinforced Grip Urban Skate Shoes Edition 3",
    "price": 1644,
    "description": "High-grade reinforced grip urban skate shoes featuring padded craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000089",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes Edition 4",
    "price": 2181,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200008a",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers Edition 4",
    "price": 1818,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200008b",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes Edition 4",
    "price": 2555,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200008c",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes Edition 4",
    "price": 1592,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200008d",
    "name": "Shoes - Cushioned Vintage Court High-Top Canvas Sneakers Edition 4",
    "price": 1429,
    "description": "High-grade vintage court high-top canvas sneakers featuring cushioned craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200008e",
    "name": "Shoes - Flexible Handcrafted Genuine Leather Penny Loafers Edition 4",
    "price": 2166,
    "description": "High-grade handcrafted genuine leather penny loafers featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200008f",
    "name": "Shoes - Rugged Air Cushion High-Performance Basketball Shoes Edition 4",
    "price": 2703,
    "description": "High-grade air cushion high-performance basketball shoes featuring rugged craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b661ac?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000090",
    "name": "Shoes - All-Day Formal Wingtip Brogue Oxford Dress Shoes Edition 4",
    "price": 2040,
    "description": "High-grade formal wingtip brogue oxford dress shoes featuring all-day craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000091",
    "name": "Shoes - Waterproof Breathable Knit Sock-Fit Slip-On Shoes Edition 4",
    "price": 1177,
    "description": "High-grade breathable knit sock-fit slip-on shoes featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000092",
    "name": "Shoes - Breathable Suede Ankle Desert Chukka Boots Edition 4",
    "price": 2414,
    "description": "High-grade suede ankle desert chukka boots featuring breathable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000093",
    "name": "Shoes - Speed Molded Arch Support Comfort Slides Edition 4",
    "price": 751,
    "description": "High-grade molded arch support comfort slides featuring speed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000094",
    "name": "Shoes - Padded Reinforced Grip Urban Skate Shoes Edition 4",
    "price": 1788,
    "description": "High-grade reinforced grip urban skate shoes featuring padded craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000095",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes Edition 5",
    "price": 2325,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000096",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers Edition 5",
    "price": 1662,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000097",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes Edition 5",
    "price": 2399,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000098",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes Edition 5",
    "price": 1436,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000099",
    "name": "Shoes - Cushioned Vintage Court High-Top Canvas Sneakers Edition 5",
    "price": 1273,
    "description": "High-grade vintage court high-top canvas sneakers featuring cushioned craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200009a",
    "name": "Shoes - Flexible Handcrafted Genuine Leather Penny Loafers Edition 5",
    "price": 2310,
    "description": "High-grade handcrafted genuine leather penny loafers featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200009b",
    "name": "Shoes - Rugged Air Cushion High-Performance Basketball Shoes Edition 5",
    "price": 2847,
    "description": "High-grade air cushion high-performance basketball shoes featuring rugged craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b661ac?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200009c",
    "name": "Shoes - All-Day Formal Wingtip Brogue Oxford Dress Shoes Edition 5",
    "price": 2184,
    "description": "High-grade formal wingtip brogue oxford dress shoes featuring all-day craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200009d",
    "name": "Shoes - Waterproof Breathable Knit Sock-Fit Slip-On Shoes Edition 5",
    "price": 1321,
    "description": "High-grade breathable knit sock-fit slip-on shoes featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200009e",
    "name": "Shoes - Breathable Suede Ankle Desert Chukka Boots Edition 5",
    "price": 2258,
    "description": "High-grade suede ankle desert chukka boots featuring breathable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200009f",
    "name": "Shoes - Speed Molded Arch Support Comfort Slides Edition 5",
    "price": 595,
    "description": "High-grade molded arch support comfort slides featuring speed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000a0",
    "name": "Shoes - Padded Reinforced Grip Urban Skate Shoes Edition 5",
    "price": 1632,
    "description": "High-grade reinforced grip urban skate shoes featuring padded craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000a1",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes Edition 6",
    "price": 2169,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000a2",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers Edition 6",
    "price": 1806,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000a3",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes Edition 6",
    "price": 2543,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000a4",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes Edition 6",
    "price": 1580,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000a5",
    "name": "Shoes - Cushioned Vintage Court High-Top Canvas Sneakers Edition 6",
    "price": 1417,
    "description": "High-grade vintage court high-top canvas sneakers featuring cushioned craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000a6",
    "name": "Shoes - Flexible Handcrafted Genuine Leather Penny Loafers Edition 6",
    "price": 2154,
    "description": "High-grade handcrafted genuine leather penny loafers featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000a7",
    "name": "Shoes - Rugged Air Cushion High-Performance Basketball Shoes Edition 6",
    "price": 2691,
    "description": "High-grade air cushion high-performance basketball shoes featuring rugged craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b661ac?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000a8",
    "name": "Shoes - All-Day Formal Wingtip Brogue Oxford Dress Shoes Edition 6",
    "price": 2028,
    "description": "High-grade formal wingtip brogue oxford dress shoes featuring all-day craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000a9",
    "name": "Shoes - Waterproof Breathable Knit Sock-Fit Slip-On Shoes Edition 6",
    "price": 1165,
    "description": "High-grade breathable knit sock-fit slip-on shoes featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000aa",
    "name": "Shoes - Breathable Suede Ankle Desert Chukka Boots Edition 6",
    "price": 2402,
    "description": "High-grade suede ankle desert chukka boots featuring breathable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000ab",
    "name": "Shoes - Speed Molded Arch Support Comfort Slides Edition 6",
    "price": 739,
    "description": "High-grade molded arch support comfort slides featuring speed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000ac",
    "name": "Shoes - Padded Reinforced Grip Urban Skate Shoes Edition 6",
    "price": 1776,
    "description": "High-grade reinforced grip urban skate shoes featuring padded craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000ad",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes Edition 7",
    "price": 2313,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000ae",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers Edition 7",
    "price": 1650,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000af",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes Edition 7",
    "price": 2387,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000b0",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes Edition 7",
    "price": 1424,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000b1",
    "name": "Shoes - Cushioned Vintage Court High-Top Canvas Sneakers Edition 7",
    "price": 1261,
    "description": "High-grade vintage court high-top canvas sneakers featuring cushioned craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000b2",
    "name": "Shoes - Flexible Handcrafted Genuine Leather Penny Loafers Edition 7",
    "price": 2298,
    "description": "High-grade handcrafted genuine leather penny loafers featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000b3",
    "name": "Shoes - Rugged Air Cushion High-Performance Basketball Shoes Edition 7",
    "price": 2835,
    "description": "High-grade air cushion high-performance basketball shoes featuring rugged craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b661ac?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000b4",
    "name": "Shoes - All-Day Formal Wingtip Brogue Oxford Dress Shoes Edition 7",
    "price": 2172,
    "description": "High-grade formal wingtip brogue oxford dress shoes featuring all-day craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000b5",
    "name": "Shoes - Waterproof Breathable Knit Sock-Fit Slip-On Shoes Edition 7",
    "price": 1309,
    "description": "High-grade breathable knit sock-fit slip-on shoes featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000b6",
    "name": "Shoes - Breathable Suede Ankle Desert Chukka Boots Edition 7",
    "price": 2546,
    "description": "High-grade suede ankle desert chukka boots featuring breathable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000b7",
    "name": "Shoes - Speed Molded Arch Support Comfort Slides Edition 7",
    "price": 583,
    "description": "High-grade molded arch support comfort slides featuring speed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000b8",
    "name": "Shoes - Padded Reinforced Grip Urban Skate Shoes Edition 7",
    "price": 1620,
    "description": "High-grade reinforced grip urban skate shoes featuring padded craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000b9",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes Edition 8",
    "price": 2157,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000ba",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers Edition 8",
    "price": 1794,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000bb",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes Edition 8",
    "price": 2531,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000bc",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes Edition 8",
    "price": 1568,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000bd",
    "name": "Shoes - Cushioned Vintage Court High-Top Canvas Sneakers Edition 8",
    "price": 1405,
    "description": "High-grade vintage court high-top canvas sneakers featuring cushioned craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000be",
    "name": "Shoes - Flexible Handcrafted Genuine Leather Penny Loafers Edition 8",
    "price": 2442,
    "description": "High-grade handcrafted genuine leather penny loafers featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000bf",
    "name": "Shoes - Rugged Air Cushion High-Performance Basketball Shoes Edition 8",
    "price": 2679,
    "description": "High-grade air cushion high-performance basketball shoes featuring rugged craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512374382149-233c42b661ac?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000c0",
    "name": "Shoes - All-Day Formal Wingtip Brogue Oxford Dress Shoes Edition 8",
    "price": 2016,
    "description": "High-grade formal wingtip brogue oxford dress shoes featuring all-day craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000c1",
    "name": "Shoes - Waterproof Breathable Knit Sock-Fit Slip-On Shoes Edition 8",
    "price": 1153,
    "description": "High-grade breathable knit sock-fit slip-on shoes featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000c2",
    "name": "Shoes - Breathable Suede Ankle Desert Chukka Boots Edition 8",
    "price": 2390,
    "description": "High-grade suede ankle desert chukka boots featuring breathable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000c3",
    "name": "Shoes - Speed Molded Arch Support Comfort Slides Edition 8",
    "price": 727,
    "description": "High-grade molded arch support comfort slides featuring speed craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000c4",
    "name": "Shoes - Padded Reinforced Grip Urban Skate Shoes Edition 8",
    "price": 1764,
    "description": "High-grade reinforced grip urban skate shoes featuring padded craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000c5",
    "name": "Shoes - Aerodynamic Pro Marathon Athletic Running Shoes Edition 9",
    "price": 2301,
    "description": "High-grade pro marathon athletic running shoes featuring aerodynamic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000c6",
    "name": "Shoes - Lightweight Classic Low-Top White Leather Sneakers Edition 9",
    "price": 1938,
    "description": "High-grade classic low-top white leather sneakers featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000c7",
    "name": "Shoes - High-Traction Trail Outdoor High-Traction Shoes Edition 9",
    "price": 2375,
    "description": "High-grade trail outdoor high-traction shoes featuring high-traction craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000c8",
    "name": "Shoes - Responsive CloudFoam Slip-On Everyday Walking Shoes Edition 9",
    "price": 1412,
    "description": "High-grade cloudfoam slip-on everyday walking shoes featuring responsive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    "category": "Shoes",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000c9",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch",
    "price": 2849,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000ca",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch",
    "price": 1786,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000cb",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch",
    "price": 2423,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000cc",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch",
    "price": 1460,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000cd",
    "name": "Watches - Waterproof Black Matte Stainless Steel Dress Watch",
    "price": 2197,
    "description": "High-grade black matte stainless steel dress watch featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000ce",
    "name": "Watches - Slim-Profile Luxury Automatic Skeleton Mechanical Watch",
    "price": 3534,
    "description": "High-grade luxury automatic skeleton mechanical watch featuring slim-profile craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1547996160-71dfabb17282?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000cf",
    "name": "Watches - Luxury Slim Fitness Activity Tracker Band",
    "price": 1371,
    "description": "High-grade slim fitness activity tracker band featuring luxury craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000d0",
    "name": "Watches - Titanium Retro Square Silver Case Quartz Watch",
    "price": 1808,
    "description": "High-grade retro square silver case quartz watch featuring titanium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000d1",
    "name": "Watches - Precision Deep Sea Rotating Diver Bezel Watch",
    "price": 2845,
    "description": "High-grade deep sea rotating diver bezel watch featuring precision craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000d2",
    "name": "Watches - Sport Handcrafted Natural Sandalwood Watch",
    "price": 1682,
    "description": "High-grade handcrafted natural sandalwood watch featuring sport craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000d3",
    "name": "Watches - Heritage Mother of Pearl Shimmering Dial Watch",
    "price": 1919,
    "description": "High-grade mother of pearl shimmering dial watch featuring heritage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000d4",
    "name": "Watches - Analog-Digital Aerospace Titanium Sport Chrono Watch",
    "price": 3156,
    "description": "High-grade aerospace titanium sport chrono watch featuring analog-digital craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000d5",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch Edition 2",
    "price": 2993,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000d6",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch Edition 2",
    "price": 1930,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000d7",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch Edition 2",
    "price": 2567,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000d8",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch Edition 2",
    "price": 1604,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000d9",
    "name": "Watches - Waterproof Black Matte Stainless Steel Dress Watch Edition 2",
    "price": 2341,
    "description": "High-grade black matte stainless steel dress watch featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000da",
    "name": "Watches - Slim-Profile Luxury Automatic Skeleton Mechanical Watch Edition 2",
    "price": 3378,
    "description": "High-grade luxury automatic skeleton mechanical watch featuring slim-profile craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1547996160-71dfabb17282?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000db",
    "name": "Watches - Luxury Slim Fitness Activity Tracker Band Edition 2",
    "price": 1215,
    "description": "High-grade slim fitness activity tracker band featuring luxury craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000dc",
    "name": "Watches - Titanium Retro Square Silver Case Quartz Watch Edition 2",
    "price": 1652,
    "description": "High-grade retro square silver case quartz watch featuring titanium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000dd",
    "name": "Watches - Precision Deep Sea Rotating Diver Bezel Watch Edition 2",
    "price": 2689,
    "description": "High-grade deep sea rotating diver bezel watch featuring precision craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000de",
    "name": "Watches - Sport Handcrafted Natural Sandalwood Watch Edition 2",
    "price": 1826,
    "description": "High-grade handcrafted natural sandalwood watch featuring sport craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000df",
    "name": "Watches - Heritage Mother of Pearl Shimmering Dial Watch Edition 2",
    "price": 2063,
    "description": "High-grade mother of pearl shimmering dial watch featuring heritage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000e0",
    "name": "Watches - Analog-Digital Aerospace Titanium Sport Chrono Watch Edition 2",
    "price": 3300,
    "description": "High-grade aerospace titanium sport chrono watch featuring analog-digital craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000e1",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch Edition 3",
    "price": 3137,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000e2",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch Edition 3",
    "price": 1774,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000e3",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch Edition 3",
    "price": 2411,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000e4",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch Edition 3",
    "price": 1448,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000e5",
    "name": "Watches - Waterproof Black Matte Stainless Steel Dress Watch Edition 3",
    "price": 2185,
    "description": "High-grade black matte stainless steel dress watch featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000e6",
    "name": "Watches - Slim-Profile Luxury Automatic Skeleton Mechanical Watch Edition 3",
    "price": 3522,
    "description": "High-grade luxury automatic skeleton mechanical watch featuring slim-profile craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1547996160-71dfabb17282?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000e7",
    "name": "Watches - Luxury Slim Fitness Activity Tracker Band Edition 3",
    "price": 1359,
    "description": "High-grade slim fitness activity tracker band featuring luxury craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000e8",
    "name": "Watches - Titanium Retro Square Silver Case Quartz Watch Edition 3",
    "price": 1796,
    "description": "High-grade retro square silver case quartz watch featuring titanium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000e9",
    "name": "Watches - Precision Deep Sea Rotating Diver Bezel Watch Edition 3",
    "price": 2833,
    "description": "High-grade deep sea rotating diver bezel watch featuring precision craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000ea",
    "name": "Watches - Sport Handcrafted Natural Sandalwood Watch Edition 3",
    "price": 1670,
    "description": "High-grade handcrafted natural sandalwood watch featuring sport craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000eb",
    "name": "Watches - Heritage Mother of Pearl Shimmering Dial Watch Edition 3",
    "price": 1907,
    "description": "High-grade mother of pearl shimmering dial watch featuring heritage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000ec",
    "name": "Watches - Analog-Digital Aerospace Titanium Sport Chrono Watch Edition 3",
    "price": 3144,
    "description": "High-grade aerospace titanium sport chrono watch featuring analog-digital craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000ed",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch Edition 4",
    "price": 2981,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000ee",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch Edition 4",
    "price": 1918,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000ef",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch Edition 4",
    "price": 2555,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000f0",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch Edition 4",
    "price": 1592,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000f1",
    "name": "Watches - Waterproof Black Matte Stainless Steel Dress Watch Edition 4",
    "price": 2329,
    "description": "High-grade black matte stainless steel dress watch featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000f2",
    "name": "Watches - Slim-Profile Luxury Automatic Skeleton Mechanical Watch Edition 4",
    "price": 3366,
    "description": "High-grade luxury automatic skeleton mechanical watch featuring slim-profile craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1547996160-71dfabb17282?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000f3",
    "name": "Watches - Luxury Slim Fitness Activity Tracker Band Edition 4",
    "price": 1203,
    "description": "High-grade slim fitness activity tracker band featuring luxury craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000f4",
    "name": "Watches - Titanium Retro Square Silver Case Quartz Watch Edition 4",
    "price": 1640,
    "description": "High-grade retro square silver case quartz watch featuring titanium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000f5",
    "name": "Watches - Precision Deep Sea Rotating Diver Bezel Watch Edition 4",
    "price": 2677,
    "description": "High-grade deep sea rotating diver bezel watch featuring precision craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000f6",
    "name": "Watches - Sport Handcrafted Natural Sandalwood Watch Edition 4",
    "price": 1814,
    "description": "High-grade handcrafted natural sandalwood watch featuring sport craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20000f7",
    "name": "Watches - Heritage Mother of Pearl Shimmering Dial Watch Edition 4",
    "price": 2051,
    "description": "High-grade mother of pearl shimmering dial watch featuring heritage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20000f8",
    "name": "Watches - Analog-Digital Aerospace Titanium Sport Chrono Watch Edition 4",
    "price": 3288,
    "description": "High-grade aerospace titanium sport chrono watch featuring analog-digital craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20000f9",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch Edition 5",
    "price": 3125,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20000fa",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch Edition 5",
    "price": 1762,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20000fb",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch Edition 5",
    "price": 2399,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20000fc",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch Edition 5",
    "price": 1436,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20000fd",
    "name": "Watches - Waterproof Black Matte Stainless Steel Dress Watch Edition 5",
    "price": 2173,
    "description": "High-grade black matte stainless steel dress watch featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20000fe",
    "name": "Watches - Slim-Profile Luxury Automatic Skeleton Mechanical Watch Edition 5",
    "price": 3510,
    "description": "High-grade luxury automatic skeleton mechanical watch featuring slim-profile craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1547996160-71dfabb17282?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20000ff",
    "name": "Watches - Luxury Slim Fitness Activity Tracker Band Edition 5",
    "price": 1347,
    "description": "High-grade slim fitness activity tracker band featuring luxury craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000100",
    "name": "Watches - Titanium Retro Square Silver Case Quartz Watch Edition 5",
    "price": 1784,
    "description": "High-grade retro square silver case quartz watch featuring titanium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000101",
    "name": "Watches - Precision Deep Sea Rotating Diver Bezel Watch Edition 5",
    "price": 2821,
    "description": "High-grade deep sea rotating diver bezel watch featuring precision craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000102",
    "name": "Watches - Sport Handcrafted Natural Sandalwood Watch Edition 5",
    "price": 1658,
    "description": "High-grade handcrafted natural sandalwood watch featuring sport craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000103",
    "name": "Watches - Heritage Mother of Pearl Shimmering Dial Watch Edition 5",
    "price": 1895,
    "description": "High-grade mother of pearl shimmering dial watch featuring heritage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000104",
    "name": "Watches - Analog-Digital Aerospace Titanium Sport Chrono Watch Edition 5",
    "price": 3132,
    "description": "High-grade aerospace titanium sport chrono watch featuring analog-digital craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000105",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch Edition 6",
    "price": 2969,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000106",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch Edition 6",
    "price": 1906,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000107",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch Edition 6",
    "price": 2543,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000108",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch Edition 6",
    "price": 1580,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000109",
    "name": "Watches - Waterproof Black Matte Stainless Steel Dress Watch Edition 6",
    "price": 2317,
    "description": "High-grade black matte stainless steel dress watch featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200010a",
    "name": "Watches - Slim-Profile Luxury Automatic Skeleton Mechanical Watch Edition 6",
    "price": 3354,
    "description": "High-grade luxury automatic skeleton mechanical watch featuring slim-profile craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1547996160-71dfabb17282?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200010b",
    "name": "Watches - Luxury Slim Fitness Activity Tracker Band Edition 6",
    "price": 1191,
    "description": "High-grade slim fitness activity tracker band featuring luxury craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200010c",
    "name": "Watches - Titanium Retro Square Silver Case Quartz Watch Edition 6",
    "price": 1628,
    "description": "High-grade retro square silver case quartz watch featuring titanium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200010d",
    "name": "Watches - Precision Deep Sea Rotating Diver Bezel Watch Edition 6",
    "price": 2665,
    "description": "High-grade deep sea rotating diver bezel watch featuring precision craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200010e",
    "name": "Watches - Sport Handcrafted Natural Sandalwood Watch Edition 6",
    "price": 1802,
    "description": "High-grade handcrafted natural sandalwood watch featuring sport craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200010f",
    "name": "Watches - Heritage Mother of Pearl Shimmering Dial Watch Edition 6",
    "price": 2039,
    "description": "High-grade mother of pearl shimmering dial watch featuring heritage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000110",
    "name": "Watches - Analog-Digital Aerospace Titanium Sport Chrono Watch Edition 6",
    "price": 3276,
    "description": "High-grade aerospace titanium sport chrono watch featuring analog-digital craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000111",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch Edition 7",
    "price": 3113,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000112",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch Edition 7",
    "price": 1750,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000113",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch Edition 7",
    "price": 2387,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000114",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch Edition 7",
    "price": 1424,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000115",
    "name": "Watches - Waterproof Black Matte Stainless Steel Dress Watch Edition 7",
    "price": 2161,
    "description": "High-grade black matte stainless steel dress watch featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000116",
    "name": "Watches - Slim-Profile Luxury Automatic Skeleton Mechanical Watch Edition 7",
    "price": 3498,
    "description": "High-grade luxury automatic skeleton mechanical watch featuring slim-profile craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1547996160-71dfabb17282?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000117",
    "name": "Watches - Luxury Slim Fitness Activity Tracker Band Edition 7",
    "price": 1335,
    "description": "High-grade slim fitness activity tracker band featuring luxury craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000118",
    "name": "Watches - Titanium Retro Square Silver Case Quartz Watch Edition 7",
    "price": 1772,
    "description": "High-grade retro square silver case quartz watch featuring titanium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000119",
    "name": "Watches - Precision Deep Sea Rotating Diver Bezel Watch Edition 7",
    "price": 2809,
    "description": "High-grade deep sea rotating diver bezel watch featuring precision craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200011a",
    "name": "Watches - Sport Handcrafted Natural Sandalwood Watch Edition 7",
    "price": 1946,
    "description": "High-grade handcrafted natural sandalwood watch featuring sport craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200011b",
    "name": "Watches - Heritage Mother of Pearl Shimmering Dial Watch Edition 7",
    "price": 1883,
    "description": "High-grade mother of pearl shimmering dial watch featuring heritage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200011c",
    "name": "Watches - Analog-Digital Aerospace Titanium Sport Chrono Watch Edition 7",
    "price": 3120,
    "description": "High-grade aerospace titanium sport chrono watch featuring analog-digital craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200011d",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch Edition 8",
    "price": 2957,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200011e",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch Edition 8",
    "price": 1894,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200011f",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch Edition 8",
    "price": 2531,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000120",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch Edition 8",
    "price": 1568,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000121",
    "name": "Watches - Waterproof Black Matte Stainless Steel Dress Watch Edition 8",
    "price": 2305,
    "description": "High-grade black matte stainless steel dress watch featuring waterproof craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000122",
    "name": "Watches - Slim-Profile Luxury Automatic Skeleton Mechanical Watch Edition 8",
    "price": 3642,
    "description": "High-grade luxury automatic skeleton mechanical watch featuring slim-profile craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1547996160-71dfabb17282?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000123",
    "name": "Watches - Luxury Slim Fitness Activity Tracker Band Edition 8",
    "price": 1179,
    "description": "High-grade slim fitness activity tracker band featuring luxury craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000124",
    "name": "Watches - Titanium Retro Square Silver Case Quartz Watch Edition 8",
    "price": 1616,
    "description": "High-grade retro square silver case quartz watch featuring titanium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000125",
    "name": "Watches - Precision Deep Sea Rotating Diver Bezel Watch Edition 8",
    "price": 2653,
    "description": "High-grade deep sea rotating diver bezel watch featuring precision craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000126",
    "name": "Watches - Sport Handcrafted Natural Sandalwood Watch Edition 8",
    "price": 1790,
    "description": "High-grade handcrafted natural sandalwood watch featuring sport craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000127",
    "name": "Watches - Heritage Mother of Pearl Shimmering Dial Watch Edition 8",
    "price": 2027,
    "description": "High-grade mother of pearl shimmering dial watch featuring heritage craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000128",
    "name": "Watches - Analog-Digital Aerospace Titanium Sport Chrono Watch Edition 8",
    "price": 3264,
    "description": "High-grade aerospace titanium sport chrono watch featuring analog-digital craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000129",
    "name": "Watches - Executive AMOLED Bluetooth Calling Smartwatch Edition 9",
    "price": 3101,
    "description": "High-grade amoled bluetooth calling smartwatch featuring executive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200012a",
    "name": "Watches - Sapphire Minimalist Rose Gold Mesh Strap Watch Edition 9",
    "price": 2038,
    "description": "High-grade minimalist rose gold mesh strap watch featuring sapphire craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200012b",
    "name": "Watches - Solar Precision 3-Subdial Chronograph Watch Edition 9",
    "price": 2375,
    "description": "High-grade precision 3-subdial chronograph watch featuring solar craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200012c",
    "name": "Watches - Automatic Rugged Military Shockproof Tactical Watch Edition 9",
    "price": 1412,
    "description": "High-grade rugged military shockproof tactical watch featuring automatic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80",
    "category": "Watches",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200012d",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones",
    "price": 3149,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200012e",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds",
    "price": 1386,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200012f",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W",
    "price": 1723,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000130",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank",
    "price": 1360,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000131",
    "name": "Electronics - Smart Hot-Swap RGB Mechanical Gaming Keyboard",
    "price": 2497,
    "description": "High-grade hot-swap rgb mechanical gaming keyboard featuring smart craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000132",
    "name": "Electronics - Ergonomic Dual-Mode Silent Wireless Optical Mouse",
    "price": 934,
    "description": "High-grade dual-mode silent wireless optical mouse featuring ergonomic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000133",
    "name": "Electronics - Bluetooth 5.3 Full HD 1080p 60fps USB Streaming Webcam",
    "price": 1771,
    "description": "High-grade full hd 1080p 60fps usb streaming webcam featuring bluetooth 5.3 craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000134",
    "name": "Electronics - Type-C Touch Dimmable Smart LED Desk Lamp",
    "price": 1308,
    "description": "High-grade touch dimmable smart led desk lamp featuring type-c craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000135",
    "name": "Electronics - Portable 65W GaN III Fast Multi-Port Charger",
    "price": 1445,
    "description": "High-grade 65w gan iii fast multi-port charger featuring portable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000136",
    "name": "Electronics - Pro-Audio 3-in-1 Magnetic Wireless Charging Stand",
    "price": 1382,
    "description": "High-grade 3-in-1 magnetic wireless charging stand featuring pro-audio craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1622445262464-84b1b0722002?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000137",
    "name": "Electronics - Multi-Device Pocket Mini HD Cinema Projector",
    "price": 4919,
    "description": "High-grade pocket mini hd cinema projector featuring multi-device craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000138",
    "name": "Electronics - Noise-Isolating USB Cardioid Condenser Podcast Mic",
    "price": 2156,
    "description": "High-grade usb cardioid condenser podcast mic featuring noise-isolating craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000139",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones Edition 2",
    "price": 3293,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200013a",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds Edition 2",
    "price": 1530,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200013b",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W Edition 2",
    "price": 1867,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200013c",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank Edition 2",
    "price": 1504,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200013d",
    "name": "Electronics - Smart Hot-Swap RGB Mechanical Gaming Keyboard Edition 2",
    "price": 2641,
    "description": "High-grade hot-swap rgb mechanical gaming keyboard featuring smart craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200013e",
    "name": "Electronics - Ergonomic Dual-Mode Silent Wireless Optical Mouse Edition 2",
    "price": 778,
    "description": "High-grade dual-mode silent wireless optical mouse featuring ergonomic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200013f",
    "name": "Electronics - Bluetooth 5.3 Full HD 1080p 60fps USB Streaming Webcam Edition 2",
    "price": 1615,
    "description": "High-grade full hd 1080p 60fps usb streaming webcam featuring bluetooth 5.3 craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000140",
    "name": "Electronics - Type-C Touch Dimmable Smart LED Desk Lamp Edition 2",
    "price": 1152,
    "description": "High-grade touch dimmable smart led desk lamp featuring type-c craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000141",
    "name": "Electronics - Portable 65W GaN III Fast Multi-Port Charger Edition 2",
    "price": 1289,
    "description": "High-grade 65w gan iii fast multi-port charger featuring portable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000142",
    "name": "Electronics - Pro-Audio 3-in-1 Magnetic Wireless Charging Stand Edition 2",
    "price": 1526,
    "description": "High-grade 3-in-1 magnetic wireless charging stand featuring pro-audio craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1622445262464-84b1b0722002?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000143",
    "name": "Electronics - Multi-Device Pocket Mini HD Cinema Projector Edition 2",
    "price": 5063,
    "description": "High-grade pocket mini hd cinema projector featuring multi-device craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000144",
    "name": "Electronics - Noise-Isolating USB Cardioid Condenser Podcast Mic Edition 2",
    "price": 2300,
    "description": "High-grade usb cardioid condenser podcast mic featuring noise-isolating craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000145",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones Edition 3",
    "price": 3437,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000146",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds Edition 3",
    "price": 1374,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000147",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W Edition 3",
    "price": 1711,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000148",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank Edition 3",
    "price": 1348,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000149",
    "name": "Electronics - Smart Hot-Swap RGB Mechanical Gaming Keyboard Edition 3",
    "price": 2485,
    "description": "High-grade hot-swap rgb mechanical gaming keyboard featuring smart craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200014a",
    "name": "Electronics - Ergonomic Dual-Mode Silent Wireless Optical Mouse Edition 3",
    "price": 922,
    "description": "High-grade dual-mode silent wireless optical mouse featuring ergonomic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200014b",
    "name": "Electronics - Bluetooth 5.3 Full HD 1080p 60fps USB Streaming Webcam Edition 3",
    "price": 1759,
    "description": "High-grade full hd 1080p 60fps usb streaming webcam featuring bluetooth 5.3 craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200014c",
    "name": "Electronics - Type-C Touch Dimmable Smart LED Desk Lamp Edition 3",
    "price": 1296,
    "description": "High-grade touch dimmable smart led desk lamp featuring type-c craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200014d",
    "name": "Electronics - Portable 65W GaN III Fast Multi-Port Charger Edition 3",
    "price": 1433,
    "description": "High-grade 65w gan iii fast multi-port charger featuring portable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200014e",
    "name": "Electronics - Pro-Audio 3-in-1 Magnetic Wireless Charging Stand Edition 3",
    "price": 1370,
    "description": "High-grade 3-in-1 magnetic wireless charging stand featuring pro-audio craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1622445262464-84b1b0722002?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200014f",
    "name": "Electronics - Multi-Device Pocket Mini HD Cinema Projector Edition 3",
    "price": 4907,
    "description": "High-grade pocket mini hd cinema projector featuring multi-device craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000150",
    "name": "Electronics - Noise-Isolating USB Cardioid Condenser Podcast Mic Edition 3",
    "price": 2144,
    "description": "High-grade usb cardioid condenser podcast mic featuring noise-isolating craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000151",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones Edition 4",
    "price": 3281,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000152",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds Edition 4",
    "price": 1518,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000153",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W Edition 4",
    "price": 1855,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000154",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank Edition 4",
    "price": 1492,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000155",
    "name": "Electronics - Smart Hot-Swap RGB Mechanical Gaming Keyboard Edition 4",
    "price": 2629,
    "description": "High-grade hot-swap rgb mechanical gaming keyboard featuring smart craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000156",
    "name": "Electronics - Ergonomic Dual-Mode Silent Wireless Optical Mouse Edition 4",
    "price": 766,
    "description": "High-grade dual-mode silent wireless optical mouse featuring ergonomic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000157",
    "name": "Electronics - Bluetooth 5.3 Full HD 1080p 60fps USB Streaming Webcam Edition 4",
    "price": 1603,
    "description": "High-grade full hd 1080p 60fps usb streaming webcam featuring bluetooth 5.3 craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000158",
    "name": "Electronics - Type-C Touch Dimmable Smart LED Desk Lamp Edition 4",
    "price": 1140,
    "description": "High-grade touch dimmable smart led desk lamp featuring type-c craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000159",
    "name": "Electronics - Portable 65W GaN III Fast Multi-Port Charger Edition 4",
    "price": 1277,
    "description": "High-grade 65w gan iii fast multi-port charger featuring portable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200015a",
    "name": "Electronics - Pro-Audio 3-in-1 Magnetic Wireless Charging Stand Edition 4",
    "price": 1514,
    "description": "High-grade 3-in-1 magnetic wireless charging stand featuring pro-audio craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1622445262464-84b1b0722002?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200015b",
    "name": "Electronics - Multi-Device Pocket Mini HD Cinema Projector Edition 4",
    "price": 5051,
    "description": "High-grade pocket mini hd cinema projector featuring multi-device craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200015c",
    "name": "Electronics - Noise-Isolating USB Cardioid Condenser Podcast Mic Edition 4",
    "price": 2288,
    "description": "High-grade usb cardioid condenser podcast mic featuring noise-isolating craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200015d",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones Edition 5",
    "price": 3425,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200015e",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds Edition 5",
    "price": 1362,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200015f",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W Edition 5",
    "price": 1699,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000160",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank Edition 5",
    "price": 1336,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000161",
    "name": "Electronics - Smart Hot-Swap RGB Mechanical Gaming Keyboard Edition 5",
    "price": 2473,
    "description": "High-grade hot-swap rgb mechanical gaming keyboard featuring smart craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000162",
    "name": "Electronics - Ergonomic Dual-Mode Silent Wireless Optical Mouse Edition 5",
    "price": 910,
    "description": "High-grade dual-mode silent wireless optical mouse featuring ergonomic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000163",
    "name": "Electronics - Bluetooth 5.3 Full HD 1080p 60fps USB Streaming Webcam Edition 5",
    "price": 1747,
    "description": "High-grade full hd 1080p 60fps usb streaming webcam featuring bluetooth 5.3 craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000164",
    "name": "Electronics - Type-C Touch Dimmable Smart LED Desk Lamp Edition 5",
    "price": 1284,
    "description": "High-grade touch dimmable smart led desk lamp featuring type-c craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000165",
    "name": "Electronics - Portable 65W GaN III Fast Multi-Port Charger Edition 5",
    "price": 1421,
    "description": "High-grade 65w gan iii fast multi-port charger featuring portable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000166",
    "name": "Electronics - Pro-Audio 3-in-1 Magnetic Wireless Charging Stand Edition 5",
    "price": 1358,
    "description": "High-grade 3-in-1 magnetic wireless charging stand featuring pro-audio craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1622445262464-84b1b0722002?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000167",
    "name": "Electronics - Multi-Device Pocket Mini HD Cinema Projector Edition 5",
    "price": 4895,
    "description": "High-grade pocket mini hd cinema projector featuring multi-device craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000168",
    "name": "Electronics - Noise-Isolating USB Cardioid Condenser Podcast Mic Edition 5",
    "price": 2132,
    "description": "High-grade usb cardioid condenser podcast mic featuring noise-isolating craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000169",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones Edition 6",
    "price": 3269,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200016a",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds Edition 6",
    "price": 1506,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200016b",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W Edition 6",
    "price": 1843,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200016c",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank Edition 6",
    "price": 1480,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200016d",
    "name": "Electronics - Smart Hot-Swap RGB Mechanical Gaming Keyboard Edition 6",
    "price": 2617,
    "description": "High-grade hot-swap rgb mechanical gaming keyboard featuring smart craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200016e",
    "name": "Electronics - Ergonomic Dual-Mode Silent Wireless Optical Mouse Edition 6",
    "price": 754,
    "description": "High-grade dual-mode silent wireless optical mouse featuring ergonomic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200016f",
    "name": "Electronics - Bluetooth 5.3 Full HD 1080p 60fps USB Streaming Webcam Edition 6",
    "price": 1591,
    "description": "High-grade full hd 1080p 60fps usb streaming webcam featuring bluetooth 5.3 craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000170",
    "name": "Electronics - Type-C Touch Dimmable Smart LED Desk Lamp Edition 6",
    "price": 1128,
    "description": "High-grade touch dimmable smart led desk lamp featuring type-c craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000171",
    "name": "Electronics - Portable 65W GaN III Fast Multi-Port Charger Edition 6",
    "price": 1265,
    "description": "High-grade 65w gan iii fast multi-port charger featuring portable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000172",
    "name": "Electronics - Pro-Audio 3-in-1 Magnetic Wireless Charging Stand Edition 6",
    "price": 1502,
    "description": "High-grade 3-in-1 magnetic wireless charging stand featuring pro-audio craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1622445262464-84b1b0722002?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000173",
    "name": "Electronics - Multi-Device Pocket Mini HD Cinema Projector Edition 6",
    "price": 5039,
    "description": "High-grade pocket mini hd cinema projector featuring multi-device craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000174",
    "name": "Electronics - Noise-Isolating USB Cardioid Condenser Podcast Mic Edition 6",
    "price": 2276,
    "description": "High-grade usb cardioid condenser podcast mic featuring noise-isolating craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000175",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones Edition 7",
    "price": 3413,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000176",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds Edition 7",
    "price": 1350,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000177",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W Edition 7",
    "price": 1687,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000178",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank Edition 7",
    "price": 1324,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000179",
    "name": "Electronics - Smart Hot-Swap RGB Mechanical Gaming Keyboard Edition 7",
    "price": 2461,
    "description": "High-grade hot-swap rgb mechanical gaming keyboard featuring smart craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200017a",
    "name": "Electronics - Ergonomic Dual-Mode Silent Wireless Optical Mouse Edition 7",
    "price": 898,
    "description": "High-grade dual-mode silent wireless optical mouse featuring ergonomic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200017b",
    "name": "Electronics - Bluetooth 5.3 Full HD 1080p 60fps USB Streaming Webcam Edition 7",
    "price": 1735,
    "description": "High-grade full hd 1080p 60fps usb streaming webcam featuring bluetooth 5.3 craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200017c",
    "name": "Electronics - Type-C Touch Dimmable Smart LED Desk Lamp Edition 7",
    "price": 1272,
    "description": "High-grade touch dimmable smart led desk lamp featuring type-c craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200017d",
    "name": "Electronics - Portable 65W GaN III Fast Multi-Port Charger Edition 7",
    "price": 1409,
    "description": "High-grade 65w gan iii fast multi-port charger featuring portable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200017e",
    "name": "Electronics - Pro-Audio 3-in-1 Magnetic Wireless Charging Stand Edition 7",
    "price": 1646,
    "description": "High-grade 3-in-1 magnetic wireless charging stand featuring pro-audio craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1622445262464-84b1b0722002?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200017f",
    "name": "Electronics - Multi-Device Pocket Mini HD Cinema Projector Edition 7",
    "price": 4883,
    "description": "High-grade pocket mini hd cinema projector featuring multi-device craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000180",
    "name": "Electronics - Noise-Isolating USB Cardioid Condenser Podcast Mic Edition 7",
    "price": 2120,
    "description": "High-grade usb cardioid condenser podcast mic featuring noise-isolating craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000181",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones Edition 8",
    "price": 3257,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000182",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds Edition 8",
    "price": 1494,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000183",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W Edition 8",
    "price": 1831,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000184",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank Edition 8",
    "price": 1468,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000185",
    "name": "Electronics - Smart Hot-Swap RGB Mechanical Gaming Keyboard Edition 8",
    "price": 2605,
    "description": "High-grade hot-swap rgb mechanical gaming keyboard featuring smart craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000186",
    "name": "Electronics - Ergonomic Dual-Mode Silent Wireless Optical Mouse Edition 8",
    "price": 1042,
    "description": "High-grade dual-mode silent wireless optical mouse featuring ergonomic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000187",
    "name": "Electronics - Bluetooth 5.3 Full HD 1080p 60fps USB Streaming Webcam Edition 8",
    "price": 1579,
    "description": "High-grade full hd 1080p 60fps usb streaming webcam featuring bluetooth 5.3 craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000188",
    "name": "Electronics - Type-C Touch Dimmable Smart LED Desk Lamp Edition 8",
    "price": 1116,
    "description": "High-grade touch dimmable smart led desk lamp featuring type-c craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000189",
    "name": "Electronics - Portable 65W GaN III Fast Multi-Port Charger Edition 8",
    "price": 1253,
    "description": "High-grade 65w gan iii fast multi-port charger featuring portable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200018a",
    "name": "Electronics - Pro-Audio 3-in-1 Magnetic Wireless Charging Stand Edition 8",
    "price": 1490,
    "description": "High-grade 3-in-1 magnetic wireless charging stand featuring pro-audio craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1622445262464-84b1b0722002?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200018b",
    "name": "Electronics - Multi-Device Pocket Mini HD Cinema Projector Edition 8",
    "price": 5027,
    "description": "High-grade pocket mini hd cinema projector featuring multi-device craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200018c",
    "name": "Electronics - Noise-Isolating USB Cardioid Condenser Podcast Mic Edition 8",
    "price": 2264,
    "description": "High-grade usb cardioid condenser podcast mic featuring noise-isolating craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200018d",
    "name": "Electronics - Wireless ANC Active Noise Cancelling Headphones Edition 9",
    "price": 3401,
    "description": "High-grade anc active noise cancelling headphones featuring wireless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200018e",
    "name": "Electronics - Ultra-HD Ultra-Low Latency Gaming Earbuds Edition 9",
    "price": 1638,
    "description": "High-grade ultra-low latency gaming earbuds featuring ultra-hd craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200018f",
    "name": "Electronics - Hi-Res IPX7 Waterproof Bluetooth Speaker 16W Edition 9",
    "price": 1675,
    "description": "High-grade ipx7 waterproof bluetooth speaker 16w featuring hi-res craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000190",
    "name": "Electronics - Fast-Charging 20000mAh 22.5W Fast Charging Power Bank Edition 9",
    "price": 1312,
    "description": "High-grade 20000mah 22.5w fast charging power bank featuring fast-charging craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1609592807664-884d509bc489?auto=format&fit=crop&w=700&q=80",
    "category": "Electronics",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000191",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack",
    "price": 1549,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000192",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve",
    "price": 886,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000193",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag",
    "price": 1823,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000194",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel",
    "price": 1460,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000195",
    "name": "Bags - Anti-Theft Compact Water-Repellent Crossbody Sling",
    "price": 797,
    "description": "High-grade compact water-repellent crossbody sling featuring anti-theft craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000196",
    "name": "Bags - Durable Heavy-Duty 12oz Organic Cotton Canvas Tote",
    "price": 534,
    "description": "High-grade heavy-duty 12oz organic cotton canvas tote featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000197",
    "name": "Bags - Travel-Ready Vintage Waxed Canvas Leather Messenger Bag",
    "price": 2271,
    "description": "High-grade vintage waxed canvas leather messenger bag featuring travel-ready craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000198",
    "name": "Bags - Minimalist Ergonomic Hiking Expedition Rucksack 55L",
    "price": 3008,
    "description": "High-grade ergonomic hiking expedition rucksack 55l featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000199",
    "name": "Bags - Artisanal Diamond Quilted Chain Evening Clutch",
    "price": 1545,
    "description": "High-grade diamond quilted chain evening clutch featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200019a",
    "name": "Bags - Multi-Pocket Water-Resistant Hanging Grooming Dopp Kit",
    "price": 532,
    "description": "High-grade water-resistant hanging grooming dopp kit featuring multi-pocket craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200019b",
    "name": "Bags - Organized Polycarbonate 360-Glide Cabin Suitcase",
    "price": 3419,
    "description": "High-grade polycarbonate 360-glide cabin suitcase featuring organized craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200019c",
    "name": "Bags - Heavy-Duty Bohemian Handwoven Round Jute Sling",
    "price": 856,
    "description": "High-grade bohemian handwoven round jute sling featuring heavy-duty craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200019d",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack Edition 2",
    "price": 1693,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200019e",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve Edition 2",
    "price": 1030,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200019f",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag Edition 2",
    "price": 1967,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001a0",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel Edition 2",
    "price": 1604,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001a1",
    "name": "Bags - Anti-Theft Compact Water-Repellent Crossbody Sling Edition 2",
    "price": 941,
    "description": "High-grade compact water-repellent crossbody sling featuring anti-theft craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001a2",
    "name": "Bags - Durable Heavy-Duty 12oz Organic Cotton Canvas Tote Edition 2",
    "price": 378,
    "description": "High-grade heavy-duty 12oz organic cotton canvas tote featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001a3",
    "name": "Bags - Travel-Ready Vintage Waxed Canvas Leather Messenger Bag Edition 2",
    "price": 2115,
    "description": "High-grade vintage waxed canvas leather messenger bag featuring travel-ready craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001a4",
    "name": "Bags - Minimalist Ergonomic Hiking Expedition Rucksack 55L Edition 2",
    "price": 2852,
    "description": "High-grade ergonomic hiking expedition rucksack 55l featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001a5",
    "name": "Bags - Artisanal Diamond Quilted Chain Evening Clutch Edition 2",
    "price": 1389,
    "description": "High-grade diamond quilted chain evening clutch featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001a6",
    "name": "Bags - Multi-Pocket Water-Resistant Hanging Grooming Dopp Kit Edition 2",
    "price": 676,
    "description": "High-grade water-resistant hanging grooming dopp kit featuring multi-pocket craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001a7",
    "name": "Bags - Organized Polycarbonate 360-Glide Cabin Suitcase Edition 2",
    "price": 3563,
    "description": "High-grade polycarbonate 360-glide cabin suitcase featuring organized craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001a8",
    "name": "Bags - Heavy-Duty Bohemian Handwoven Round Jute Sling Edition 2",
    "price": 1000,
    "description": "High-grade bohemian handwoven round jute sling featuring heavy-duty craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001a9",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack Edition 3",
    "price": 1837,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001aa",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve Edition 3",
    "price": 874,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001ab",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag Edition 3",
    "price": 1811,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001ac",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel Edition 3",
    "price": 1448,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001ad",
    "name": "Bags - Anti-Theft Compact Water-Repellent Crossbody Sling Edition 3",
    "price": 785,
    "description": "High-grade compact water-repellent crossbody sling featuring anti-theft craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001ae",
    "name": "Bags - Durable Heavy-Duty 12oz Organic Cotton Canvas Tote Edition 3",
    "price": 522,
    "description": "High-grade heavy-duty 12oz organic cotton canvas tote featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001af",
    "name": "Bags - Travel-Ready Vintage Waxed Canvas Leather Messenger Bag Edition 3",
    "price": 2259,
    "description": "High-grade vintage waxed canvas leather messenger bag featuring travel-ready craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001b0",
    "name": "Bags - Minimalist Ergonomic Hiking Expedition Rucksack 55L Edition 3",
    "price": 2996,
    "description": "High-grade ergonomic hiking expedition rucksack 55l featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001b1",
    "name": "Bags - Artisanal Diamond Quilted Chain Evening Clutch Edition 3",
    "price": 1533,
    "description": "High-grade diamond quilted chain evening clutch featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001b2",
    "name": "Bags - Multi-Pocket Water-Resistant Hanging Grooming Dopp Kit Edition 3",
    "price": 520,
    "description": "High-grade water-resistant hanging grooming dopp kit featuring multi-pocket craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001b3",
    "name": "Bags - Organized Polycarbonate 360-Glide Cabin Suitcase Edition 3",
    "price": 3407,
    "description": "High-grade polycarbonate 360-glide cabin suitcase featuring organized craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001b4",
    "name": "Bags - Heavy-Duty Bohemian Handwoven Round Jute Sling Edition 3",
    "price": 844,
    "description": "High-grade bohemian handwoven round jute sling featuring heavy-duty craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001b5",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack Edition 4",
    "price": 1681,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001b6",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve Edition 4",
    "price": 1018,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001b7",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag Edition 4",
    "price": 1955,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001b8",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel Edition 4",
    "price": 1592,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001b9",
    "name": "Bags - Anti-Theft Compact Water-Repellent Crossbody Sling Edition 4",
    "price": 929,
    "description": "High-grade compact water-repellent crossbody sling featuring anti-theft craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001ba",
    "name": "Bags - Durable Heavy-Duty 12oz Organic Cotton Canvas Tote Edition 4",
    "price": 366,
    "description": "High-grade heavy-duty 12oz organic cotton canvas tote featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001bb",
    "name": "Bags - Travel-Ready Vintage Waxed Canvas Leather Messenger Bag Edition 4",
    "price": 2103,
    "description": "High-grade vintage waxed canvas leather messenger bag featuring travel-ready craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001bc",
    "name": "Bags - Minimalist Ergonomic Hiking Expedition Rucksack 55L Edition 4",
    "price": 2840,
    "description": "High-grade ergonomic hiking expedition rucksack 55l featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001bd",
    "name": "Bags - Artisanal Diamond Quilted Chain Evening Clutch Edition 4",
    "price": 1377,
    "description": "High-grade diamond quilted chain evening clutch featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001be",
    "name": "Bags - Multi-Pocket Water-Resistant Hanging Grooming Dopp Kit Edition 4",
    "price": 664,
    "description": "High-grade water-resistant hanging grooming dopp kit featuring multi-pocket craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001bf",
    "name": "Bags - Organized Polycarbonate 360-Glide Cabin Suitcase Edition 4",
    "price": 3551,
    "description": "High-grade polycarbonate 360-glide cabin suitcase featuring organized craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001c0",
    "name": "Bags - Heavy-Duty Bohemian Handwoven Round Jute Sling Edition 4",
    "price": 988,
    "description": "High-grade bohemian handwoven round jute sling featuring heavy-duty craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001c1",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack Edition 5",
    "price": 1825,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001c2",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve Edition 5",
    "price": 862,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001c3",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag Edition 5",
    "price": 1799,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001c4",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel Edition 5",
    "price": 1436,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001c5",
    "name": "Bags - Anti-Theft Compact Water-Repellent Crossbody Sling Edition 5",
    "price": 773,
    "description": "High-grade compact water-repellent crossbody sling featuring anti-theft craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001c6",
    "name": "Bags - Durable Heavy-Duty 12oz Organic Cotton Canvas Tote Edition 5",
    "price": 510,
    "description": "High-grade heavy-duty 12oz organic cotton canvas tote featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001c7",
    "name": "Bags - Travel-Ready Vintage Waxed Canvas Leather Messenger Bag Edition 5",
    "price": 2247,
    "description": "High-grade vintage waxed canvas leather messenger bag featuring travel-ready craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001c8",
    "name": "Bags - Minimalist Ergonomic Hiking Expedition Rucksack 55L Edition 5",
    "price": 2984,
    "description": "High-grade ergonomic hiking expedition rucksack 55l featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001c9",
    "name": "Bags - Artisanal Diamond Quilted Chain Evening Clutch Edition 5",
    "price": 1521,
    "description": "High-grade diamond quilted chain evening clutch featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001ca",
    "name": "Bags - Multi-Pocket Water-Resistant Hanging Grooming Dopp Kit Edition 5",
    "price": 508,
    "description": "High-grade water-resistant hanging grooming dopp kit featuring multi-pocket craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001cb",
    "name": "Bags - Organized Polycarbonate 360-Glide Cabin Suitcase Edition 5",
    "price": 3395,
    "description": "High-grade polycarbonate 360-glide cabin suitcase featuring organized craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001cc",
    "name": "Bags - Heavy-Duty Bohemian Handwoven Round Jute Sling Edition 5",
    "price": 832,
    "description": "High-grade bohemian handwoven round jute sling featuring heavy-duty craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001cd",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack Edition 6",
    "price": 1669,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001ce",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve Edition 6",
    "price": 1006,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001cf",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag Edition 6",
    "price": 1943,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001d0",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel Edition 6",
    "price": 1580,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001d1",
    "name": "Bags - Anti-Theft Compact Water-Repellent Crossbody Sling Edition 6",
    "price": 917,
    "description": "High-grade compact water-repellent crossbody sling featuring anti-theft craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001d2",
    "name": "Bags - Durable Heavy-Duty 12oz Organic Cotton Canvas Tote Edition 6",
    "price": 354,
    "description": "High-grade heavy-duty 12oz organic cotton canvas tote featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001d3",
    "name": "Bags - Travel-Ready Vintage Waxed Canvas Leather Messenger Bag Edition 6",
    "price": 2091,
    "description": "High-grade vintage waxed canvas leather messenger bag featuring travel-ready craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001d4",
    "name": "Bags - Minimalist Ergonomic Hiking Expedition Rucksack 55L Edition 6",
    "price": 2828,
    "description": "High-grade ergonomic hiking expedition rucksack 55l featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001d5",
    "name": "Bags - Artisanal Diamond Quilted Chain Evening Clutch Edition 6",
    "price": 1365,
    "description": "High-grade diamond quilted chain evening clutch featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001d6",
    "name": "Bags - Multi-Pocket Water-Resistant Hanging Grooming Dopp Kit Edition 6",
    "price": 652,
    "description": "High-grade water-resistant hanging grooming dopp kit featuring multi-pocket craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001d7",
    "name": "Bags - Organized Polycarbonate 360-Glide Cabin Suitcase Edition 6",
    "price": 3539,
    "description": "High-grade polycarbonate 360-glide cabin suitcase featuring organized craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001d8",
    "name": "Bags - Heavy-Duty Bohemian Handwoven Round Jute Sling Edition 6",
    "price": 976,
    "description": "High-grade bohemian handwoven round jute sling featuring heavy-duty craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001d9",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack Edition 7",
    "price": 1813,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001da",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve Edition 7",
    "price": 850,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001db",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag Edition 7",
    "price": 1787,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001dc",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel Edition 7",
    "price": 1424,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001dd",
    "name": "Bags - Anti-Theft Compact Water-Repellent Crossbody Sling Edition 7",
    "price": 761,
    "description": "High-grade compact water-repellent crossbody sling featuring anti-theft craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001de",
    "name": "Bags - Durable Heavy-Duty 12oz Organic Cotton Canvas Tote Edition 7",
    "price": 498,
    "description": "High-grade heavy-duty 12oz organic cotton canvas tote featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001df",
    "name": "Bags - Travel-Ready Vintage Waxed Canvas Leather Messenger Bag Edition 7",
    "price": 2235,
    "description": "High-grade vintage waxed canvas leather messenger bag featuring travel-ready craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001e0",
    "name": "Bags - Minimalist Ergonomic Hiking Expedition Rucksack 55L Edition 7",
    "price": 2972,
    "description": "High-grade ergonomic hiking expedition rucksack 55l featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001e1",
    "name": "Bags - Artisanal Diamond Quilted Chain Evening Clutch Edition 7",
    "price": 1509,
    "description": "High-grade diamond quilted chain evening clutch featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001e2",
    "name": "Bags - Multi-Pocket Water-Resistant Hanging Grooming Dopp Kit Edition 7",
    "price": 796,
    "description": "High-grade water-resistant hanging grooming dopp kit featuring multi-pocket craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001e3",
    "name": "Bags - Organized Polycarbonate 360-Glide Cabin Suitcase Edition 7",
    "price": 3383,
    "description": "High-grade polycarbonate 360-glide cabin suitcase featuring organized craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001e4",
    "name": "Bags - Heavy-Duty Bohemian Handwoven Round Jute Sling Edition 7",
    "price": 820,
    "description": "High-grade bohemian handwoven round jute sling featuring heavy-duty craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001e5",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack Edition 8",
    "price": 1657,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001e6",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve Edition 8",
    "price": 994,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001e7",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag Edition 8",
    "price": 1931,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001e8",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel Edition 8",
    "price": 1568,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001e9",
    "name": "Bags - Anti-Theft Compact Water-Repellent Crossbody Sling Edition 8",
    "price": 905,
    "description": "High-grade compact water-repellent crossbody sling featuring anti-theft craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001ea",
    "name": "Bags - Durable Heavy-Duty 12oz Organic Cotton Canvas Tote Edition 8",
    "price": 642,
    "description": "High-grade heavy-duty 12oz organic cotton canvas tote featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001eb",
    "name": "Bags - Travel-Ready Vintage Waxed Canvas Leather Messenger Bag Edition 8",
    "price": 2079,
    "description": "High-grade vintage waxed canvas leather messenger bag featuring travel-ready craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001ec",
    "name": "Bags - Minimalist Ergonomic Hiking Expedition Rucksack 55L Edition 8",
    "price": 2816,
    "description": "High-grade ergonomic hiking expedition rucksack 55l featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001ed",
    "name": "Bags - Artisanal Diamond Quilted Chain Evening Clutch Edition 8",
    "price": 1353,
    "description": "High-grade diamond quilted chain evening clutch featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001ee",
    "name": "Bags - Multi-Pocket Water-Resistant Hanging Grooming Dopp Kit Edition 8",
    "price": 640,
    "description": "High-grade water-resistant hanging grooming dopp kit featuring multi-pocket craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001ef",
    "name": "Bags - Organized Polycarbonate 360-Glide Cabin Suitcase Edition 8",
    "price": 3527,
    "description": "High-grade polycarbonate 360-glide cabin suitcase featuring organized craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001f0",
    "name": "Bags - Heavy-Duty Bohemian Handwoven Round Jute Sling Edition 8",
    "price": 964,
    "description": "High-grade bohemian handwoven round jute sling featuring heavy-duty craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001f1",
    "name": "Bags - Lightweight Anti-Theft Waterproof Travel Laptop Backpack Edition 9",
    "price": 1801,
    "description": "High-grade anti-theft waterproof travel laptop backpack featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001f2",
    "name": "Bags - Spacious Padded Shockproof Fleece Laptop Sleeve Edition 9",
    "price": 1138,
    "description": "High-grade padded shockproof fleece laptop sleeve featuring spacious craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001f3",
    "name": "Bags - Water-Resistant Structured Vegan Leather Top-Handle Handbag Edition 9",
    "price": 1775,
    "description": "High-grade structured vegan leather top-handle handbag featuring water-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001f4",
    "name": "Bags - Convertible Ventilated Shoe Compartment Gym Duffel Edition 9",
    "price": 1412,
    "description": "High-grade ventilated shoe compartment gym duffel featuring convertible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    "category": "Bags",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001f5",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses",
    "price": 649,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001f6",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet",
    "price": 786,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20001f7",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt",
    "price": 623,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20001f8",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet",
    "price": 560,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20001f9",
    "name": "Accessories - Matte-Finish Adjustable Washed Cotton Baseball Cap",
    "price": 497,
    "description": "High-grade adjustable washed cotton baseball cap featuring matte-finish craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20001fa",
    "name": "Accessories - Refined Golden Metal Frame Pilot Aviator Sunglasses",
    "price": 1034,
    "description": "High-grade golden metal frame pilot aviator sunglasses featuring refined craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20001fb",
    "name": "Accessories - Tarnish-Free Cashmere-Touch Brushed Winter Scarf",
    "price": 871,
    "description": "High-grade cashmere-touch brushed winter scarf featuring tarnish-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20001fc",
    "name": "Accessories - Lightweight Pop-Up Minimalist Aluminum Cardholder",
    "price": 758,
    "description": "High-grade pop-up minimalist aluminum cardholder featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20001fd",
    "name": "Accessories - Signature Comfort-Fit Matte Titanium Steel Ring",
    "price": 645,
    "description": "High-grade comfort-fit matte titanium steel ring featuring signature craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20001fe",
    "name": "Accessories - Timeless Satin Silk Square Floral Bandana Scarf",
    "price": 432,
    "description": "High-grade satin silk square floral bandana scarf featuring timeless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20001ff",
    "name": "Accessories - Flexible Ribbed Knit Thermal Slouchy Beanie",
    "price": 319,
    "description": "High-grade ribbed knit thermal slouchy beanie featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000200",
    "name": "Accessories - Polished Braided Heavy-Duty Zinc Keyring Chain",
    "price": 256,
    "description": "High-grade braided heavy-duty zinc keyring chain featuring polished craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000201",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses Edition 2",
    "price": 793,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000202",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet Edition 2",
    "price": 930,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000203",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt Edition 2",
    "price": 767,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000204",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet Edition 2",
    "price": 704,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000205",
    "name": "Accessories - Matte-Finish Adjustable Washed Cotton Baseball Cap Edition 2",
    "price": 641,
    "description": "High-grade adjustable washed cotton baseball cap featuring matte-finish craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000206",
    "name": "Accessories - Refined Golden Metal Frame Pilot Aviator Sunglasses Edition 2",
    "price": 878,
    "description": "High-grade golden metal frame pilot aviator sunglasses featuring refined craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000207",
    "name": "Accessories - Tarnish-Free Cashmere-Touch Brushed Winter Scarf Edition 2",
    "price": 715,
    "description": "High-grade cashmere-touch brushed winter scarf featuring tarnish-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000208",
    "name": "Accessories - Lightweight Pop-Up Minimalist Aluminum Cardholder Edition 2",
    "price": 602,
    "description": "High-grade pop-up minimalist aluminum cardholder featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000209",
    "name": "Accessories - Signature Comfort-Fit Matte Titanium Steel Ring Edition 2",
    "price": 489,
    "description": "High-grade comfort-fit matte titanium steel ring featuring signature craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200020a",
    "name": "Accessories - Timeless Satin Silk Square Floral Bandana Scarf Edition 2",
    "price": 576,
    "description": "High-grade satin silk square floral bandana scarf featuring timeless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200020b",
    "name": "Accessories - Flexible Ribbed Knit Thermal Slouchy Beanie Edition 2",
    "price": 463,
    "description": "High-grade ribbed knit thermal slouchy beanie featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200020c",
    "name": "Accessories - Polished Braided Heavy-Duty Zinc Keyring Chain Edition 2",
    "price": 400,
    "description": "High-grade braided heavy-duty zinc keyring chain featuring polished craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200020d",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses Edition 3",
    "price": 937,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200020e",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet Edition 3",
    "price": 774,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200020f",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt Edition 3",
    "price": 611,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000210",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet Edition 3",
    "price": 548,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000211",
    "name": "Accessories - Matte-Finish Adjustable Washed Cotton Baseball Cap Edition 3",
    "price": 485,
    "description": "High-grade adjustable washed cotton baseball cap featuring matte-finish craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000212",
    "name": "Accessories - Refined Golden Metal Frame Pilot Aviator Sunglasses Edition 3",
    "price": 1022,
    "description": "High-grade golden metal frame pilot aviator sunglasses featuring refined craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000213",
    "name": "Accessories - Tarnish-Free Cashmere-Touch Brushed Winter Scarf Edition 3",
    "price": 859,
    "description": "High-grade cashmere-touch brushed winter scarf featuring tarnish-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000214",
    "name": "Accessories - Lightweight Pop-Up Minimalist Aluminum Cardholder Edition 3",
    "price": 746,
    "description": "High-grade pop-up minimalist aluminum cardholder featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000215",
    "name": "Accessories - Signature Comfort-Fit Matte Titanium Steel Ring Edition 3",
    "price": 633,
    "description": "High-grade comfort-fit matte titanium steel ring featuring signature craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000216",
    "name": "Accessories - Timeless Satin Silk Square Floral Bandana Scarf Edition 3",
    "price": 420,
    "description": "High-grade satin silk square floral bandana scarf featuring timeless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000217",
    "name": "Accessories - Flexible Ribbed Knit Thermal Slouchy Beanie Edition 3",
    "price": 307,
    "description": "High-grade ribbed knit thermal slouchy beanie featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000218",
    "name": "Accessories - Polished Braided Heavy-Duty Zinc Keyring Chain Edition 3",
    "price": 244,
    "description": "High-grade braided heavy-duty zinc keyring chain featuring polished craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000219",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses Edition 4",
    "price": 781,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200021a",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet Edition 4",
    "price": 918,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200021b",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt Edition 4",
    "price": 755,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200021c",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet Edition 4",
    "price": 692,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200021d",
    "name": "Accessories - Matte-Finish Adjustable Washed Cotton Baseball Cap Edition 4",
    "price": 629,
    "description": "High-grade adjustable washed cotton baseball cap featuring matte-finish craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200021e",
    "name": "Accessories - Refined Golden Metal Frame Pilot Aviator Sunglasses Edition 4",
    "price": 866,
    "description": "High-grade golden metal frame pilot aviator sunglasses featuring refined craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200021f",
    "name": "Accessories - Tarnish-Free Cashmere-Touch Brushed Winter Scarf Edition 4",
    "price": 703,
    "description": "High-grade cashmere-touch brushed winter scarf featuring tarnish-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000220",
    "name": "Accessories - Lightweight Pop-Up Minimalist Aluminum Cardholder Edition 4",
    "price": 590,
    "description": "High-grade pop-up minimalist aluminum cardholder featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000221",
    "name": "Accessories - Signature Comfort-Fit Matte Titanium Steel Ring Edition 4",
    "price": 477,
    "description": "High-grade comfort-fit matte titanium steel ring featuring signature craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000222",
    "name": "Accessories - Timeless Satin Silk Square Floral Bandana Scarf Edition 4",
    "price": 564,
    "description": "High-grade satin silk square floral bandana scarf featuring timeless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000223",
    "name": "Accessories - Flexible Ribbed Knit Thermal Slouchy Beanie Edition 4",
    "price": 451,
    "description": "High-grade ribbed knit thermal slouchy beanie featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000224",
    "name": "Accessories - Polished Braided Heavy-Duty Zinc Keyring Chain Edition 4",
    "price": 388,
    "description": "High-grade braided heavy-duty zinc keyring chain featuring polished craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000225",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses Edition 5",
    "price": 925,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000226",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet Edition 5",
    "price": 762,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000227",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt Edition 5",
    "price": 599,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000228",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet Edition 5",
    "price": 536,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000229",
    "name": "Accessories - Matte-Finish Adjustable Washed Cotton Baseball Cap Edition 5",
    "price": 473,
    "description": "High-grade adjustable washed cotton baseball cap featuring matte-finish craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200022a",
    "name": "Accessories - Refined Golden Metal Frame Pilot Aviator Sunglasses Edition 5",
    "price": 1010,
    "description": "High-grade golden metal frame pilot aviator sunglasses featuring refined craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200022b",
    "name": "Accessories - Tarnish-Free Cashmere-Touch Brushed Winter Scarf Edition 5",
    "price": 847,
    "description": "High-grade cashmere-touch brushed winter scarf featuring tarnish-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200022c",
    "name": "Accessories - Lightweight Pop-Up Minimalist Aluminum Cardholder Edition 5",
    "price": 734,
    "description": "High-grade pop-up minimalist aluminum cardholder featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200022d",
    "name": "Accessories - Signature Comfort-Fit Matte Titanium Steel Ring Edition 5",
    "price": 621,
    "description": "High-grade comfort-fit matte titanium steel ring featuring signature craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200022e",
    "name": "Accessories - Timeless Satin Silk Square Floral Bandana Scarf Edition 5",
    "price": 408,
    "description": "High-grade satin silk square floral bandana scarf featuring timeless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200022f",
    "name": "Accessories - Flexible Ribbed Knit Thermal Slouchy Beanie Edition 5",
    "price": 295,
    "description": "High-grade ribbed knit thermal slouchy beanie featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000230",
    "name": "Accessories - Polished Braided Heavy-Duty Zinc Keyring Chain Edition 5",
    "price": 232,
    "description": "High-grade braided heavy-duty zinc keyring chain featuring polished craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000231",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses Edition 6",
    "price": 769,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000232",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet Edition 6",
    "price": 906,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000233",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt Edition 6",
    "price": 743,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000234",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet Edition 6",
    "price": 680,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000235",
    "name": "Accessories - Matte-Finish Adjustable Washed Cotton Baseball Cap Edition 6",
    "price": 617,
    "description": "High-grade adjustable washed cotton baseball cap featuring matte-finish craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000236",
    "name": "Accessories - Refined Golden Metal Frame Pilot Aviator Sunglasses Edition 6",
    "price": 854,
    "description": "High-grade golden metal frame pilot aviator sunglasses featuring refined craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000237",
    "name": "Accessories - Tarnish-Free Cashmere-Touch Brushed Winter Scarf Edition 6",
    "price": 691,
    "description": "High-grade cashmere-touch brushed winter scarf featuring tarnish-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000238",
    "name": "Accessories - Lightweight Pop-Up Minimalist Aluminum Cardholder Edition 6",
    "price": 578,
    "description": "High-grade pop-up minimalist aluminum cardholder featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000239",
    "name": "Accessories - Signature Comfort-Fit Matte Titanium Steel Ring Edition 6",
    "price": 465,
    "description": "High-grade comfort-fit matte titanium steel ring featuring signature craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200023a",
    "name": "Accessories - Timeless Satin Silk Square Floral Bandana Scarf Edition 6",
    "price": 552,
    "description": "High-grade satin silk square floral bandana scarf featuring timeless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200023b",
    "name": "Accessories - Flexible Ribbed Knit Thermal Slouchy Beanie Edition 6",
    "price": 439,
    "description": "High-grade ribbed knit thermal slouchy beanie featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200023c",
    "name": "Accessories - Polished Braided Heavy-Duty Zinc Keyring Chain Edition 6",
    "price": 376,
    "description": "High-grade braided heavy-duty zinc keyring chain featuring polished craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200023d",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses Edition 7",
    "price": 913,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200023e",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet Edition 7",
    "price": 750,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200023f",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt Edition 7",
    "price": 587,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000240",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet Edition 7",
    "price": 524,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000241",
    "name": "Accessories - Matte-Finish Adjustable Washed Cotton Baseball Cap Edition 7",
    "price": 461,
    "description": "High-grade adjustable washed cotton baseball cap featuring matte-finish craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000242",
    "name": "Accessories - Refined Golden Metal Frame Pilot Aviator Sunglasses Edition 7",
    "price": 998,
    "description": "High-grade golden metal frame pilot aviator sunglasses featuring refined craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000243",
    "name": "Accessories - Tarnish-Free Cashmere-Touch Brushed Winter Scarf Edition 7",
    "price": 835,
    "description": "High-grade cashmere-touch brushed winter scarf featuring tarnish-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000244",
    "name": "Accessories - Lightweight Pop-Up Minimalist Aluminum Cardholder Edition 7",
    "price": 722,
    "description": "High-grade pop-up minimalist aluminum cardholder featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000245",
    "name": "Accessories - Signature Comfort-Fit Matte Titanium Steel Ring Edition 7",
    "price": 609,
    "description": "High-grade comfort-fit matte titanium steel ring featuring signature craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000246",
    "name": "Accessories - Timeless Satin Silk Square Floral Bandana Scarf Edition 7",
    "price": 696,
    "description": "High-grade satin silk square floral bandana scarf featuring timeless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000247",
    "name": "Accessories - Flexible Ribbed Knit Thermal Slouchy Beanie Edition 7",
    "price": 283,
    "description": "High-grade ribbed knit thermal slouchy beanie featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000248",
    "name": "Accessories - Polished Braided Heavy-Duty Zinc Keyring Chain Edition 7",
    "price": 220,
    "description": "High-grade braided heavy-duty zinc keyring chain featuring polished craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000249",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses Edition 8",
    "price": 757,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200024a",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet Edition 8",
    "price": 894,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200024b",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt Edition 8",
    "price": 731,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200024c",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet Edition 8",
    "price": 668,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200024d",
    "name": "Accessories - Matte-Finish Adjustable Washed Cotton Baseball Cap Edition 8",
    "price": 605,
    "description": "High-grade adjustable washed cotton baseball cap featuring matte-finish craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200024e",
    "name": "Accessories - Refined Golden Metal Frame Pilot Aviator Sunglasses Edition 8",
    "price": 1142,
    "description": "High-grade golden metal frame pilot aviator sunglasses featuring refined craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200024f",
    "name": "Accessories - Tarnish-Free Cashmere-Touch Brushed Winter Scarf Edition 8",
    "price": 679,
    "description": "High-grade cashmere-touch brushed winter scarf featuring tarnish-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000250",
    "name": "Accessories - Lightweight Pop-Up Minimalist Aluminum Cardholder Edition 8",
    "price": 566,
    "description": "High-grade pop-up minimalist aluminum cardholder featuring lightweight craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000251",
    "name": "Accessories - Signature Comfort-Fit Matte Titanium Steel Ring Edition 8",
    "price": 453,
    "description": "High-grade comfort-fit matte titanium steel ring featuring signature craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000252",
    "name": "Accessories - Timeless Satin Silk Square Floral Bandana Scarf Edition 8",
    "price": 540,
    "description": "High-grade satin silk square floral bandana scarf featuring timeless craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000253",
    "name": "Accessories - Flexible Ribbed Knit Thermal Slouchy Beanie Edition 8",
    "price": 427,
    "description": "High-grade ribbed knit thermal slouchy beanie featuring flexible craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000254",
    "name": "Accessories - Polished Braided Heavy-Duty Zinc Keyring Chain Edition 8",
    "price": 364,
    "description": "High-grade braided heavy-duty zinc keyring chain featuring polished craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000255",
    "name": "Accessories - UV-Blocking Polarized Anti-Glare Wayfarer Sunglasses Edition 9",
    "price": 901,
    "description": "High-grade polarized anti-glare wayfarer sunglasses featuring uv-blocking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000256",
    "name": "Accessories - Handcrafted RFID Shield Bifold Genuine Leather Wallet Edition 9",
    "price": 1038,
    "description": "High-grade rfid shield bifold genuine leather wallet featuring handcrafted craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000257",
    "name": "Accessories - Sleek Reversible Dual-Color Formal Leather Belt Edition 9",
    "price": 575,
    "description": "High-grade reversible dual-color formal leather belt featuring sleek craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000258",
    "name": "Accessories - Premium Tarnish-Resistant Silver Cuban Link Bracelet Edition 9",
    "price": 512,
    "description": "High-grade tarnish-resistant silver cuban link bracelet featuring premium craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    "category": "Accessories",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000259",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set",
    "price": 749,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200025a",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car",
    "price": 1386,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200025b",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear",
    "price": 923,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200025c",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet",
    "price": 460,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200025d",
    "name": "Kids & Toys - STEM Wooden Geometric Montessori Shape Puzzle",
    "price": 647,
    "description": "High-grade wooden geometric montessori shape puzzle featuring stem craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200025e",
    "name": "Kids & Toys - Fun Translucent 3D Magnetic Castle Building Tiles",
    "price": 1334,
    "description": "High-grade translucent 3d magnetic castle building tiles featuring fun craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200025f",
    "name": "Kids & Toys - Durable Die-Cast Aerodynamic Metal Sports Cars Pack",
    "price": 671,
    "description": "High-grade die-cast aerodynamic metal sports cars pack featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000260",
    "name": "Kids & Toys - Colorful Interactive Musical Dancing Smart Robot",
    "price": 908,
    "description": "High-grade interactive musical dancing smart robot featuring colorful craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000261",
    "name": "Kids & Toys - Sensory Moldable Non-Sticky Sensory Sand Play Kit",
    "price": 695,
    "description": "High-grade moldable non-sticky sensory sand play kit featuring sensory craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000262",
    "name": "Kids & Toys - Brain-Teaser Pretend Play Medical Doctor Clinic Set",
    "price": 582,
    "description": "High-grade pretend play medical doctor clinic set featuring brain-teaser craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000263",
    "name": "Kids & Toys - Musical DIY Motorized Solar System Planetarium Kit",
    "price": 769,
    "description": "High-grade diy motorized solar system planetarium kit featuring musical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1618842676087-59f828a1be53?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000264",
    "name": "Kids & Toys - Motor-Skills High-Speed Stickerless 3x3 Magic Speed Cube",
    "price": 306,
    "description": "High-grade high-speed stickerless 3x3 magic speed cube featuring motor-skills craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1568205612207-a25ab2698b77?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000265",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set Edition 2",
    "price": 893,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000266",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car Edition 2",
    "price": 1530,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000267",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear Edition 2",
    "price": 1067,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000268",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet Edition 2",
    "price": 604,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000269",
    "name": "Kids & Toys - STEM Wooden Geometric Montessori Shape Puzzle Edition 2",
    "price": 791,
    "description": "High-grade wooden geometric montessori shape puzzle featuring stem craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200026a",
    "name": "Kids & Toys - Fun Translucent 3D Magnetic Castle Building Tiles Edition 2",
    "price": 1178,
    "description": "High-grade translucent 3d magnetic castle building tiles featuring fun craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200026b",
    "name": "Kids & Toys - Durable Die-Cast Aerodynamic Metal Sports Cars Pack Edition 2",
    "price": 515,
    "description": "High-grade die-cast aerodynamic metal sports cars pack featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200026c",
    "name": "Kids & Toys - Colorful Interactive Musical Dancing Smart Robot Edition 2",
    "price": 752,
    "description": "High-grade interactive musical dancing smart robot featuring colorful craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200026d",
    "name": "Kids & Toys - Sensory Moldable Non-Sticky Sensory Sand Play Kit Edition 2",
    "price": 539,
    "description": "High-grade moldable non-sticky sensory sand play kit featuring sensory craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200026e",
    "name": "Kids & Toys - Brain-Teaser Pretend Play Medical Doctor Clinic Set Edition 2",
    "price": 726,
    "description": "High-grade pretend play medical doctor clinic set featuring brain-teaser craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200026f",
    "name": "Kids & Toys - Musical DIY Motorized Solar System Planetarium Kit Edition 2",
    "price": 913,
    "description": "High-grade diy motorized solar system planetarium kit featuring musical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1618842676087-59f828a1be53?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000270",
    "name": "Kids & Toys - Motor-Skills High-Speed Stickerless 3x3 Magic Speed Cube Edition 2",
    "price": 450,
    "description": "High-grade high-speed stickerless 3x3 magic speed cube featuring motor-skills craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1568205612207-a25ab2698b77?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000271",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set Edition 3",
    "price": 1037,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000272",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car Edition 3",
    "price": 1374,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000273",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear Edition 3",
    "price": 911,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000274",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet Edition 3",
    "price": 448,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000275",
    "name": "Kids & Toys - STEM Wooden Geometric Montessori Shape Puzzle Edition 3",
    "price": 635,
    "description": "High-grade wooden geometric montessori shape puzzle featuring stem craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000276",
    "name": "Kids & Toys - Fun Translucent 3D Magnetic Castle Building Tiles Edition 3",
    "price": 1322,
    "description": "High-grade translucent 3d magnetic castle building tiles featuring fun craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000277",
    "name": "Kids & Toys - Durable Die-Cast Aerodynamic Metal Sports Cars Pack Edition 3",
    "price": 659,
    "description": "High-grade die-cast aerodynamic metal sports cars pack featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000278",
    "name": "Kids & Toys - Colorful Interactive Musical Dancing Smart Robot Edition 3",
    "price": 896,
    "description": "High-grade interactive musical dancing smart robot featuring colorful craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000279",
    "name": "Kids & Toys - Sensory Moldable Non-Sticky Sensory Sand Play Kit Edition 3",
    "price": 683,
    "description": "High-grade moldable non-sticky sensory sand play kit featuring sensory craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200027a",
    "name": "Kids & Toys - Brain-Teaser Pretend Play Medical Doctor Clinic Set Edition 3",
    "price": 570,
    "description": "High-grade pretend play medical doctor clinic set featuring brain-teaser craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200027b",
    "name": "Kids & Toys - Musical DIY Motorized Solar System Planetarium Kit Edition 3",
    "price": 757,
    "description": "High-grade diy motorized solar system planetarium kit featuring musical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1618842676087-59f828a1be53?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200027c",
    "name": "Kids & Toys - Motor-Skills High-Speed Stickerless 3x3 Magic Speed Cube Edition 3",
    "price": 294,
    "description": "High-grade high-speed stickerless 3x3 magic speed cube featuring motor-skills craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1568205612207-a25ab2698b77?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200027d",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set Edition 4",
    "price": 881,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200027e",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car Edition 4",
    "price": 1518,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200027f",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear Edition 4",
    "price": 1055,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000280",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet Edition 4",
    "price": 592,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000281",
    "name": "Kids & Toys - STEM Wooden Geometric Montessori Shape Puzzle Edition 4",
    "price": 779,
    "description": "High-grade wooden geometric montessori shape puzzle featuring stem craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000282",
    "name": "Kids & Toys - Fun Translucent 3D Magnetic Castle Building Tiles Edition 4",
    "price": 1166,
    "description": "High-grade translucent 3d magnetic castle building tiles featuring fun craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000283",
    "name": "Kids & Toys - Durable Die-Cast Aerodynamic Metal Sports Cars Pack Edition 4",
    "price": 503,
    "description": "High-grade die-cast aerodynamic metal sports cars pack featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000284",
    "name": "Kids & Toys - Colorful Interactive Musical Dancing Smart Robot Edition 4",
    "price": 740,
    "description": "High-grade interactive musical dancing smart robot featuring colorful craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000285",
    "name": "Kids & Toys - Sensory Moldable Non-Sticky Sensory Sand Play Kit Edition 4",
    "price": 527,
    "description": "High-grade moldable non-sticky sensory sand play kit featuring sensory craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000286",
    "name": "Kids & Toys - Brain-Teaser Pretend Play Medical Doctor Clinic Set Edition 4",
    "price": 714,
    "description": "High-grade pretend play medical doctor clinic set featuring brain-teaser craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000287",
    "name": "Kids & Toys - Musical DIY Motorized Solar System Planetarium Kit Edition 4",
    "price": 901,
    "description": "High-grade diy motorized solar system planetarium kit featuring musical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1618842676087-59f828a1be53?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000288",
    "name": "Kids & Toys - Motor-Skills High-Speed Stickerless 3x3 Magic Speed Cube Edition 4",
    "price": 438,
    "description": "High-grade high-speed stickerless 3x3 magic speed cube featuring motor-skills craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1568205612207-a25ab2698b77?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000289",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set Edition 5",
    "price": 1025,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200028a",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car Edition 5",
    "price": 1362,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200028b",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear Edition 5",
    "price": 899,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200028c",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet Edition 5",
    "price": 436,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200028d",
    "name": "Kids & Toys - STEM Wooden Geometric Montessori Shape Puzzle Edition 5",
    "price": 623,
    "description": "High-grade wooden geometric montessori shape puzzle featuring stem craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200028e",
    "name": "Kids & Toys - Fun Translucent 3D Magnetic Castle Building Tiles Edition 5",
    "price": 1310,
    "description": "High-grade translucent 3d magnetic castle building tiles featuring fun craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200028f",
    "name": "Kids & Toys - Durable Die-Cast Aerodynamic Metal Sports Cars Pack Edition 5",
    "price": 647,
    "description": "High-grade die-cast aerodynamic metal sports cars pack featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000290",
    "name": "Kids & Toys - Colorful Interactive Musical Dancing Smart Robot Edition 5",
    "price": 884,
    "description": "High-grade interactive musical dancing smart robot featuring colorful craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000291",
    "name": "Kids & Toys - Sensory Moldable Non-Sticky Sensory Sand Play Kit Edition 5",
    "price": 671,
    "description": "High-grade moldable non-sticky sensory sand play kit featuring sensory craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000292",
    "name": "Kids & Toys - Brain-Teaser Pretend Play Medical Doctor Clinic Set Edition 5",
    "price": 558,
    "description": "High-grade pretend play medical doctor clinic set featuring brain-teaser craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000293",
    "name": "Kids & Toys - Musical DIY Motorized Solar System Planetarium Kit Edition 5",
    "price": 745,
    "description": "High-grade diy motorized solar system planetarium kit featuring musical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1618842676087-59f828a1be53?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000294",
    "name": "Kids & Toys - Motor-Skills High-Speed Stickerless 3x3 Magic Speed Cube Edition 5",
    "price": 282,
    "description": "High-grade high-speed stickerless 3x3 magic speed cube featuring motor-skills craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1568205612207-a25ab2698b77?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000295",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set Edition 6",
    "price": 869,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000296",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car Edition 6",
    "price": 1506,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000297",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear Edition 6",
    "price": 1043,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000298",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet Edition 6",
    "price": 580,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000299",
    "name": "Kids & Toys - STEM Wooden Geometric Montessori Shape Puzzle Edition 6",
    "price": 767,
    "description": "High-grade wooden geometric montessori shape puzzle featuring stem craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200029a",
    "name": "Kids & Toys - Fun Translucent 3D Magnetic Castle Building Tiles Edition 6",
    "price": 1154,
    "description": "High-grade translucent 3d magnetic castle building tiles featuring fun craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200029b",
    "name": "Kids & Toys - Durable Die-Cast Aerodynamic Metal Sports Cars Pack Edition 6",
    "price": 491,
    "description": "High-grade die-cast aerodynamic metal sports cars pack featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200029c",
    "name": "Kids & Toys - Colorful Interactive Musical Dancing Smart Robot Edition 6",
    "price": 728,
    "description": "High-grade interactive musical dancing smart robot featuring colorful craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200029d",
    "name": "Kids & Toys - Sensory Moldable Non-Sticky Sensory Sand Play Kit Edition 6",
    "price": 515,
    "description": "High-grade moldable non-sticky sensory sand play kit featuring sensory craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200029e",
    "name": "Kids & Toys - Brain-Teaser Pretend Play Medical Doctor Clinic Set Edition 6",
    "price": 702,
    "description": "High-grade pretend play medical doctor clinic set featuring brain-teaser craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200029f",
    "name": "Kids & Toys - Musical DIY Motorized Solar System Planetarium Kit Edition 6",
    "price": 889,
    "description": "High-grade diy motorized solar system planetarium kit featuring musical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1618842676087-59f828a1be53?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002a0",
    "name": "Kids & Toys - Motor-Skills High-Speed Stickerless 3x3 Magic Speed Cube Edition 6",
    "price": 426,
    "description": "High-grade high-speed stickerless 3x3 magic speed cube featuring motor-skills craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1568205612207-a25ab2698b77?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002a1",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set Edition 7",
    "price": 1013,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002a2",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car Edition 7",
    "price": 1350,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002a3",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear Edition 7",
    "price": 887,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002a4",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet Edition 7",
    "price": 424,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002a5",
    "name": "Kids & Toys - STEM Wooden Geometric Montessori Shape Puzzle Edition 7",
    "price": 611,
    "description": "High-grade wooden geometric montessori shape puzzle featuring stem craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002a6",
    "name": "Kids & Toys - Fun Translucent 3D Magnetic Castle Building Tiles Edition 7",
    "price": 1298,
    "description": "High-grade translucent 3d magnetic castle building tiles featuring fun craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002a7",
    "name": "Kids & Toys - Durable Die-Cast Aerodynamic Metal Sports Cars Pack Edition 7",
    "price": 635,
    "description": "High-grade die-cast aerodynamic metal sports cars pack featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002a8",
    "name": "Kids & Toys - Colorful Interactive Musical Dancing Smart Robot Edition 7",
    "price": 872,
    "description": "High-grade interactive musical dancing smart robot featuring colorful craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002a9",
    "name": "Kids & Toys - Sensory Moldable Non-Sticky Sensory Sand Play Kit Edition 7",
    "price": 659,
    "description": "High-grade moldable non-sticky sensory sand play kit featuring sensory craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002aa",
    "name": "Kids & Toys - Brain-Teaser Pretend Play Medical Doctor Clinic Set Edition 7",
    "price": 846,
    "description": "High-grade pretend play medical doctor clinic set featuring brain-teaser craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002ab",
    "name": "Kids & Toys - Musical DIY Motorized Solar System Planetarium Kit Edition 7",
    "price": 733,
    "description": "High-grade diy motorized solar system planetarium kit featuring musical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1618842676087-59f828a1be53?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002ac",
    "name": "Kids & Toys - Motor-Skills High-Speed Stickerless 3x3 Magic Speed Cube Edition 7",
    "price": 270,
    "description": "High-grade high-speed stickerless 3x3 magic speed cube featuring motor-skills craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1568205612207-a25ab2698b77?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002ad",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set Edition 8",
    "price": 857,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002ae",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car Edition 8",
    "price": 1494,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002af",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear Edition 8",
    "price": 1031,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002b0",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet Edition 8",
    "price": 568,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002b1",
    "name": "Kids & Toys - STEM Wooden Geometric Montessori Shape Puzzle Edition 8",
    "price": 755,
    "description": "High-grade wooden geometric montessori shape puzzle featuring stem craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002b2",
    "name": "Kids & Toys - Fun Translucent 3D Magnetic Castle Building Tiles Edition 8",
    "price": 1442,
    "description": "High-grade translucent 3d magnetic castle building tiles featuring fun craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002b3",
    "name": "Kids & Toys - Durable Die-Cast Aerodynamic Metal Sports Cars Pack Edition 8",
    "price": 479,
    "description": "High-grade die-cast aerodynamic metal sports cars pack featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002b4",
    "name": "Kids & Toys - Colorful Interactive Musical Dancing Smart Robot Edition 8",
    "price": 716,
    "description": "High-grade interactive musical dancing smart robot featuring colorful craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002b5",
    "name": "Kids & Toys - Sensory Moldable Non-Sticky Sensory Sand Play Kit Edition 8",
    "price": 503,
    "description": "High-grade moldable non-sticky sensory sand play kit featuring sensory craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002b6",
    "name": "Kids & Toys - Brain-Teaser Pretend Play Medical Doctor Clinic Set Edition 8",
    "price": 690,
    "description": "High-grade pretend play medical doctor clinic set featuring brain-teaser craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002b7",
    "name": "Kids & Toys - Musical DIY Motorized Solar System Planetarium Kit Edition 8",
    "price": 877,
    "description": "High-grade diy motorized solar system planetarium kit featuring musical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1618842676087-59f828a1be53?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002b8",
    "name": "Kids & Toys - Motor-Skills High-Speed Stickerless 3x3 Magic Speed Cube Edition 8",
    "price": 414,
    "description": "High-grade high-speed stickerless 3x3 magic speed cube featuring motor-skills craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1568205612207-a25ab2698b77?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002b9",
    "name": "Kids & Toys - Educational Creative STEM Building Bricks Block Set Edition 9",
    "price": 1001,
    "description": "High-grade creative stem building bricks block set featuring educational craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002ba",
    "name": "Kids & Toys - Safe & Non-Toxic 4WD All-Terrain Remote Control Stunt Car Edition 9",
    "price": 1638,
    "description": "High-grade 4wd all-terrain remote control stunt car featuring safe & non-toxic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002bb",
    "name": "Kids & Toys - Creative Fluffy Hypoallergenic Cuddle Teddy Bear Edition 9",
    "price": 875,
    "description": "High-grade fluffy hypoallergenic cuddle teddy bear featuring creative craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002bc",
    "name": "Kids & Toys - Interactive Color Screen LCD Writing & Drawing Tablet Edition 9",
    "price": 412,
    "description": "High-grade color screen lcd writing & drawing tablet featuring interactive craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
    "category": "Kids & Toys",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002bd",
    "name": "Books - International Bestseller Atomic Habits by James Clear",
    "price": 349,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002be",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel",
    "price": 286,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002bf",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship",
    "price": 823,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002c0",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success",
    "price": 410,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002c1",
    "name": "Books - Deluxe Edition Ikigai: The Japanese Secret to a Long Life",
    "price": 347,
    "description": "High-grade ikigai: the japanese secret to a long life featuring deluxe edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002c2",
    "name": "Books - Thought-Provoking Sapiens: A Brief History of Humankind",
    "price": 584,
    "description": "High-grade sapiens: a brief history of humankind featuring thought-provoking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002c3",
    "name": "Books - Self-Development The Alchemist by Paulo Coelho",
    "price": 371,
    "description": "High-grade the alchemist by paulo coelho featuring self-development craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002c4",
    "name": "Books - Philosophical Rich Dad Poor Dad by Robert Kiyosaki",
    "price": 508,
    "description": "High-grade rich dad poor dad by robert kiyosaki featuring philosophical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002c5",
    "name": "Books - Masterpiece Designing Data-Intensive Applications",
    "price": 1145,
    "description": "High-grade designing data-intensive applications featuring masterpiece craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002c6",
    "name": "Books - Award-Winning The Courage to Be Disliked",
    "price": 312,
    "description": "High-grade the courage to be disliked featuring award-winning craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002c7",
    "name": "Books - Revised Edition Mindset: The New Psychology of Success",
    "price": 399,
    "description": "High-grade mindset: the new psychology of success featuring revised edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002c8",
    "name": "Books - Guidebook Bamboo Paper Hardcover Dot Grid Journal",
    "price": 306,
    "description": "High-grade bamboo paper hardcover dot grid journal featuring guidebook craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002c9",
    "name": "Books - International Bestseller Atomic Habits by James Clear Edition 2",
    "price": 493,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002ca",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel Edition 2",
    "price": 430,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002cb",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship Edition 2",
    "price": 967,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002cc",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success Edition 2",
    "price": 554,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002cd",
    "name": "Books - Deluxe Edition Ikigai: The Japanese Secret to a Long Life Edition 2",
    "price": 491,
    "description": "High-grade ikigai: the japanese secret to a long life featuring deluxe edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002ce",
    "name": "Books - Thought-Provoking Sapiens: A Brief History of Humankind Edition 2",
    "price": 428,
    "description": "High-grade sapiens: a brief history of humankind featuring thought-provoking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002cf",
    "name": "Books - Self-Development The Alchemist by Paulo Coelho Edition 2",
    "price": 215,
    "description": "High-grade the alchemist by paulo coelho featuring self-development craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002d0",
    "name": "Books - Philosophical Rich Dad Poor Dad by Robert Kiyosaki Edition 2",
    "price": 352,
    "description": "High-grade rich dad poor dad by robert kiyosaki featuring philosophical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002d1",
    "name": "Books - Masterpiece Designing Data-Intensive Applications Edition 2",
    "price": 989,
    "description": "High-grade designing data-intensive applications featuring masterpiece craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002d2",
    "name": "Books - Award-Winning The Courage to Be Disliked Edition 2",
    "price": 456,
    "description": "High-grade the courage to be disliked featuring award-winning craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002d3",
    "name": "Books - Revised Edition Mindset: The New Psychology of Success Edition 2",
    "price": 543,
    "description": "High-grade mindset: the new psychology of success featuring revised edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002d4",
    "name": "Books - Guidebook Bamboo Paper Hardcover Dot Grid Journal Edition 2",
    "price": 450,
    "description": "High-grade bamboo paper hardcover dot grid journal featuring guidebook craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002d5",
    "name": "Books - International Bestseller Atomic Habits by James Clear Edition 3",
    "price": 637,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002d6",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel Edition 3",
    "price": 274,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002d7",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship Edition 3",
    "price": 811,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002d8",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success Edition 3",
    "price": 398,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002d9",
    "name": "Books - Deluxe Edition Ikigai: The Japanese Secret to a Long Life Edition 3",
    "price": 335,
    "description": "High-grade ikigai: the japanese secret to a long life featuring deluxe edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002da",
    "name": "Books - Thought-Provoking Sapiens: A Brief History of Humankind Edition 3",
    "price": 572,
    "description": "High-grade sapiens: a brief history of humankind featuring thought-provoking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002db",
    "name": "Books - Self-Development The Alchemist by Paulo Coelho Edition 3",
    "price": 359,
    "description": "High-grade the alchemist by paulo coelho featuring self-development craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002dc",
    "name": "Books - Philosophical Rich Dad Poor Dad by Robert Kiyosaki Edition 3",
    "price": 496,
    "description": "High-grade rich dad poor dad by robert kiyosaki featuring philosophical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002dd",
    "name": "Books - Masterpiece Designing Data-Intensive Applications Edition 3",
    "price": 1133,
    "description": "High-grade designing data-intensive applications featuring masterpiece craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002de",
    "name": "Books - Award-Winning The Courage to Be Disliked Edition 3",
    "price": 300,
    "description": "High-grade the courage to be disliked featuring award-winning craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002df",
    "name": "Books - Revised Edition Mindset: The New Psychology of Success Edition 3",
    "price": 387,
    "description": "High-grade mindset: the new psychology of success featuring revised edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002e0",
    "name": "Books - Guidebook Bamboo Paper Hardcover Dot Grid Journal Edition 3",
    "price": 294,
    "description": "High-grade bamboo paper hardcover dot grid journal featuring guidebook craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002e1",
    "name": "Books - International Bestseller Atomic Habits by James Clear Edition 4",
    "price": 481,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002e2",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel Edition 4",
    "price": 418,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002e3",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship Edition 4",
    "price": 955,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002e4",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success Edition 4",
    "price": 542,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002e5",
    "name": "Books - Deluxe Edition Ikigai: The Japanese Secret to a Long Life Edition 4",
    "price": 479,
    "description": "High-grade ikigai: the japanese secret to a long life featuring deluxe edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002e6",
    "name": "Books - Thought-Provoking Sapiens: A Brief History of Humankind Edition 4",
    "price": 416,
    "description": "High-grade sapiens: a brief history of humankind featuring thought-provoking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002e7",
    "name": "Books - Self-Development The Alchemist by Paulo Coelho Edition 4",
    "price": 203,
    "description": "High-grade the alchemist by paulo coelho featuring self-development craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002e8",
    "name": "Books - Philosophical Rich Dad Poor Dad by Robert Kiyosaki Edition 4",
    "price": 340,
    "description": "High-grade rich dad poor dad by robert kiyosaki featuring philosophical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002e9",
    "name": "Books - Masterpiece Designing Data-Intensive Applications Edition 4",
    "price": 977,
    "description": "High-grade designing data-intensive applications featuring masterpiece craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002ea",
    "name": "Books - Award-Winning The Courage to Be Disliked Edition 4",
    "price": 444,
    "description": "High-grade the courage to be disliked featuring award-winning craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002eb",
    "name": "Books - Revised Edition Mindset: The New Psychology of Success Edition 4",
    "price": 531,
    "description": "High-grade mindset: the new psychology of success featuring revised edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002ec",
    "name": "Books - Guidebook Bamboo Paper Hardcover Dot Grid Journal Edition 4",
    "price": 438,
    "description": "High-grade bamboo paper hardcover dot grid journal featuring guidebook craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002ed",
    "name": "Books - International Bestseller Atomic Habits by James Clear Edition 5",
    "price": 625,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002ee",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel Edition 5",
    "price": 262,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002ef",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship Edition 5",
    "price": 799,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002f0",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success Edition 5",
    "price": 386,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002f1",
    "name": "Books - Deluxe Edition Ikigai: The Japanese Secret to a Long Life Edition 5",
    "price": 323,
    "description": "High-grade ikigai: the japanese secret to a long life featuring deluxe edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002f2",
    "name": "Books - Thought-Provoking Sapiens: A Brief History of Humankind Edition 5",
    "price": 560,
    "description": "High-grade sapiens: a brief history of humankind featuring thought-provoking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002f3",
    "name": "Books - Self-Development The Alchemist by Paulo Coelho Edition 5",
    "price": 347,
    "description": "High-grade the alchemist by paulo coelho featuring self-development craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002f4",
    "name": "Books - Philosophical Rich Dad Poor Dad by Robert Kiyosaki Edition 5",
    "price": 484,
    "description": "High-grade rich dad poor dad by robert kiyosaki featuring philosophical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002f5",
    "name": "Books - Masterpiece Designing Data-Intensive Applications Edition 5",
    "price": 1121,
    "description": "High-grade designing data-intensive applications featuring masterpiece craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002f6",
    "name": "Books - Award-Winning The Courage to Be Disliked Edition 5",
    "price": 288,
    "description": "High-grade the courage to be disliked featuring award-winning craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e20002f7",
    "name": "Books - Revised Edition Mindset: The New Psychology of Success Edition 5",
    "price": 375,
    "description": "High-grade mindset: the new psychology of success featuring revised edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e20002f8",
    "name": "Books - Guidebook Bamboo Paper Hardcover Dot Grid Journal Edition 5",
    "price": 282,
    "description": "High-grade bamboo paper hardcover dot grid journal featuring guidebook craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e20002f9",
    "name": "Books - International Bestseller Atomic Habits by James Clear Edition 6",
    "price": 469,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e20002fa",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel Edition 6",
    "price": 406,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e20002fb",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship Edition 6",
    "price": 943,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e20002fc",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success Edition 6",
    "price": 530,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e20002fd",
    "name": "Books - Deluxe Edition Ikigai: The Japanese Secret to a Long Life Edition 6",
    "price": 467,
    "description": "High-grade ikigai: the japanese secret to a long life featuring deluxe edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e20002fe",
    "name": "Books - Thought-Provoking Sapiens: A Brief History of Humankind Edition 6",
    "price": 404,
    "description": "High-grade sapiens: a brief history of humankind featuring thought-provoking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e20002ff",
    "name": "Books - Self-Development The Alchemist by Paulo Coelho Edition 6",
    "price": 199,
    "description": "High-grade the alchemist by paulo coelho featuring self-development craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000300",
    "name": "Books - Philosophical Rich Dad Poor Dad by Robert Kiyosaki Edition 6",
    "price": 328,
    "description": "High-grade rich dad poor dad by robert kiyosaki featuring philosophical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000301",
    "name": "Books - Masterpiece Designing Data-Intensive Applications Edition 6",
    "price": 965,
    "description": "High-grade designing data-intensive applications featuring masterpiece craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000302",
    "name": "Books - Award-Winning The Courage to Be Disliked Edition 6",
    "price": 432,
    "description": "High-grade the courage to be disliked featuring award-winning craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000303",
    "name": "Books - Revised Edition Mindset: The New Psychology of Success Edition 6",
    "price": 519,
    "description": "High-grade mindset: the new psychology of success featuring revised edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000304",
    "name": "Books - Guidebook Bamboo Paper Hardcover Dot Grid Journal Edition 6",
    "price": 426,
    "description": "High-grade bamboo paper hardcover dot grid journal featuring guidebook craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000305",
    "name": "Books - International Bestseller Atomic Habits by James Clear Edition 7",
    "price": 613,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000306",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel Edition 7",
    "price": 250,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000307",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship Edition 7",
    "price": 787,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000308",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success Edition 7",
    "price": 374,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000309",
    "name": "Books - Deluxe Edition Ikigai: The Japanese Secret to a Long Life Edition 7",
    "price": 311,
    "description": "High-grade ikigai: the japanese secret to a long life featuring deluxe edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200030a",
    "name": "Books - Thought-Provoking Sapiens: A Brief History of Humankind Edition 7",
    "price": 548,
    "description": "High-grade sapiens: a brief history of humankind featuring thought-provoking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200030b",
    "name": "Books - Self-Development The Alchemist by Paulo Coelho Edition 7",
    "price": 335,
    "description": "High-grade the alchemist by paulo coelho featuring self-development craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200030c",
    "name": "Books - Philosophical Rich Dad Poor Dad by Robert Kiyosaki Edition 7",
    "price": 472,
    "description": "High-grade rich dad poor dad by robert kiyosaki featuring philosophical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200030d",
    "name": "Books - Masterpiece Designing Data-Intensive Applications Edition 7",
    "price": 1109,
    "description": "High-grade designing data-intensive applications featuring masterpiece craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200030e",
    "name": "Books - Award-Winning The Courage to Be Disliked Edition 7",
    "price": 576,
    "description": "High-grade the courage to be disliked featuring award-winning craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200030f",
    "name": "Books - Revised Edition Mindset: The New Psychology of Success Edition 7",
    "price": 363,
    "description": "High-grade mindset: the new psychology of success featuring revised edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000310",
    "name": "Books - Guidebook Bamboo Paper Hardcover Dot Grid Journal Edition 7",
    "price": 270,
    "description": "High-grade bamboo paper hardcover dot grid journal featuring guidebook craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000311",
    "name": "Books - International Bestseller Atomic Habits by James Clear Edition 8",
    "price": 457,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000312",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel Edition 8",
    "price": 394,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000313",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship Edition 8",
    "price": 931,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000314",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success Edition 8",
    "price": 518,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000315",
    "name": "Books - Deluxe Edition Ikigai: The Japanese Secret to a Long Life Edition 8",
    "price": 455,
    "description": "High-grade ikigai: the japanese secret to a long life featuring deluxe edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000316",
    "name": "Books - Thought-Provoking Sapiens: A Brief History of Humankind Edition 8",
    "price": 692,
    "description": "High-grade sapiens: a brief history of humankind featuring thought-provoking craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000317",
    "name": "Books - Self-Development The Alchemist by Paulo Coelho Edition 8",
    "price": 199,
    "description": "High-grade the alchemist by paulo coelho featuring self-development craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000318",
    "name": "Books - Philosophical Rich Dad Poor Dad by Robert Kiyosaki Edition 8",
    "price": 316,
    "description": "High-grade rich dad poor dad by robert kiyosaki featuring philosophical craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000319",
    "name": "Books - Masterpiece Designing Data-Intensive Applications Edition 8",
    "price": 953,
    "description": "High-grade designing data-intensive applications featuring masterpiece craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200031a",
    "name": "Books - Award-Winning The Courage to Be Disliked Edition 8",
    "price": 420,
    "description": "High-grade the courage to be disliked featuring award-winning craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200031b",
    "name": "Books - Revised Edition Mindset: The New Psychology of Success Edition 8",
    "price": 507,
    "description": "High-grade mindset: the new psychology of success featuring revised edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200031c",
    "name": "Books - Guidebook Bamboo Paper Hardcover Dot Grid Journal Edition 8",
    "price": 414,
    "description": "High-grade bamboo paper hardcover dot grid journal featuring guidebook craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200031d",
    "name": "Books - International Bestseller Atomic Habits by James Clear Edition 9",
    "price": 601,
    "description": "High-grade atomic habits by james clear featuring international bestseller craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200031e",
    "name": "Books - Hardcover The Psychology of Money by Morgan Housel Edition 9",
    "price": 538,
    "description": "High-grade the psychology of money by morgan housel featuring hardcover craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200031f",
    "name": "Books - Illustrated Edition Clean Code: Agile Software Craftsmanship Edition 9",
    "price": 775,
    "description": "High-grade clean code: agile software craftsmanship featuring illustrated edition craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000320",
    "name": "Books - Essential Reading Deep Work: Rules for Focused Success Edition 9",
    "price": 362,
    "description": "High-grade deep work: rules for focused success featuring essential reading craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    "category": "Books",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000321",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser",
    "price": 1049,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000322",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock",
    "price": 786,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000323",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler",
    "price": 623,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000324",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2)",
    "price": 560,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000325",
    "name": "Home - Minimalist Luxury Solid Velvet Throw Pillow Covers (Pair)",
    "price": 497,
    "description": "High-grade luxury solid velvet throw pillow covers (pair) featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000326",
    "name": "Home - Nordic Porcelain Succulent Planter with Metal Stand",
    "price": 484,
    "description": "High-grade porcelain succulent planter with metal stand featuring nordic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000327",
    "name": "Home - Plush Lavender & Amber Natural Soy Scented Candle",
    "price": 621,
    "description": "High-grade lavender & amber natural soy scented candle featuring plush craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000328",
    "name": "Home - Durable Quick-Dry 600 GSM Bamboo Fiber Bath Towel",
    "price": 758,
    "description": "High-grade quick-dry 600 gsm bamboo fiber bath towel featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000329",
    "name": "Home - Elegant Heavy-Duty 10-Inch Pre-Seasoned Cast Iron Skillet",
    "price": 1445,
    "description": "High-grade heavy-duty 10-inch pre-seasoned cast iron skillet featuring elegant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584990347449-397a68393fa1?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200032a",
    "name": "Home - Cozy Borosilicate Glass French Press Coffee Maker",
    "price": 782,
    "description": "High-grade borosilicate glass french press coffee maker featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200032b",
    "name": "Home - Compact Warm White Copper Wire Decorative Fairy Lights",
    "price": 269,
    "description": "High-grade warm white copper wire decorative fairy lights featuring compact craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200032c",
    "name": "Home - Heat-Resistant Contour Orthopedic Memory Foam Sleeping Pillow",
    "price": 1356,
    "description": "High-grade contour orthopedic memory foam sleeping pillow featuring heat-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200032d",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser Edition 2",
    "price": 1193,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200032e",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock Edition 2",
    "price": 930,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200032f",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler Edition 2",
    "price": 767,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000330",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2) Edition 2",
    "price": 704,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000331",
    "name": "Home - Minimalist Luxury Solid Velvet Throw Pillow Covers (Pair) Edition 2",
    "price": 641,
    "description": "High-grade luxury solid velvet throw pillow covers (pair) featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000332",
    "name": "Home - Nordic Porcelain Succulent Planter with Metal Stand Edition 2",
    "price": 328,
    "description": "High-grade porcelain succulent planter with metal stand featuring nordic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000333",
    "name": "Home - Plush Lavender & Amber Natural Soy Scented Candle Edition 2",
    "price": 465,
    "description": "High-grade lavender & amber natural soy scented candle featuring plush craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000334",
    "name": "Home - Durable Quick-Dry 600 GSM Bamboo Fiber Bath Towel Edition 2",
    "price": 602,
    "description": "High-grade quick-dry 600 gsm bamboo fiber bath towel featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000335",
    "name": "Home - Elegant Heavy-Duty 10-Inch Pre-Seasoned Cast Iron Skillet Edition 2",
    "price": 1289,
    "description": "High-grade heavy-duty 10-inch pre-seasoned cast iron skillet featuring elegant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584990347449-397a68393fa1?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000336",
    "name": "Home - Cozy Borosilicate Glass French Press Coffee Maker Edition 2",
    "price": 926,
    "description": "High-grade borosilicate glass french press coffee maker featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000337",
    "name": "Home - Compact Warm White Copper Wire Decorative Fairy Lights Edition 2",
    "price": 413,
    "description": "High-grade warm white copper wire decorative fairy lights featuring compact craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000338",
    "name": "Home - Heat-Resistant Contour Orthopedic Memory Foam Sleeping Pillow Edition 2",
    "price": 1500,
    "description": "High-grade contour orthopedic memory foam sleeping pillow featuring heat-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000339",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser Edition 3",
    "price": 1337,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200033a",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock Edition 3",
    "price": 774,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200033b",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler Edition 3",
    "price": 611,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200033c",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2) Edition 3",
    "price": 548,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200033d",
    "name": "Home - Minimalist Luxury Solid Velvet Throw Pillow Covers (Pair) Edition 3",
    "price": 485,
    "description": "High-grade luxury solid velvet throw pillow covers (pair) featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200033e",
    "name": "Home - Nordic Porcelain Succulent Planter with Metal Stand Edition 3",
    "price": 472,
    "description": "High-grade porcelain succulent planter with metal stand featuring nordic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200033f",
    "name": "Home - Plush Lavender & Amber Natural Soy Scented Candle Edition 3",
    "price": 609,
    "description": "High-grade lavender & amber natural soy scented candle featuring plush craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000340",
    "name": "Home - Durable Quick-Dry 600 GSM Bamboo Fiber Bath Towel Edition 3",
    "price": 746,
    "description": "High-grade quick-dry 600 gsm bamboo fiber bath towel featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000341",
    "name": "Home - Elegant Heavy-Duty 10-Inch Pre-Seasoned Cast Iron Skillet Edition 3",
    "price": 1433,
    "description": "High-grade heavy-duty 10-inch pre-seasoned cast iron skillet featuring elegant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584990347449-397a68393fa1?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000342",
    "name": "Home - Cozy Borosilicate Glass French Press Coffee Maker Edition 3",
    "price": 770,
    "description": "High-grade borosilicate glass french press coffee maker featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000343",
    "name": "Home - Compact Warm White Copper Wire Decorative Fairy Lights Edition 3",
    "price": 257,
    "description": "High-grade warm white copper wire decorative fairy lights featuring compact craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000344",
    "name": "Home - Heat-Resistant Contour Orthopedic Memory Foam Sleeping Pillow Edition 3",
    "price": 1344,
    "description": "High-grade contour orthopedic memory foam sleeping pillow featuring heat-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000345",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser Edition 4",
    "price": 1181,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000346",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock Edition 4",
    "price": 918,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000347",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler Edition 4",
    "price": 755,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000348",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2) Edition 4",
    "price": 692,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000349",
    "name": "Home - Minimalist Luxury Solid Velvet Throw Pillow Covers (Pair) Edition 4",
    "price": 629,
    "description": "High-grade luxury solid velvet throw pillow covers (pair) featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200034a",
    "name": "Home - Nordic Porcelain Succulent Planter with Metal Stand Edition 4",
    "price": 316,
    "description": "High-grade porcelain succulent planter with metal stand featuring nordic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200034b",
    "name": "Home - Plush Lavender & Amber Natural Soy Scented Candle Edition 4",
    "price": 453,
    "description": "High-grade lavender & amber natural soy scented candle featuring plush craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200034c",
    "name": "Home - Durable Quick-Dry 600 GSM Bamboo Fiber Bath Towel Edition 4",
    "price": 590,
    "description": "High-grade quick-dry 600 gsm bamboo fiber bath towel featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200034d",
    "name": "Home - Elegant Heavy-Duty 10-Inch Pre-Seasoned Cast Iron Skillet Edition 4",
    "price": 1277,
    "description": "High-grade heavy-duty 10-inch pre-seasoned cast iron skillet featuring elegant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584990347449-397a68393fa1?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200034e",
    "name": "Home - Cozy Borosilicate Glass French Press Coffee Maker Edition 4",
    "price": 914,
    "description": "High-grade borosilicate glass french press coffee maker featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200034f",
    "name": "Home - Compact Warm White Copper Wire Decorative Fairy Lights Edition 4",
    "price": 401,
    "description": "High-grade warm white copper wire decorative fairy lights featuring compact craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000350",
    "name": "Home - Heat-Resistant Contour Orthopedic Memory Foam Sleeping Pillow Edition 4",
    "price": 1488,
    "description": "High-grade contour orthopedic memory foam sleeping pillow featuring heat-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000351",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser Edition 5",
    "price": 1325,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000352",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock Edition 5",
    "price": 762,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000353",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler Edition 5",
    "price": 599,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000354",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2) Edition 5",
    "price": 536,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000355",
    "name": "Home - Minimalist Luxury Solid Velvet Throw Pillow Covers (Pair) Edition 5",
    "price": 473,
    "description": "High-grade luxury solid velvet throw pillow covers (pair) featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000356",
    "name": "Home - Nordic Porcelain Succulent Planter with Metal Stand Edition 5",
    "price": 460,
    "description": "High-grade porcelain succulent planter with metal stand featuring nordic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000357",
    "name": "Home - Plush Lavender & Amber Natural Soy Scented Candle Edition 5",
    "price": 597,
    "description": "High-grade lavender & amber natural soy scented candle featuring plush craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000358",
    "name": "Home - Durable Quick-Dry 600 GSM Bamboo Fiber Bath Towel Edition 5",
    "price": 734,
    "description": "High-grade quick-dry 600 gsm bamboo fiber bath towel featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000359",
    "name": "Home - Elegant Heavy-Duty 10-Inch Pre-Seasoned Cast Iron Skillet Edition 5",
    "price": 1421,
    "description": "High-grade heavy-duty 10-inch pre-seasoned cast iron skillet featuring elegant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584990347449-397a68393fa1?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200035a",
    "name": "Home - Cozy Borosilicate Glass French Press Coffee Maker Edition 5",
    "price": 758,
    "description": "High-grade borosilicate glass french press coffee maker featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200035b",
    "name": "Home - Compact Warm White Copper Wire Decorative Fairy Lights Edition 5",
    "price": 245,
    "description": "High-grade warm white copper wire decorative fairy lights featuring compact craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200035c",
    "name": "Home - Heat-Resistant Contour Orthopedic Memory Foam Sleeping Pillow Edition 5",
    "price": 1332,
    "description": "High-grade contour orthopedic memory foam sleeping pillow featuring heat-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200035d",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser Edition 6",
    "price": 1169,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e200035e",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock Edition 6",
    "price": 906,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200035f",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler Edition 6",
    "price": 743,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000360",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2) Edition 6",
    "price": 680,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000361",
    "name": "Home - Minimalist Luxury Solid Velvet Throw Pillow Covers (Pair) Edition 6",
    "price": 617,
    "description": "High-grade luxury solid velvet throw pillow covers (pair) featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000362",
    "name": "Home - Nordic Porcelain Succulent Planter with Metal Stand Edition 6",
    "price": 304,
    "description": "High-grade porcelain succulent planter with metal stand featuring nordic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000363",
    "name": "Home - Plush Lavender & Amber Natural Soy Scented Candle Edition 6",
    "price": 441,
    "description": "High-grade lavender & amber natural soy scented candle featuring plush craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000364",
    "name": "Home - Durable Quick-Dry 600 GSM Bamboo Fiber Bath Towel Edition 6",
    "price": 578,
    "description": "High-grade quick-dry 600 gsm bamboo fiber bath towel featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000365",
    "name": "Home - Elegant Heavy-Duty 10-Inch Pre-Seasoned Cast Iron Skillet Edition 6",
    "price": 1265,
    "description": "High-grade heavy-duty 10-inch pre-seasoned cast iron skillet featuring elegant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584990347449-397a68393fa1?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000366",
    "name": "Home - Cozy Borosilicate Glass French Press Coffee Maker Edition 6",
    "price": 902,
    "description": "High-grade borosilicate glass french press coffee maker featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000367",
    "name": "Home - Compact Warm White Copper Wire Decorative Fairy Lights Edition 6",
    "price": 389,
    "description": "High-grade warm white copper wire decorative fairy lights featuring compact craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000368",
    "name": "Home - Heat-Resistant Contour Orthopedic Memory Foam Sleeping Pillow Edition 6",
    "price": 1476,
    "description": "High-grade contour orthopedic memory foam sleeping pillow featuring heat-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000369",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser Edition 7",
    "price": 1313,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200036a",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock Edition 7",
    "price": 750,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200036b",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler Edition 7",
    "price": 587,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200036c",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2) Edition 7",
    "price": 524,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200036d",
    "name": "Home - Minimalist Luxury Solid Velvet Throw Pillow Covers (Pair) Edition 7",
    "price": 461,
    "description": "High-grade luxury solid velvet throw pillow covers (pair) featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e200036e",
    "name": "Home - Nordic Porcelain Succulent Planter with Metal Stand Edition 7",
    "price": 448,
    "description": "High-grade porcelain succulent planter with metal stand featuring nordic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e200036f",
    "name": "Home - Plush Lavender & Amber Natural Soy Scented Candle Edition 7",
    "price": 585,
    "description": "High-grade lavender & amber natural soy scented candle featuring plush craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000370",
    "name": "Home - Durable Quick-Dry 600 GSM Bamboo Fiber Bath Towel Edition 7",
    "price": 722,
    "description": "High-grade quick-dry 600 gsm bamboo fiber bath towel featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000371",
    "name": "Home - Elegant Heavy-Duty 10-Inch Pre-Seasoned Cast Iron Skillet Edition 7",
    "price": 1409,
    "description": "High-grade heavy-duty 10-inch pre-seasoned cast iron skillet featuring elegant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584990347449-397a68393fa1?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000372",
    "name": "Home - Cozy Borosilicate Glass French Press Coffee Maker Edition 7",
    "price": 1046,
    "description": "High-grade borosilicate glass french press coffee maker featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e2000373",
    "name": "Home - Compact Warm White Copper Wire Decorative Fairy Lights Edition 7",
    "price": 233,
    "description": "High-grade warm white copper wire decorative fairy lights featuring compact craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e2000374",
    "name": "Home - Heat-Resistant Contour Orthopedic Memory Foam Sleeping Pillow Edition 7",
    "price": 1320,
    "description": "High-grade contour orthopedic memory foam sleeping pillow featuring heat-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e2000375",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser Edition 8",
    "price": 1157,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e2000376",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock Edition 8",
    "price": 894,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000377",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler Edition 8",
    "price": 731,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000378",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2) Edition 8",
    "price": 668,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000379",
    "name": "Home - Minimalist Luxury Solid Velvet Throw Pillow Covers (Pair) Edition 8",
    "price": 605,
    "description": "High-grade luxury solid velvet throw pillow covers (pair) featuring minimalist craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e200037a",
    "name": "Home - Nordic Porcelain Succulent Planter with Metal Stand Edition 8",
    "price": 592,
    "description": "High-grade porcelain succulent planter with metal stand featuring nordic craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e200037b",
    "name": "Home - Plush Lavender & Amber Natural Soy Scented Candle Edition 8",
    "price": 429,
    "description": "High-grade lavender & amber natural soy scented candle featuring plush craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  },
  {
    "_id": "6aa3e8408db3804f79e200037c",
    "name": "Home - Durable Quick-Dry 600 GSM Bamboo Fiber Bath Towel Edition 8",
    "price": 566,
    "description": "High-grade quick-dry 600 gsm bamboo fiber bath towel featuring durable craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.5
  },
  {
    "_id": "6aa3e8408db3804f79e200037d",
    "name": "Home - Elegant Heavy-Duty 10-Inch Pre-Seasoned Cast Iron Skillet Edition 8",
    "price": 1253,
    "description": "High-grade heavy-duty 10-inch pre-seasoned cast iron skillet featuring elegant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584990347449-397a68393fa1?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.9
  },
  {
    "_id": "6aa3e8408db3804f79e200037e",
    "name": "Home - Cozy Borosilicate Glass French Press Coffee Maker Edition 8",
    "price": 890,
    "description": "High-grade borosilicate glass french press coffee maker featuring cozy craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.4
  },
  {
    "_id": "6aa3e8408db3804f79e200037f",
    "name": "Home - Compact Warm White Copper Wire Decorative Fairy Lights Edition 8",
    "price": 377,
    "description": "High-grade warm white copper wire decorative fairy lights featuring compact craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.8
  },
  {
    "_id": "6aa3e8408db3804f79e2000380",
    "name": "Home - Heat-Resistant Contour Orthopedic Memory Foam Sleeping Pillow Edition 8",
    "price": 1464,
    "description": "High-grade contour orthopedic memory foam sleeping pillow featuring heat-resistant craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.3
  },
  {
    "_id": "6aa3e8408db3804f79e2000381",
    "name": "Home - Modern Ultrasonic 7-LED Color Aroma Mist Diffuser Edition 9",
    "price": 1301,
    "description": "High-grade ultrasonic 7-led color aroma mist diffuser featuring modern craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.7
  },
  {
    "_id": "6aa3e8408db3804f79e2000382",
    "name": "Home - Artisanal Minimalist Scandinavian Silent Wall Clock Edition 9",
    "price": 1038,
    "description": "High-grade minimalist scandinavian silent wall clock featuring artisanal craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.2
  },
  {
    "_id": "6aa3e8408db3804f79e2000383",
    "name": "Home - BPA-Free Vacuum Insulated Stainless Steel Tumbler Edition 9",
    "price": 575,
    "description": "High-grade vacuum insulated stainless steel tumbler featuring bpa-free craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.6
  },
  {
    "_id": "6aa3e8408db3804f79e2000384",
    "name": "Home - Eco-Friendly Stoneware Handcrafted Matte Coffee Mugs (Set of 2) Edition 9",
    "price": 512,
    "description": "High-grade stoneware handcrafted matte coffee mugs (set of 2) featuring eco-friendly craftsmanship. Designed for everyday lifestyle.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    "category": "Home",
    "rating": 4.1
  }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = products;
}
if (typeof window !== "undefined") {
    window.ALL_CATALOG_PRODUCTS = products;
}
