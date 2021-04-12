const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');
const rescue = require('express-rescue');



const validateToken = (token) => {
    let resultString = 0
    let resultNumber = 0

    const number = 2
    if (token.length !== 12) {
        return false
    }
    for (let i = 0; i < token.length; i++) {
        const check = Number(token[i]) + number
        if (!isNaN(check)) {
            resultNumber += 1
        } else if (typeof (token[i] === 'string')) {
            resultString += 1

        }
    }

    if (resultString > 0 && resultNumber > 0) {
        return true
    } else {
        return false
    }

}

const fetchToken = () => {
    return new Promise((resolve, reject) => {


        fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
            .then((response) => response.json()
                .then((json) => (response.ok ? resolve(json) : reject(json))))


    })


}


router.get('/', rescue(async (req, res) => {
    const { authorization } = req.headers
    const result = await fetchToken().then((response) => response)
    if (validateToken(authorization)) {
        res.send(result)
    } else {
        res.status(401).send({
            message: 'invalid token'
        })
    }

}))

module.exports = router;