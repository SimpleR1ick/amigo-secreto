const express = require("express");
const router = express.Router();

const SorteioController = require("../app/Controllers/SorteioController");

// Rota pagina Sorteio
router.get("/sorteio", SorteioController.index);

router.post("/sorteio/nome", SorteioController.setSorteioNome);

module.exports = router;