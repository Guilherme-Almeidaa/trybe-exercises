const express = require('express');
const router = express.Router();
const posts = require('../data/posts.json')

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = posts.find((post) => post.id === Number(id))
    if (!result) {
        res.status(404).send({
            message: 'id not found'
        })
    }
    res.send(result)

})

router.get('/', (req, res) => {

    try {
        res.send(posts)
    } catch (error) {
        res.status(404).send({
            erro: error
        })
    }
})

module.exports = router;