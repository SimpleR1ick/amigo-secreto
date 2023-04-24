const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const path = require("path");

// Carregando variaveis de ambiente
require("dotenv").config();

// Criando o aplicativo
const app = express();

// Session
app.use(session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: true,
}));

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../resources/views/'));

// Static files
app.use(express.static(path.join(__dirname, '../public/images')));
app.use(express.static(path.join(__dirname, '../resources/css')));
app.use(express.static(path.join(__dirname, '../resources/js')));

// Cookie parser
app.use(cookieParser());

// Body parser
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

module.exports = app;