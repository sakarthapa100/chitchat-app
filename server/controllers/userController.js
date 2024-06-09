const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Ensure the correct path to your User model


module.exports.registerController = async (req, res) => {
  try {
    const {
     
      email,
      username,
      phoneNumber,
      password,
     
      gender,
    } = req.body;

    if (
     
      !email ||
      !username ||
      !phoneNumber ||
      !password ||
     
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required " });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username is already exist " });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${ username}`;
const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;


    await User.create({
  
      email,
      username,
      phoneNumber,
      password: hashedPassword,
      profilePhoto: gender === 'male' ? maleProfilePhoto : femaleProfilePhoto,

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
      .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true,sameSite:'strict' })
      .json({
       _id:user._id,
       username:user.username,
       profilePhoto:user.profilePhoto
        
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
    const loggedInUserId = req.id
    const otherUser = await User.find({_id:{$ne:loggedInUserId}}).select("-password")
    return res.status(200).json(otherUser)
  } catch (error) {
    
  }
}