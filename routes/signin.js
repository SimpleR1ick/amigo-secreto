const express = require("express");
var router = express.Router();

const SignInController = require("../app/Http/Controllers/SignInController");

// Midleware
const { login } = require("../app/Http/Middlewares/Auth");

// Rota pagina Login
router.get("/login", SignInController.index);

// Rota formulario Login
router.post("/login", SignInController.signIn);

// Rota Logout
router.get("/logout", login, SignInController.signOut);

module.exports = router;