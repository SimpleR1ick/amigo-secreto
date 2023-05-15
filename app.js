var createError = require('http-errors');
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
require('dotenv').config();

var app = express();

app.use(session({
	secret: 'sua_chave_secreta',
	resave: false,
	saveUninitialized: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var singInRouter = require('./routes/signin');
var singUpRouter = require('./routes/signup');
var sorteioRouter = require('./routes/sorteio');

app.use(indexRouter);
app.use(usersRouter);
app.use(singInRouter);
app.use(singUpRouter);
app.use(sorteioRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
