const { DataTypes } = require("sequelize");
const sequelize = require("../Utils/Connect");

const Pessoa = sequelize.define('pessoa', {
    // Atributos do modelo
    id_pessoa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    freezeTableName: true, // Previne de pluralizar os nomes
    timestamps: false,
    underscored: true,
});

Pessoa.findById = function(id) {
    return Pessoa.findOne({
        where: {
            id_pessoa: id}
    });
};

Pessoa.findByEmail = function(email) {
    return Pessoa.findOne({
        where: {
            email: email
        }
    });
};

module.exports = Pessoa;