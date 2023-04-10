const express = require("express");

const homeController = require("../controllers/homeController");
const router = express.Router();

router.get("/", homeController.getHome)

router.get("/form", homeController.getForm)

router.post("/form", homeController.setForm)

module.exports = router