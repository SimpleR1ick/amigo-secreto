const express = require("express");
const router = express.Router();

const SignUpController = require("../app/Controllers/SignUpController");

router.get("/cadastro", SignUpController.index);

router.post("/cadastro", SignUpController.signUp);

module.exports = router;