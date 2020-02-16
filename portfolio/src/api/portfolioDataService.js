let axios = require('axios')

class portfolioDataService {
    sendEmail(emailContent)
    {
        return new Promise((resolve) =>
            resolve(axios.post(`localhost:3000/api/v1/email`, emailContent))
        )
    }
}
export default new portfolioDataService()