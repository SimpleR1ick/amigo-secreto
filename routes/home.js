const express = require("express");
const router = express.Router();

const HomeController = require("../app/controllers/homeController");

router.get("/", HomeController.getHomePage);

module.exports = router;