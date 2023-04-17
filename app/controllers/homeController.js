const Pessoa = require("../models/Pessoa");

exports.index = (req, res, next) => {
    res.status(200).render("home", {
        title: "Home"  
    })
}

exports.getForm = (req, res, next) => {
    res.render("form", {
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