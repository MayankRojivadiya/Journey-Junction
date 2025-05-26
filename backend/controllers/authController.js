const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/userSchema.js");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("This is req.body", req.body);

    // Validate fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Store hashed password
    });

    // Save user to the database
    await newUser.save();

    res
      .status(201)
      .json({
        status: 200,
        message: "User created successfully",
        userId: newUser._id,
      });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
