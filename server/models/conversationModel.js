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

const Converstation = mongoose.model("Converstation", converstaionModel)

module.exports=Converstation