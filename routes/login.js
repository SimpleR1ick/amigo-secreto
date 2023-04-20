const express = require("express");
const router = express.Router();

const LoginController = require("../app/controllers/loginController");

router.get("/login", LoginController.getLoginPage);

router.post("/login", LoginController.setLoginForm)

module.exports = router;