const Pessoa = require("../../Models/Pessoa");

const header = {
    text: "Meus sorteios",
    link: "/",
    page: "NOVO SORTEIO",
    icon: "fa-solid fa-less-than"
};


exports.index = async (req, res, next) => {
    // Buscando o usuario
    const pessoa = await Pessoa.findById(req.session.idUsuario);

    res.render("sorteio", {
        title: "Criar Sorteio",
        header,
        pessoa
    });
}

exports.setSorteioNome = (req, res, next) => {
    const dados = req.body;

    res.send(dados);
}