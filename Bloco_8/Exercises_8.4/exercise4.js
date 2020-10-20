const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo
const filterPeople = (obj) => {
    const australian = obj.filter((info) => info.nationality === 'Australian' && info.bornIn >= 1901 && info.bornIn <= 2000);//Utilizei a HOF filter para filtrar de acordo com o que pede o exercício.
    return { name: name, bornIn: bornIn, nationality: nationality } = australian;
}
const filteredPeople = filterPeople(people)


assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })