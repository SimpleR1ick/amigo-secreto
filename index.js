var app = require('./config/app');

const pagesRouter = require("./routes/pages");

app.use(pagesRouter);

app.listen(process.env.PORT, () => {
    console.log("Servidor online!");
})