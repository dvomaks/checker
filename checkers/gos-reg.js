const axios = require('axios').default;

const COMPANY_REGISTERED_URL = 'https://egrul.nalog.ru';

class GosReg {
    constructor({ name, inn}) {
        this.name = name
        this.inn = inn
    }

    registered () {
        return axios.post(COMPANY_REGISTERED_URL, {
            query: this.inn
        })
            .then(resp => {
                return resp
            })
            .catch(e => {
                console.log(e);
            })
    }
}

module.exports = GosReg;
