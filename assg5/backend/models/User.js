// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password hashing

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Removes whitespace from both ends of a string
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Stores emails in lowercase
    match: [/.+@.+\..+/, 'Please enter a valid email address'] // Basic email regex validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Minimum password length
  },
  bio: {
    type: String,
    default: 'No bio provided.',
    maxlength: 500
  },
  contactDetails: {
    phone: { type: String, trim: true },
    address: { type: String, trim: true },
    // Add other contact details as needed
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// --- Mongoose Middleware: Hash password before saving ---
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) { // Only hash if password has been modified (or is new)
    next();
  }
  const salt = await bcrypt.genSalt(10); // Generate a salt (cost factor 10)
  this.password = await bcrypt.hash(this.password, salt); // Hash the password
  next();
});

// --- Mongoose Method: Compare entered password with hashed password ---
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;