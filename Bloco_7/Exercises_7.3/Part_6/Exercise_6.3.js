const assert = require('assert');
const addAllnumbers = (number) => {
    let result = 0
    for (let index = 0; index <number.length; index += 1){
         result+=number[index]
    }
    return result
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);