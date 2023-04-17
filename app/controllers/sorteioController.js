exports.index = (req, res, next) => {
    dados = {
        email: 'stevegames04@gmail.com',
        texto: "NOVO SORTEIO",
        texto_botao: "< Meus sorteios",
        link_botao: "/"
    }

    res.render("sorteio", {
        title: "Criar Sorteio",
        dados
    })
}