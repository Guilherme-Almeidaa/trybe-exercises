const connection = require('./connection');
const cepApi = require('../api/andress')

const getAndressData = async (cep) => {
    const result = await connection()
        .then((db) => db.collection('andresses').findOne({ CEP: cep }))
        
    return result
}

const add = async (cep, uf, cidade, bairro, logradouro) => {
    const result = await connection()
        .then((db) => db.collection('andresses').insertOne({ CEP: cep, UF: uf, cidade, bairro, logradouro }))

    return {
        _id: result.insertedId,
        CEP: cep,
        UF: uf,
        cidade,
        bairro,
        logradouro
    }
}

const getAndressApi = async (cep) => {
    const result = await cepApi.requestApi(cep);
    return result
}

const statisticsAddCity = async (city) => {
    const result = await connection()
        .then((db) => db.collection('statistics').insertOne({cidade:city, quantidade: 1 }))
        
    return result;
}

const statisticsUpdateCity = async (city) => {
    const result = await connection()
        .then((db) => db.collection('statistics').updateOne({ cidade: city }, { $inc: { quantidade: 1 } }))
      
    return result;
}

const statisticsAddUF = async (UF) => {
    const result = await connection()
        .then((db) => db.collection('statistics').insertOne({ UF, quantidade: 1 }))

    return result;
}

const statisticsUpdateUF = async (UF) => {
    const result = await connection()
        .then((db) => db.collection('statistics').updateOne({ UF: UF }, { $inc: { quantidade: 1 } }))

    return result;
}


module.exports = {
    getAndressData,
    getAndressApi,
    add,
    statisticsAddCity,
    statisticsAddUF,
    statisticsUpdateCity,
    statisticsUpdateUF
}
