const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const Turma = require('./Turma')

const Aluno = sequelize.define('Aluno', {
    id_aluno: {
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

Turma.hasMany(Aluno, { foreignKey: 'id_aluno', onDelete: 'CASCADE' })
Aluno.belongsTo(Turma, { foreignKey: 'id_aluno' })

module.exports = Aluno;
