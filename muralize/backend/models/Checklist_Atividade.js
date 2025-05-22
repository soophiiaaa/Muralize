const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const Checklist = require('./Checklist')
const Atividade = require('./Atividade')

const ChecklistAtividade = sequelize.define('ChecklistAtividade', {
    concluida: DataTypes.BOOLEAN
})

Checklist.belongsToMany(Atividade, { through: ChecklistAtividade, foreignKey: 'id_checklist' })
Atividade.belongsToMany(Checklist, { through: ChecklistAtividade, foreignKey: 'id_atividade' })

module.exports = ChecklistAtividade;
