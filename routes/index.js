const express = require("express");
var router = express.Router();

const HomeController = require("../app/Http/Controllers/HomeController");

// Midleware
const { login } = require("../app/Http/Middlewares/Auth");

// Rota pagina Home
router.get("/", login, HomeController.index);

module.exports = router;