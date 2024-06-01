const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true, // Ensuring email uniqueness
    match: [/.+@.+\..+/, 'Please fill a valid email address'] // Email validation
  },
  username: {
    type: String,
    required: true,
    unique: true // Ensuring username uniqueness
  },
  phoneNumber: {
    type: String, // Changed to String to accommodate all phone numbers
    required: true
  },
  password: {
    type: String,
    required: true,
    
  },

  gender: {
    type: String,
    enum: ["male", "female"],
    required: true
  }
}, { timestamps: true });

const User = mongoose.model("User", userModel);

module.exports = User;
