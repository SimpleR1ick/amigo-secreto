module.exports.login = (req, res, next) => {
    if (!req.session.idUsuario) {
        return res.redirect("/login")
    }
    next()
}