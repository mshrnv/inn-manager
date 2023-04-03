const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const Company = sequelize.define("company", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    inn: {type: DataTypes.NUMBER, unique: true},
    name: {type: DataTypes.STRING},
    ogrn: {type: DataTypes.NUMBER, unique: true},
    kpp: {type: DataTypes.NUMBER},
})

module.exports = {Company}