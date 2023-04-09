const express = require("express");
const expressLayouts = require('express-ejs-layouts');

require("dotenv").config();

const app = express();

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.set('layout', './pages/layouts/layout');

module.exports = app;