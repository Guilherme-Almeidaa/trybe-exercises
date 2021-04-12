const express = require('express');
const middiwares = require('../middlewares')
const router = express.Router();
const users = require('../models/users')

router.post('/', middiwares.checkNameMiddiware, middiwares.checkEmailAndPasswordMiddiwares, middiwares.addUserMiddware)
router.get('/', async (req, res) => {

    try {
        const result = await users.getAllUsers()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).send({
            messsage: "Not found"
        })
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await users.findById(id)
        if(!result) {
            res.status(404).json(
                {
                    "error": true,
                    "message": "Usuário não encontrado"
                }
            )
            return
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(404).send({
            message:'Not found'
        })
        console.log(error)
    }
})

router.put('/:id',middiwares.checkNameMiddiware, middiwares.checkEmailAndPasswordMiddiwares,middiwares.updateUser)

module.exports = router;
