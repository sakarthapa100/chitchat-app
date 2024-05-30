const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Ensure the correct path to your User model


module.exports.registerController = async (req, res) => {
  try {
    const {
      fullName,
      email,
      username,
      phoneNumber,
      password,
      profileImage,
      gender,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !username ||
      !phoneNumber ||
      !password ||
      !profileImage ||
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required " });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username is already exist " });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const maleProfile = `https://avatar.iran.liara.run/public/boy${username}`;
    const femaleProfile = `https://avatar.iran.liara.run/public/girl${username}`;
    await User.create({
      fullName,
      email,
      username,
      phoneNumber,
      password: hashedPassword,
      profileImage: gender === "male" ? maleProfile : femaleProfile, // Fixed the comparison here
      gender,
    });

    return res.status(201).json({
      message: "Account created succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};


module.exports.loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    
  
    const user = await User.findOne({ username }); 
    
    if (!user) {
      return res.status(400).json({
        message: "This username/password is not valid",
        success: false,
      });
    }
    
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect username or password",
        success: false,
      });
    }
    
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    
    return res
      .status(200)
      .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
      .json({
        message: `Welcome back ${username}`,
        success: true,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

module.exports.logoutController = async (req, res) => {
  try {
    return res.cookie("token", "", { expireIn: new Date(Date.now()) }).json({
      message: "User logout succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getOtherUsers = async(req,res) => {
  try {
    
  } catch (error) {
    
  }
}