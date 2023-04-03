const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME,     // Database name
    process.env.DB_USER,     // Database user
    process.env.DB_PASSWORD, // Password
    {
        dialect: "postgres",
        host: process.env.DB_HOST, // Database host
        port: process.env.DB_PORT  // Database port
    }
)