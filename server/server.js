
require("dotenv").config()
const express = require("express")
const connectDB = require("./config/database.js")
const app = express()
const userroute = require("./routes/userRoute.js")
const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/user", userroute)

connectDB()
app.listen(process.env.PORT, ()=> {
  console.log(`Server is running at port no ${process.env.PORT}`)
})