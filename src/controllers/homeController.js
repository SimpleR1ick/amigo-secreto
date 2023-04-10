const Pessoa = require("../models/Pessoa");

exports.getHome = (req, res, next) => {
    res.render("pages/home", {
        title: "Home",
    })
}

exports.getForm = (req, res, next) => {
    res.render("pages/form", {
        title: "Formulario"
    })
}

exports.setForm = async (req, res, next) => {
    post = req.body

    var pessoa = Pessoa.build({
        nome: post.nome,
        sobrenome: post.sobrenome,
        email: post.email,
    });
    await pessoa.save()

    res.redirect('/?status=' + 'sucess');
}