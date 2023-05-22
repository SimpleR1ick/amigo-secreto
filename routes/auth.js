const express = require("express");
var router = express.Router();

const AuthController = require("../app/Http/Controllers/AuthController");
const { login } = require("../app/Http/Middlewares/Auth");

// Rota pagina Login
router.get("/login", AuthController.login);

// Rota formulario Login
router.post("/login", AuthController.signIn);

// Rota pagina cadastro
router.get("/cadastro", AuthController.register);

// Rota formulario cadastro
router.post("/cadastro", AuthController.signUp);

// Rota Logout
router.get("/logout", login, SignInController.signOut);

module.exports = router;
