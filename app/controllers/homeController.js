const Pessoa = require("../models/Pessoa");

exports.index = (req, res, next) => {
    const dados = {
        text: "MEUS SORTEIOS",
        btn_text: "+ Sorteio",
        btn_link: "/sorteio",
        email: "stevegames04@gmail.com"
    } 

    res.status(200).render("home", {
        title: "Sorteios",
        dados  
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