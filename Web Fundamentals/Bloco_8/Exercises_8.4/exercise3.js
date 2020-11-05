const assert = require('assert')

const alex = {
    name: "Alex",
    age: 26,
    likes: ["fly fishing"],
    nationality: "Australian"
}

const gunnar = {
    name: "Gunnar",
    age: 30,
    likes: ["hiking", "scuba diving", "taking pictures"],
    nationality: "Icelandic"
}

// complete a assinatura da função abaixo
const personLikes = (person) => { 
    const {name , age ,likes} = person //Utilizei object destructuring
    return `${name} is ${age} years old and likes ${likes.join(', ')}.`//Utilizei a função join para separa os elemnetos do Objeto. 
}
assert.equal(personLikes(alex), "Alex is 26 years old and likes fly fishing.")
assert.equal(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.")