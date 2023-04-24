const express = require("express");
const router = express.Router();

// Midleware
const Auth = require("../app/Middlewares/Auth");

const LoginController = require("../app/Controllers/LoginController");

router.get("/login", LoginController.getLoginPage);

router.post("/login", LoginController.setLoginForm);

router.get("/logout", Auth.login, LoginController.setLogout);

module.exports = router;