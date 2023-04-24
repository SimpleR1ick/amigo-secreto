const Pessoa = require("../Models/Pessoa");
const Crypt = require("../Utils/Crypt");

exports.getLoginPage = (req, res, next) => {
    res.render("login", {
        title: "Login",
    });
}

exports.setLoginForm = async (req, res, next) => {
    const { email, senha } = req.body;

    // Buscando a pessoal pelo email
    const pessoa = await Pessoa.findByEmail(email);

    // Validando se não houve resultado
    if (!pessoa) {
        res.render("login", {
            title: "Login",
            message: "Usuario ou senha incorretos"
        });
    }
    // Verificando se senha esta correta
    const verify = await Crypt.compare(senha, pessoa.senha)

    if (!verify) {
        res.render("login", {
            title: "Login",
            message: "Usuario ou senha incorretos"
        });
    }
    // Definindo 
    req.session.idUsuario = pessoa.id_pessoa;

    console.log("Cookie criado")

    res.redirect("/");
}

exports.setLogout = (res, req, next) => {
    req.session.destroy();

    res.clearCookie('session');

    res.redirect("/login")
}