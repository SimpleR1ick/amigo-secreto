const express = require("express");

const HomeController = require("../app/controllers/homeController");
const SorteioController = require("../app/controllers/sorteioController");

const router = express.Router();

router.get("/", HomeController.index);

router.get("/sorteio", SorteioController.index);

router.get("/sorteio2", SorteioController.form);

module.exports = router