const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const Aluno = require('./Aluno')

const Checklist = sequelize.define('Checklist', {
    id_checklist: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    semana: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: true
})

Aluno.hasMany(Checklist, { foreignKey: 'id_aluno', onDelete: 'CASCADE' })
Checklist.belongsTo(Aluno, { foreignKey: 'id_aluno' })

module.exports = Checklist;
