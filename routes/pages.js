const express = require("express");
const path = require("path");

const router = express.Router();

var { getHome} = require("../src/controllers/homeController");

router.get("/", getHome)

module.exports = router