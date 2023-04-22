const express = require("express");
const router = express.Router();

const SorteioController = require("../app/Controllers/sorteioController");

router.get("/sorteio", SorteioController.getSorteioPage);

router.post("/sorteio/nome", SorteioController.setSorteioNome);

module.exports = router;