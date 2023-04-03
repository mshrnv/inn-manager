const {Company} = require('../models/models')
const axios = require("axios");

class CompanyService {
    async getCompanyByInn(inn) {
        let company = await Company.findOne({where: {inn}})

        if (!company) {
            const fetchedCompany = await this.fetchCompany(inn)
            company = await Company.create(fetchedCompany)
        }

        return company
    }

    async fetchCompany(inn) {
        const {data} = await axios.post(process.env.API_URL, {query: inn}, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + process.env.API_KEY
            }
        })

        let fetchedCompany = data['suggestions'][0]

        if (!fetchedCompany) {
            throw new Error("Некорректный ИНН")
        }

        return {
            inn,
            name: fetchedCompany.value,
            ogrn: fetchedCompany.data.ogrn,
            kpp: fetchedCompany.data.kpp
        };
    }
}

module.exports = new CompanyService()