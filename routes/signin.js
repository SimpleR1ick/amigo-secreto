const express = require("express");
var router = express.Router();

const SignInController = require("../app/Controllers/SignInController");

// Midleware
const { login } = require("../app/Middlewares/Auth");

// Rota Logout
router.get("/logout", login, SignInController.signOut);

// Rota pagina Login
router.get("/login", SignInController.index);

// Rota formulario Login
router.post("/login", SignInController.signIn);

module.exports = router;