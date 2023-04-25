const app = require('./config/app');

const port = process.env.PORT || 80

const home_router = require("./routes/home");
const signup_router = require("./routes/signup");
const signin_outer = require("./routes/signin");
const sorteio_router = require("./routes/sorteio");

app.use(home_router);
app.use(signup_router);
app.use(signin_outer);
app.use(sorteio_router);

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
})