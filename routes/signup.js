const express = require("express");
var router = express.Router();

const SignUpController = require("../app/Controllers/SignUpController");

router.get("/cadastro", SignUpController.index);

router.post("/cadastro", SignUpController.signUp);

module.exports = router;