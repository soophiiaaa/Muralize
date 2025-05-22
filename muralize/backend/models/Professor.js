const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const User = require('./User')

const Professor = sequelize.define('Professor', {
    id_professor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
})

module.exports = Professor;
