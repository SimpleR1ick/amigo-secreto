const express = require("express");
const router = express.Router();

// Midleware
const Auth = require("../app/Middlewares/Auth");

const HomeController = require("../app/Controllers/HomeController");

router.get("/", Auth.login, HomeController.getHomePage);

module.exports = router;