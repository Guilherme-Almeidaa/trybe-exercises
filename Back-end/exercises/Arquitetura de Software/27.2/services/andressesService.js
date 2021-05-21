const andresses = require('../models/andresses');
const schemas = require('../schemas/andressesSchema');



const addStatisticsCity = async (city) => {
    const updateCity = await andresses.statisticsUpdateCity(city)
    if (updateCity.modifiedCount < 1) {
        await andresses.statisticsAddCity(city)
        return
    }
   

}

const addStatisticsUF = async (UF) => {
    const updateUF = await andresses.statisticsUpdateUF(UF)
    if (updateUF.modifiedCount < 1) {
        await andresses.statisticsAddUF(UF)
        return
    }

  
}

const getAndress = async (cepInput) => {
    const validations = schemas.validateCep(schemas.formatedCep(cepInput))
    if (validations.message) return validations
    const result = await andresses.getAndressData(schemas.formatedCep(cepInput));
    const { cep, uf, cidade, bairro, logradouro } = await andresses.getAndressApi(schemas.formatedCep(cepInput));
    if (!uf) return {
        code: 404,
        message: 'CEP não encontrado'
    }
    if (!result) {
        const resultApi = await andresses.add(cep, uf, cidade, bairro, logradouro)
        await addStatisticsCity(cidade)
        await addStatisticsUF(uf)
        return resultApi
    }
    await addStatisticsCity(result.cidade)
    await addStatisticsUF(result.UF)
    return result
}

module.exports = {
    getAndress,
}