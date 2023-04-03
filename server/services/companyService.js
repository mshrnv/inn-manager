const {Company} = require('../models/models')

class CompanyService {
    async getCompanyByInn(inn) {
        const company = await Company.findOne({where: {inn}})

        return company
    }
}

module.exports = new CompanyService()