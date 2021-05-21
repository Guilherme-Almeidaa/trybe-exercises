const express = require('express');
const plants = require('./plants');
const userModels = require('./models/plants');
const connection = require('./connection');

const app = express();

app.use(express.json());

const userModel = userModels.factory(connection)

app.get('/plants' , userModel.findAll);
app.get('/plant/:id' , plants.getPlantById);
app.delete('/plant/:id',plants.removePlantById)
app.put('/plant/:id' , plants.editPlant)
app.post('/plant' , plants.createdPlant)
app.get('/sunny/:id' , plants.getPlantByIdNeedSun)

app.listen(3001,console.log('Rodando porta 3000'))




