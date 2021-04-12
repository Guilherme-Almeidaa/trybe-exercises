const statistics = require('../services/statistics');


const requestUf = async (uf,res) => {
    const resultUf = await statistics.getStatisticsUf(uf)
    if (resultUf.message) {
        return res.status(resultUf.code).json({
            message: resultUf.message
        })
    }

    return res.status(200).json(resultUf) 
}

const requestCity = async (city,res) => {
    const resultCity = await statistics.getStatisticsCity(city)
    if (resultCity.message) {
        return res.status(resultCity.code).json({
            message: resultCity.message
        })
    }

    return  res.status(200).json(resultCity) 
}

const checkExists = async (res, city, uf) => {
    if (!city && !uf) {
        return res.status(400).json({
            message: 'Insira uma cidade ou estado'
        })
    }
    if (!city) {
        return await requestUf(uf,res)
    }

    if (!uf) {
        return await requestCity(city,res)
    }

}


const getStatistics = async (req, res) => {
    try {
        const { cidade, uf } = req.query
        const check = await checkExists(res, cidade, uf)
        return check
    } catch (error) {
        res.status(500).json({
            message: 'Not Found'
        })

        console.log(error.message)
    }
}

module.exports = {
    getStatistics,
}