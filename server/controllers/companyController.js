const companyService = require('../services/companyService')

class CompanyController {
    async getByInn(req, res) {
        try {
            const company = await companyService.getCompanyByInn(req.query.inn)
            res.json(company)
        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
    }
}

module.exports = new CompanyController()