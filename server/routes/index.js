const Router = require('express')
const router = Router()
const companyRouter = require('./companyRouter')

router.use("/company", companyRouter)

module.exports = router