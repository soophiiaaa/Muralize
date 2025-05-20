const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('aluno', 'professor'),
        allowNull: false
    }
}, {
    timestamps: true
})

module.exports = Usuario;
