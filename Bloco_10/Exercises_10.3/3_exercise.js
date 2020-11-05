const fetch = require('node-fetch')
async function requestDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const object = await response.json()
    return object
}

module.exports = { requestDog } 