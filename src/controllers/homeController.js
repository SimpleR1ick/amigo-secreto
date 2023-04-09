exports.getHome = (_, res) => {
    var content = res.render("pages/home");

    res.render("pages/page", {
        main: content
    })
}