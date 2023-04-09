exports.getHome = (_, res) => {
    res.render("pages/home", {
        title: "Home",
    })
}