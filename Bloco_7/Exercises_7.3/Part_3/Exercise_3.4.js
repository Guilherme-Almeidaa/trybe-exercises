const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i -= 1;
            len -= 1;
        }
    }

    return arr;
}
const list = [1, 2, 3, 4]
const expected = myRemoveWithoutCopy(list, 5)
assert.deepEqual(expected , [1,2,3,4] ,'Não retorna o array esperado')