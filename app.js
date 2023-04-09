var app = require('./config/server');

const pagesRouter = require("./routes/pages");

app.use(pagesRouter);

app.listen(80, () => {
    console.log("Servidor online!");
})