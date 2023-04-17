var app = require('./config/app');

var port = process.env.PORT || 80

const pagesRouter = require("./routes/pages");

app.use(pagesRouter);

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
})