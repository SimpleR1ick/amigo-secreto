module.exports.login = (req, res, next) => {
    if (!req.session.idUsuario) {
        console.log("redirecionado")
        return res.redirect("/login")
    }
    next()
}