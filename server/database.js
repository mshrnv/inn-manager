const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.inn_manager,       // Database name
    process.env.POSTGRES_USER,     // Database user
    process.env.POSTGRES_PASSWORD, // Password
    {
        dialect: "postgres",
        host: "database", // Database host
        port: process.env.POSTGRES_PORT  // Database port
    }
)