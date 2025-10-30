// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// --- CRUD Operations ---

// @route   GET /api/users
// @desc    Get all user profiles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password from results
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/users/:id
// @desc    Get single user profile by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    // If id is not a valid ObjectId format, Mongoose might throw CastError
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Invalid user ID format' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/users
// @desc    Create a new user profile
// @access  Public (for simplicity, typically restricted)
router.post('/', async (req, res) => {
  const { username, email, password, bio, contactDetails } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User with this email already exists' });
    }
    user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'Username is already taken' });
    }

    user = new User({
      username,
      email,
      password, // Password will be hashed by pre-save middleware
      bio,
      contactDetails
    });

    await user.save();
    // Respond with created user, excluding password
    const userResponse = { ...user.toObject() };
    delete userResponse.password;
    res.status(201).json(userResponse);

  } catch (err) {
    console.error(err.message);
    // Mongoose validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(el => el.message);
      return res.status(400).json({ msg: errors.join(', ') });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/users/:id
// @desc    Update a user profile by ID
// @access  Public (for simplicity, typically restricted to authenticated user or admin)
router.put('/:id', async (req, res) => {
  const { username, email, password, bio, contactDetails } = req.body;

  // Build user object (only include fields that are actually sent in the request body)
  const userFields = {};
  if (username) userFields.username = username;
  if (email) userFields.email = email;
  if (bio) userFields.bio = bio;
  if (contactDetails) userFields.contactDetails = contactDetails;
  // If password is sent, it needs to be hashed before update
  if (password) {
    try {
      const salt = await bcrypt.genSalt(10);
      userFields.password = await bcrypt.hash(password, salt);
    } catch (hashErr) {
      console.error(hashErr.message);
      return res.status(500).send('Password hashing failed');
    }
  }

  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if updated email/username already exists for another user
    if (email && email !== user.email) {
      const existingEmailUser = await User.findOne({ email });
      if (existingEmailUser) {
        return res.status(400).json({ msg: 'Email already in use by another user.' });
      }
    }
    if (username && username !== user.username) {
      const existingUsernameUser = await User.findOne({ username });
      if (existingUsernameUser) {
        return res.status(400).json({ msg: 'Username already taken by another user.' });
      }
    }


    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields }, // Use $set to update specific fields
      { new: true, runValidators: true } // new: true returns the updated document, runValidators: true ensures schema validation
    ).select('-password'); // Exclude password from the response

    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Invalid user ID format' });
    }
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(el => el.message);
      return res.status(400).json({ msg: errors.join(', ') });
    }
    res.status(500).send('Server Error');
  }
});


// @route   DELETE /api/users/:id
// @desc    Delete a user profile by ID
// @access  Public (for simplicity, typically restricted to authenticated user or admin)
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id); // Use findByIdAndDelete
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json({ msg: 'User removed successfully' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Invalid user ID format' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;