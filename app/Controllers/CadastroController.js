const Pessoa = require("../Models/Pessoa");
const Crypt = require("../Utils/Crypt");

exports.getPageCadastro = (req, res, next) => {
    res.render("cadastro", {
        title: "Cadastro"
    });
}

exports.setCadastroForm = async (req, res, next) => {
    const {nome, sobrenome, email, senha, confirma} = req.body

    // Verificando se o email esta disponivel
    const result = await Pessoa.findByEmail(email);

    // Verifica se o e-mail esta disponivel
    if (result) {
        res.render("cadastro", {
            title: "Cadastro",
            message: "Usuario ja cadastrado"
        });
    }
    // Verifica se a senha são iguais
    if (senha != confirma) {
        res.render("cadastro", {
            title: "Cadastro",
            message: "Senha não coincide"
        });
    }
    // Criptografando a senha
    hash = await Crypt.hash(senha);

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