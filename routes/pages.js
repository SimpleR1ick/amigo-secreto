const express = require("express");

const homeController = require("../app/controllers/homeController");
const sorteioController = require("../app/controllers/sorteioController");

const router = express.Router();

router.get("/", homeController.index);

router.get("/sorteio", sorteioController.index);

module.exports = router