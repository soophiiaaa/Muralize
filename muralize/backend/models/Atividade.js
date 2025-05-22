const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const Turma = require('./Turma')

const Atividade = sequelize.define('Atividade', {
    id_atividade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_entrega: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: true
})

Turma.hasMany(Atividade, { foreignKey: 'id_turma', onDelete: 'CASCADE' })
Atividade.belongsTo(Turma, { foreignKey: 'id_turma' })

module.exports = Atividade;
