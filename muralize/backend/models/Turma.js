const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const Professor = require('./Professor')

const Turma = sequelize.define('Turma', {
    id_turma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
})

Professor.hasMany(Turma, { foreignKey: 'id_professor', onDelete: 'CASCADE' })
Turma.belongsTo(Professor, { foreignKey: 'id_professor' })

module.exports = Turma;
