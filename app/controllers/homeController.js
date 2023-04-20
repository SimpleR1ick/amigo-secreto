const Pessoa = require("../models/Pessoa");

exports.getHomePage = async (req, res, next) => {
    // Buscando o usuario
    obPessoa = await Pessoa.findById(2);

    // Variaveis da view
    var dados = {
        text: "MEUS SORTEIOS",
        icon: "fa-solid fa-plus",
        btn_text: "Novo Sorteio",
        btn_link: "/sorteio",
        email: "stevegames04@gmail.com",
        obPessoa
    } 
    // Retornando uma resposta
    res.status(200).render("home", {
        title: "Sorteios",
        dados  
    })
}
