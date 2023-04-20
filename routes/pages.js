const express = require("express");

const HomeController = require("../app/controllers/homeController");
const SorteioController = require("../app/controllers/sorteioController");

const router = express.Router();

router.get("/", HomeController.getHomePage);


router.get("/sorteio", SorteioController.getSorteioPage);

router.post("/sorteio/nome", SorteioController.setSorteioNome);

module.exports = router