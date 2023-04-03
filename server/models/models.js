const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const Company = sequelize.define("company", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    inn: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    ogrn: {type: DataTypes.STRING, unique: true},
    kpp: {type: DataTypes.STRING},
})

module.exports = {Company}