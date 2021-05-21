const plants = require('./services/plantsService');
const connection = require('./connection');

const getPlants = (userModel) => async (_req, res) => {
    try {
        const result = await userModel.getPlants();
      return  res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
}

const getPlantById = async (req, res) => {
    try {
        const { id } = req.params
        res.status(200).json(await plants.getPlantById(id))
    } catch (error) {
        console.log(error);
    }
}

const removePlantById = (req, res) => {
    try {
        const { id } = req.params;
        res.status(201).json(plants.removePlantById(id))
    } catch (error) {
        console.log(error)
    }
}

const editPlant = (req, res) => {
    try {
        const { id } = req.params;
        res.status(201).json(plants.editPlant(id, req.body))
    } catch (error) {
        console.log(error)
    }
}



const createdPlant = (req, res) => {
    try {
        res.status(201).json(plants.createNewPlant(req.body))
    } catch (error) {
        console.log(error)
    }
}

const getPlantByIdNeedSun = (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json(plants.getPlantByIdNeedSun(id))
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPlants,
    getPlantById,
    removePlantById,
    editPlant,
    getPlantByIdNeedSun,
    createdPlant
}