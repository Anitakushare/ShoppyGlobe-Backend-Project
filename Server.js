// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();
// Import required modules
import express from "express";
import connectDB from "./config/db.js"; // MongoDB connection setup
import { productRoute } from "./Routes/products.routes.js"; // Product routes
import { cartRoute } from "./Routes/cart.routes.js"; // Cart routes
import { userRoute } from "./Routes/user.routes.js"; // User auth routes
import { errorHandler } from "./Middleware/errorHandler.js"; // Custom error handler middleware
// Initialize express app
const app = new express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB database
connectDB();

// product-related routes
productRoute(app);

// cart-related routes 
cartRoute(app);

// user authentication routes 
userRoute(app);

// Global error handling middleware 
app.use(errorHandler);

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
