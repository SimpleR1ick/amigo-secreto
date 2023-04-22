const express = require("express");
const router = express.Router();

const CadastroController = require("../app/Controllers/CadastroController");

router.get("/cadastro", CadastroController.getPageCadastro);

router.post("/cadastro", CadastroController.setCadastroForm);

module.exports = router;