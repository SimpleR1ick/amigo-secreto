const Pessoa = require("../Models/Pessoa");

const header = {
    text: "Novo Sorteio",
    link: "/sorteio",
    page: "MEUS SORTEIOS",
    icon: "fa-solid fa-plus"
};

exports.getHomePage = async (req, res, next) => {
    // Buscando o usuario
    const pessoa = await Pessoa.findById(req.session.idUsuario);

    // Retornando uma resposta
    res.status(200).render("home", {
        title: "Sorteios",
        header,
        pessoa  
    })
}
