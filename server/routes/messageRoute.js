const express = require("express")
const router = express.Router()
const {sendMessage, receiveMessage} = require("../controllers/messageController.js")
const isAuthenticate = require("../middleware/isAuthenticated.js")


router.route("/send/:id").post( isAuthenticate, sendMessage)

router.route("/:id").get( isAuthenticate, receiveMessage)
module.exports= router