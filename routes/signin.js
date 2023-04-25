const express = require("express");
const router = express.Router();

const SignInController = require("../app/Controllers/SignInController");

// Midleware
const { login } = require("../app/Middlewares/Auth");

// Rota pagina Login
router.get("/login", SignInController.index);

// Rota formulario Login
router.post("/login", SignInController.signIn);

// Rota Logout
router.get("/logout", login, SignInController.signOut);

module.exports = router;