
const fetch = require('node-fetch');

const headers = {
    Accept: 'application/json',
};

const requestApi = async (cep) => {
    const request = await fetch(`http://cep.la/${cep}`, { headers })
    const json = await request.json()

    return json
}

module.exports = {
    requestApi,
}
