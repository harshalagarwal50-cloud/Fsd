// backend/server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// --- Middleware ---
app.use(cors()); // Enable CORS for all routes (important for frontend)
app.use(express.json()); // Body parser for JSON requests

// --- MongoDB Connection ---
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Routes ---
// Import user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // Prefix all user routes with /api/users

// Basic route for testing server
app.get('/', (req, res) => {
  res.send('User Profile Dashboard API is running!');
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});