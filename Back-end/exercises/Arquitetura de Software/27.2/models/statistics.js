const connection = require('./connection');

const getStatisticsCity = async (city) => {
    const result = await connection()
        .then((db) => db.collection('statistics').findOne({ cidade: city },{_id:false}))

    return result;
}

const getStatisticsUf = async (uf) => {
    const result = await connection()
        .then((db) => db.collection('statistics').findOne({ UF: uf },{_id:false}))
 
    return result;
}

module.exports = {
    getStatisticsCity,
    getStatisticsUf
}
