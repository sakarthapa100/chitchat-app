const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
  fullName:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  username:{
    type:String,
    require:true
  },
  phoneNumber:{
    type:Number,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  profileImage:{
    type:String,
    default:""
  },
  gender:{
    type:String,
    enum:["male", "female"],
    require:true
  }
},{timestamps:true})
const User = mongoose.model("User", userModel)

module.exports = User