const bcrypt = require("bcrypt");

const saltRounds = 10;

/**
 * Função para criptografar uma senha em um hash
 * @param {string} password 
 * @returns {string}
 */
exports.hash = (password) => {
    return bcrypt.hash(password, saltRounds);
}

/**
 * Função para comparar um hash com uma senha
 * @param {string} password 
 * @param {string} hash 
 * @returns {string}
 */
exports.compare = (password, hash) => {
    return bcrypt.compare(password, hash);
}