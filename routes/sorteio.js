const express = require("express");
var router = express.Router();

const SorteioController = require("../app/Http/Controllers/SorteioController");

// Midleware
const { login } = require("../app/Http/Middlewares/Auth");

// Rota pagina Sorteio
router.get("/sorteio", login, SorteioController.index);

router.post("/sorteio/nome", SorteioController.setSorteioNome);

module.exports = router;