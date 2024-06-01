const express = require("express");
const {registerController, loginController,logoutController,getOtherUsers} = require("../controllers/userController.js");
const isAuthenticate = require("../middleware/isAuthenticated.js");
const router = express.Router();

router.route("/register").post(registerController);
router.route("/login").post(loginController);
router.route("/logout").get(logoutController);
router.route("/").get(isAuthenticate, getOtherUsers);


module.exports = router;
