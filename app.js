var app = require('./config/server');

const pagesRouter = require("./routes/pages");

app.use(pagesRouter);

app.listen(process.env.PORT, () => {
    console.log("Servidor online!");
})