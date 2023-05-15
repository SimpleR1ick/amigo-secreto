const express = require("express");
var router = express.Router();

const HomeController = require("../app/Controllers/HomeController");

// Midleware
const { login } = require("../app/Middlewares/Auth");

// Rota pagina Home
router.get("/", login, HomeController.index);

module.exports = router;