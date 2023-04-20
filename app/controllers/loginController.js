exports.getLoginPage = (req, res, next) => {
    res.render("login", {
        title: "Login",
    });
}

exports.setLoginForm = (req, res, next) => {    
    res.send(req.body)
    //res.redirect(200, "/")
}