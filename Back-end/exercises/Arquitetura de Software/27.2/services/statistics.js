const statistics = require('../models/statistics');

const getStatisticsUf = async (uf) => {
    const result = await statistics.getStatisticsUf(uf)
    if (!result) {
        return {
            code: 404,
            message: 'Estado não encontrado'
        }
    }

    return result
}

const getStatisticsCity = async (city) => {
    const result = await statistics.getStatisticsCity(city)
    if (!result) {
        return {
            code: 404,
            message: 'Cidade não encontrado'
        }
    }

    return result
}

module.exports = {
    getStatisticsCity,
    getStatisticsUf
}