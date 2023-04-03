const Router = require('express')
const router = Router()
const companyController = require('../controllers/companyController')

router.get('/', companyController.getByInn)

module.exports = router