exports.index = (req, res, next) => {
    dados = {
        text: "NOVO SORTEIO",
        btn_text: "< Meus sorteios",
        btn_link: "/",
        email: 'stevegames04@gmail.com',
    }

    res.render("sorteio", {
        title: "Criar Sorteio",
        dados
    })
}