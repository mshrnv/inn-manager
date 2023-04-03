require('dotenv').config()
const express = require('express')
const sequelize = require('./database')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Main router
app.use("/api", router)

const start = async () => {
    try {
        // Connecting to database
        await sequelize.authenticate()
        await sequelize.sync()

        // Starting express app
        app.listen(PORT, () => `Server started on port = ${PORT}`)
    } catch (e) {
        console.log(e)
    }
}

start()