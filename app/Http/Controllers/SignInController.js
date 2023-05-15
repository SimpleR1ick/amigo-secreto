const Pessoa = require("../../Models/Pessoa");
const Crypt = require("../../Utils/Crypt");

exports.index = (req, res, next) => {
    res.render("sign_in", {
        title: "Login",
    });
}

exports.signIn = async (req, res, next) => {
    const { email, senha } = req.body;

    // Buscando a pessoal pelo email
    const pessoa = await Pessoa.findByEmail(email);

    // Validando se não houve resultado
    if (!pessoa) {
        res.render("sign_in", {
            title: "Login",
            message: "Usuario ou senha incorretos"
        });
    }
    // Verificando se senha esta correta
    const verify = await Crypt.compare(senha, pessoa.senha)

    if (!verify) {
        res.render("sign_in", {
            title: "Login",
            message: "Usuario ou senha incorretos"
        });
    }
    // Definindo 
    req.session.idUsuario = pessoa.id_pessoa;

    res.redirect("/");
}

exports.signOut = (req, res, next) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
}