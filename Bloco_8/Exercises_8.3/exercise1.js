
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
    let array = ((arrays.reduce((result, iten) => result.concat(iten))));
    return array;
    /* Utilizei  HOF reduce junto com a função concat  para concatenar os arrays. */
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);