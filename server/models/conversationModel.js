const mongoose = require("mongoose")

const converstaionModel = mongoose.Schema({
  participants:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }],
  messages:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message"
  }]
},{timestamps:true})

const Conversation = mongoose.model("Conversation", converstaionModel)

module.exports=Conversation