const express = require("express");
const bodyParser = require('body-parser');

const path = require("path");

// Carregando variaveis de ambiente
require("dotenv").config();

const app = express();

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../resources/views/'));

app.use(express.static(path.join(__dirname, '../public/images')));
app.use(express.static(path.join(__dirname, '../resources/css')));

app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;