const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const path = require("path");

require("dotenv").config();

const app = express();

app.use(expressLayouts);

// View engine
app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, '../views'));
app.set('layout', path.join(__dirname, '../views/pages/layouts/layout'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;