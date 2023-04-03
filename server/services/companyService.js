const {Company} = require('../models/models')
const axios = require("axios");

class CompanyService {
    async getCompanyByInn(inn) {
        // Search in database
        let company = await Company.findOne({where: {inn}})

        if (!company) {
            // Fetching from external API
            const fetchedCompany = await this.fetchCompany(inn)
            // Saving in database
            company = await Company.create(fetchedCompany)
        }

        return company
    }

    async fetchCompany(inn) {
        // POST query to external API
        const {data} = await axios.post(process.env.API_URL, {query: inn}, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + process.env.API_KEY
            }
        })

        let fetchedCompany = data['suggestions'][0]

        // Checks for empty response
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