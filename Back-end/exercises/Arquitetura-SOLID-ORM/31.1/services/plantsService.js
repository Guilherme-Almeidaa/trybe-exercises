const plants = require('../models/plants')
const defaultPlants = [
    {
        id: 1,
        breed: "Bromelia",
        needsSun: true,
        origin: "Argentina",
        size: 102,
        specialCare: {
            waterFrequency: 3,
        },
    },
    {
        id: 2,
        breed: "Orquidea",
        size: 99,
        needsSun: false,
        origin: "Brazil",
    },
];

const getPlants = async (userModel) => {
    return await userModel.findAll();
}

const findPlantById = (id, data) => {
    return data.filter((plant) => plant.id === Number(id));
};

const getPlantById = async (id) => {
    return await plants.getPlantById(id);
}

const deletePlantById = (id, data) => {
    const newPlants = data.find((plant) => plant.id === Number(id));
    data.splice(data.indexOf(newPlants), 1)
    return data
};

const removePlantById = (id) => {
    return deletePlantById(id, defaultPlants)
}

const editPlantIntoData = (plantId, newPlant) => {
    return defaultPlants.map((plant) => {
        if (plant.id === Number(plantId)) {
            return { id: plantId, ...newPlant };
        }
        return plant;
    });
};

const editPlant = (id, newPlant) => {
    return editPlantIntoData(id, newPlant)
}

const checkOrigin = (origin) => {
    return origin === 'Brazil' ? 8 : 7
}

const checkWaterFrequency = (needsSun, size) => {
    return needsSun ? size * 0.77 : (size / 2) * 1.33
}

const initPlant = ({ id, breed, needsSun, origin, specialCare, size }) => {
    const waterFrequency = checkWaterFrequency(needsSun, size) + checkOrigin(origin)
    const newPlant = {
        id,
        breed,
        needsSun,
        origin,
        specialCare: {
            waterFrequency,
            ...specialCare,
        },
        size,
    };

    return newPlant;
};

const newPlantAdd = (plant) => {
    const mappedPlant = initPlant({ id: defaultPlants.length + 1, ...plant });
    defaultPlants.push(mappedPlant);
    return defaultPlants;
};


const createNewPlant = (newPlant) => {
    return newPlantAdd(newPlant);
}

const checkNeedSun = (plant) => {
    return plant.needsSun;
}

const checkNumberWaterFrequency = (plant) => {
    return plant.specialCare.waterFrequency > 2
}

const filterPlants = () => {
    const filteredPlants = defaultPlants.filter((plant) =>
        checkNeedSun(plant) &&
        checkNumberWaterFrequency(plant)
    );
    return filteredPlants;
}


const getPlantsThatNeedsSunWithId = (id) => {
    return filterPlants().find((plant) => plant.id === Number(id)) || [];
};

const getPlantByIdNeedSun = (id) => {
    return getPlantsThatNeedsSunWithId(id)
}

module.exports = {
    getPlants,
    getPlantById,
    removePlantById,
    editPlant,
    createNewPlant,
    getPlantByIdNeedSun

}