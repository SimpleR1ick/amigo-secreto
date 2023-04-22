const app = require('./config/app');

const port = process.env.PORT || 80

const cadastroRouter = require("./routes/cadastro");
const homeRouter = require("./routes/home");
const loginRouter = require("./routes/login");
const sorteioRouter = require("./routes/sorteio");

app.use(cadastroRouter);
app.use(homeRouter);
app.use(loginRouter);
app.use(sorteioRouter);

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
})