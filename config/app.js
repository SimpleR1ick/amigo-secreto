const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

// Carregando variaveis de ambiente
require("dotenv").config();

app.use(session({
    secret: process.env.KEY,
    saveUninitialized: true,
    resave: false,
    cookie: { 
        secure: true 
    }
}));

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../resources/views/'));

app.use(express.static(path.join(__dirname, '../public/images')));
app.use(express.static(path.join(__dirname, '../resources/css')));
app.use(express.static(path.join(__dirname, '../resources/js')));

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

module.exports = app;