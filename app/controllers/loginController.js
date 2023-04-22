exports.getLoginPage = (req, res, next) => {
    res.render("login", {
        title: "Login",
    });
}

exports.setLoginForm = (req, res, next) => {
    const username = "admin";
    const password = "admin";

    var session = req.session;
    
    res.send(req.body)
    //res.redirect(200, "/")
}