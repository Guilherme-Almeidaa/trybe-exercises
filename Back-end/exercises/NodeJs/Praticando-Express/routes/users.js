const express = require('express');
const router = express.Router();
const users = require('../data/users.json')
const fs = require('fs')

router.post('/:id', (req, res) => {
    const { id } = req.params
    const { status } = req.body
    const userFind = users.find((user) => user.id === Number(id));
    if (typeof (status) !== 'boolean') {
        res.status(401).send({
            message: "status isn't a boolean"
        })
    }
    
    if (!userFind) {
        res.send({
            message: "user isn't found"
        })
    }

    users[users.indexOf(userFind)].isActive = status
    
    fs.writeFile(__dirname+'/../data/users.json',JSON.stringify(users,null,' '),(err) => {
        if(err) {
            throw err
        }
        
    })

    res.send({
        message:status ? 'Usuario ativado' : 'Usuario desativado'
    })
})

module.exports = router;