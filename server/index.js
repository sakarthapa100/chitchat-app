const express = require("express")
const connectDB = require("./config/database.js")
const app = express()

app.get("/", (req, res)=> {
  res.send("shello form the index")
})


const PORT = process.env.PORT || 8000
connectDB()
app.listen(PORT, ()=> {
  console.log(`Server is running at port no ${PORT}`)
})