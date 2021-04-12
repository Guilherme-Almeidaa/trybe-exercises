const express = require('express');
const router = express.Router();
const recipe = require('../data/recipe.json')
const fs = require('fs')


const saveDataRecipe = () => {
    fs.writeFile(__dirname + '/../data/recipe.json', JSON.stringify(recipe, null, ' '), (err) => {
        if (err) {
            throw err
        }
    })
}
router.delete('/:id', (req, res) => {
    const { id } = req.params
    const recipeDelete = recipe.find((recipe) => recipe.id === Number(id));
    if (!recipeDelete) {
        res.status(404).send({
            message: 'recipe not found'
        })
    }
    recipe.splice(recipe.indexOf(recipeDelete), 1)
    console.log(recipe)
    res.send(recipeDelete)
})

router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, ingredientes } = req.body;

    const recipeUpdate = recipe.find((recipe) => recipe.id === Number(id));
    if (!recipeUpdate) {
        res.status(404).send({
            message: 'recipe not found'
        })
    }

    recipe[recipe.indexOf(recipeUpdate)].name = nome;
    recipe[recipe.indexOf(recipeUpdate)].ingredientes = ingredientes;

    saveDataRecipe()

    res.send({
        message: 'Receita atualizada'
    })

})

router.post('/:id/ingredientes', (req, res) => {
    const { id } = req.params;
    const recipeUpdateIngredents = recipe.find((recipe) => recipe.id === Number(id));
    if (!recipeUpdateIngredents) {
        res.status(401).send({
            message: 'recipe not found '
        })
    }
    if (Object.keys(req.body)[0] === 'remove') {
        const { remove } = req.body;
        remove.forEach((ingredient) => {
           
           
            recipe[recipe.indexOf(recipeUpdateIngredents)].ingredientes.splice(recipe.indexOf(ingredient))
        })
        saveDataRecipe()
        res.send({
            message: 'Ingredientes removidos'
        })
    } else if (Object.keys(req.body)[0] === 'insert') {
        const { insert } = req.body;
        insert.forEach((ingredient) => {
            recipe[recipe.indexOf(recipeUpdateIngredents)].ingredientes.push(ingredient)
        })
        saveDataRecipe()
        res.send({
            message: 'Ingredientes inseridos'
        })
    }

    res.status(401).send({
        message: 'ingredientes não especificados'
    })


})

module.exports = router;