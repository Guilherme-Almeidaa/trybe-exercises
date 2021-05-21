const express = require('express');
const { Book } = require('../models');
const middlewares = require('../middlewares');
const route = express.Router();

const errorMessage = {
    message: 'Algo de errado'
}

route.get('/', (_req, res) => {

    Book.findAll()
        .then((books) => {
            res.status(200).json(books)
        })
        .catch((e) => {
            console.log(e.message);
            res.status(500)
                .json(errorMessage)
        })
});

route.get('/:id', (req, res) => {
    Book.findByPk(req.params.id)
        .then((book) => {
            if (!book) {
                return res.status(404).json({ message: "Livro não encontrado!!" })
            }

            return res.status(200).json(book);
        })
        .catch((e) => {
            console.log(e.message);
            res.status(500).json(errorMessage)
        })
})

route.post('/', middlewares.bookValidate, (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const createdAt = new Date()
    Book.create({ title, author, pageQuantity, createdAt })
        .then((book) => {
            res.status(200).json(book)
        })
        .catch((e) => {
            console.log(e.message);
            res.status(500).json(errorMessage)
        })
})

route.put('/:id', middlewares.bookValidate, (req, res) => {
    const { title, author, pageQuantity } = req.body;
    Book.update({
        title, author, pageQuantity
    }, {
        where: { id: req.params.id }
    })
        .then((book) => {
            res.status(201).json({ message: 'Livro atualizado com sucesso!!' })
        })
        .catch((e) => {
            console.log(e.message);
            res.status(500).json(errorMessage)
        })
})

route.delete('/:id', (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((book) => {
            res.status(200).json({ message: 'Livro excluído com sucesso!!' })
        })
        .catch((e) => {
            console.log(e.message);
            res.status(500).json(errorMessage)
        })
})

module.exports = route;