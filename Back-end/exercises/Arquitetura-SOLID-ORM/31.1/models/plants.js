const connection = require("../connection")


const formatData = (data) => {
    
        return data.map(({ id, breed, needSun, waterFrequency, origin, size }) => {
            return {
                id,
                breed,
                needSun: needSun === 0 ? false : true,
                origin,
                size,
                specialCare: waterFrequency !== null ? {
                    waterFrequency: waterFrequency
                } : undefined,

            }
        })
   
}

const getAllPlants = async (connection) => {
    const [result] = await connection.execute(
        'SELECT plts.id AS id,plts.need_sun AS needSun,special.water_Frequency AS waterFrequency,plts.breed AS breed, origin,size FROM plants AS'
        + ' plts INNER JOIN special_Care AS special'
        + ' ON plts.id = special.id_Plant'
    )

    return formatData(result)
}


const getPlantById = async (connection, id) => {
    const [[result]] = await connection.execute(
        'SELECT plts.id AS id,plts.need_sun AS needSun,special.water_Frequency AS waterFrequency,plts.breed AS breed, origin,size FROM plants AS'
        + ' plts INNER JOIN special_Care AS special'
        + ' ON plts.id = special.id_Plant'
        + ' WHERE plts.id = ?', [id]
    )

    const { breed, needSun, waterFrequency, origin, size } = result;
    return {
        id:result.id,
        breed,
        needSun: needSun === 0 ? false : true,
        origin,
        size,
        specialCare: waterFrequency !== null ? {
            waterFrequency: waterFrequency
        } : undefined,

    }
}

const factory = (connection) => {
    return {
        findAll:() =>  getAllPlants(connection),
        getPlantById:() => getPlantById(connection,id)
    }
}

module.exports = {
    factory,
}