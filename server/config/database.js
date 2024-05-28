const mongoose = require("mongoose")
const URL = "mongodb+srv://chat100:chat@cluster0.lwubknv.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("DB connection successful");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB