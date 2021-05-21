const { Router } = require('express');
const express = require('express');
const fs = require('fs');
const { type } = require('os');
const data = fs.readFileSync('./simpsons.json')
const convert = JSON.parse(data)
const app = express();
app.use(express.json())


app.get('/ping', (req, res) => {
    res.send({
        message: 'Pong!'
    })
});

app.get('/simpsons', (req, res) => {

    res.send(
        JSON.parse(data).map((person) => `Nome:${person.name}`)
    )
})

app.get('/simpsons/:id', (req, res) => {
    const { id } = req.params
    res.send(
        convert.find((item) => item.id === id) || []
    )
    console.log(convert.find((item) => item.id === id))
})

const logMiddleware = (err,req,res,next) => {
    res.send({error:`Error :${err.message}`})
 }

app.post('/simpsons',logMiddleware, (req, res ) => {
    const { name, id } = req.body
    const addPerson = {
        name,
        id
    }

    
    const checkIncludesId = convert.find((item) => item.id === id)
    console.log(checkIncludesId)
    if (checkIncludesId !== undefined) {
        res.status(400).send({message:"O id ja existe"})

    } else {
        const personUp = [...convert, addPerson]
        fs.writeFile('./simpsons.json', JSON.stringify(personUp, null, ' '), (err) => {
            if (err) {
                throw err.message
            } else {
               console.log('Arquivo Salvo')
            }
        })

    }

})

app.post('/hello', (req, res) => {
    const { name, age } = req.body
    console.log(req.body)
    if (Number(age) > 17) {
        res.status(200).send({
            message: `Hello , ${name}!`
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }

})

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params
    console.log(req.params)
    res.send({
        message: `Seu nome é ${name} e você tem ${age} de idades`
    })
})



app.listen(3000, () => {
    console.log("Porta 3000")
})