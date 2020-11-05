

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
const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3)
test('Do not return equal' , () => {
    expect(expected).not.toEqual([1,2,3,4]);
})