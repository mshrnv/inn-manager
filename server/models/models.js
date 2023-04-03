const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const Company = sequelize.define("company", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    inn: {type: DataTypes.INTEGER, unique: true},
    name: {type: DataTypes.STRING},
    ogrn: {type: DataTypes.INTEGER, unique: true},
    kpp: {type: DataTypes.INTEGER},
})

module.exports = {Company}