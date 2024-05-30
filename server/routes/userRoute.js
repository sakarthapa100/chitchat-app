const express = require("express");
const {registerController, loginController,logoutController} = require("../controllers/userController.js");
const router = express.Router();

router.route("/register").post(registerController);
router.route("/login").post(loginController);
router.route("/logout").get(logoutController);

module.exports = router;
