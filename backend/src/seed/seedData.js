require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("../config/db");
const User = require("../models/User");
const Product = require("../models/Product");


// SAMPLE USERS
const users = [
  {
    name: "Admin User",
    email: "admin@test.com",
    password: "123456",
  },
  {
    name: "Test User",
    email: "user@test.com",
    password: "123456",
  },
];


// SAMPLE PRODUCTS
const products = [
  { name: "iPhone 14", description: "Apple smartphone", price: 70000 },
  { name: "Samsung Galaxy S23", description: "Samsung flagship", price: 65000 },
  { name: "MacBook Air", description: "Apple laptop", price: 90000 },
  { name: "Dell XPS 13", description: "Premium ultrabook", price: 85000 },
  { name: "Sony Headphones", description: "Noise cancelling", price: 20000 },
  { name: "iPad Pro", description: "Apple tablet", price: 80000 },
  { name: "Canon DSLR", description: "Professional camera", price: 55000 },
  { name: "Nike Sneakers", description: "Running shoes", price: 8000 },
  { name: "Smart Watch", description: "Fitness wearable", price: 12000 },
  { name: "Bluetooth Speaker", description: "Portable speaker", price: 5000 },
];


const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();

    // Insert users (password hashing runs automatically via pre-save hook)
    await User.insertMany(users);

    // Insert products
    await Product.insertMany(products);

    console.log("✅ Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedData();
