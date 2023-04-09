const { Sequelize } = require("sequelize");

var dbHost = process.env.DB_HOST;
var dbName = process.env.DB_NAME;
var dbUser = process.env.DB_USER;
var dbPass = process.env.DB_PASS;

const sequilize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: "mysql"
})

module.exports = sequilize;