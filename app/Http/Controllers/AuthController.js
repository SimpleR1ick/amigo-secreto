const Pessoa = require("../../Models/Pessoa");
const Crypt = require("../../Utils/Crypt");

exports.login = (req, res, next) => {
    res.render("sign_in", {
        title: "Login",
    });
}

exports.SignIn = async (req, res, next) => {
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

exports.register = (req, res, next) => {
    res.render("sign_up", {
        title: "Cadastro"
    });
}

exports.signUp = async (req, res, next) => {
    const {nome, sobrenome, email, senha, confirma} = req.body

    // Verificando se o email esta disponivel
    const result = await Pessoa.findByEmail(email);

    // Verifica se o e-mail esta disponivel
    if (result) {
        res.render("sign_up", {
            title: "Cadastro",
            message: "Usuario ja cadastrado"
        });
    }
    // Verifica se a senha são iguais
    if (senha != confirma) {
        res.render("sign_up", {
            title: "Cadastro",
            message: "Senha não coincide"
        });
    }
    // Criptografando a senha
    var hash = await Crypt.hash(senha);

    // Instancia de pessoa
    const pessoa = Pessoa.build({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: hash
    });
    await pessoa.save()

    // Redirecionando para pagina de login
    res.redirect("/login")
}