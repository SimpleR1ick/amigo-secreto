const Pessoa = require("../models/Pessoa");

exports.getPageCadastro = (req, res, next) => {
    res.render("cadastro", {
        title: "Cadastro"
    });
}

exports.setCadastroForm = async (req, res, next) => {
    // Recuperando os dados do formulario
    const {nome, sobrenome, email, senha, confirma} = req.body

    // Verificando se o email esta disponivel
    var result = Pessoa.count({
        where: {
            email: email
        }
    })
    // Verifica se o e-mail esta disponivel
    if (! result === null) {
        redirect(res, "Usuario ja cadastrado")
    }
    // Verifica se a senha são iguais
    if (senha != confirma) {
        redirect(res, "Senha não coincide");
    }
    // Instancia de pessoa
    const pessoa = Pessoa.build({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
    });
    // Cadastrando usuario no banco
    await pessoa.save()

    // Redirecionando para pagina de login
    res.redirect("/login")
}

/**
 * Função para redirecionar com menssagem
 * @param {request} res 
 * @param {string} message 
 */
function redirect(res, message) {
    res.render("cadastro", {
        title: "Cadastro",
        message: message
    });
}
