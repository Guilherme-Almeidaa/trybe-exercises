const express = require('express');
const router = express.Router();

const createToken = () => {
    let token = ''
    const characters = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ123456789'

    for (let i = 0; i < 12; i++) {
        const number = Math.floor(Math.random() * characters.length)
        token += characters[number]
    }
    return token
}

const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/.test(email);
}


router.get('/', (req, res) => {
    const { email, password } = req.body;
    if (!validateEmail(email) ||
        typeof (password) !== 'number' ||
        password.toString().length < 4 ||
        password.toString().length > 8) {
            console.log(req.body)
        res.status(401).send({
            message: 'email or password is incorrect'
        })
        
    }

    res.send({
        token: createToken()
    })
})

module.exports = router;
