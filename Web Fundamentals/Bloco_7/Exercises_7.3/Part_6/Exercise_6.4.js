const assert = require('assert');
const findTheNeedle = (arr, iten) => {
    let position;
    for (let index = 0; index < arr.length; index += 1) {
        if (arr[index] === iten) {
            return index
        }
        }
        for (let index = 0; index < arr.length; index += 1) {
            if (arr[index] !== iten) {
                return -1
            }
            }

    
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);

