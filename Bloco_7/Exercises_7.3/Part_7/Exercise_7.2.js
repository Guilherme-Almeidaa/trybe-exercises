const assert = require('assert');
const removeVowels = (word) => {
    let cont = 1
    let results = '';

    for (let i = 0; i < word.length; i += 1) {
        if (
            word[i] === 'a' ||
            word[i] === 'o' ||
            word[i] === 'i' ||
            word[i] === 'e' ||
            word[i] === 'u'
        ) {
            results += cont;
            cont += 1
        } else {
            results += word[i];
        }
    }
    return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const remove = removeVowels(parameter);
assert.deepStrictEqual(remove, result)