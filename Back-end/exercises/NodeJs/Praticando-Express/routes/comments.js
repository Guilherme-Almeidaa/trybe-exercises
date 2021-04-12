const express = require('express');
const router = express.Router();


const users = [
    {
        id: 2,
        user: 'antonio',
        comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
    },
    {
        id: 3,
        user: "rodrigo",
        comments: ["To aqui também", "Agora não tô"]
    }
]

router.get('/', (req, res) => {
    const { filter } = req.body
    const filterUsers = users.filter((user) => user.user === filter)
    const filterId = users.filter((user) => user.id === filter)
    if (filterUsers.length === 0 && filterId.length === 0) {
        res.status(401).send({
            message: 'Nâo encontrado'
        })
    }
    if (!filter) {
        res.send(users.map((item) => item.comments))
    }
    if (typeof (filter) !== 'number' && filterUsers) {
        res.send(filterUsers.map((item) => item.comments))
    }
   res.send(filterId.map((item) => item.comments))

})

module.exports = router;