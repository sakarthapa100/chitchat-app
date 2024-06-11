
require("dotenv").config()
const express = require("express")
const connectDB = require("./config/database.js")
const app = express()
const userroute = require("./routes/userRoute.js")
const messageroute = require("./routes/messageRoute.js")
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

const corsOption = {
  origin:" http://localhost:5173",
  credentials:true
}
app.use(cors(corsOption))
app.use("/api/v1/user", userroute)
app.use("/api/v1/message", messageroute)


connectDB()
app.listen(process.env.PORT, ()=> {
  console.log(`Server is running at port no ${process.env.PORT}`)
})