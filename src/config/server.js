const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const path = require("path");

// Paths
var views  = path.join(__dirname, '../views')
var layout = path.join(__dirname, '../views/pages/layouts/layout')
var public = path.join(__dirname, '../public')

// Carregando variaveis de ambiente
require("dotenv").config();

const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', views);
app.set('layout', layout);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(public));
app.use(expressLayouts);

module.exports = app;