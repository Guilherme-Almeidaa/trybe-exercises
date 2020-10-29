

function myRemove(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (item !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
const list = [1, 2, 3, 4];
const expected = myRemove(list, 5);

test('Expected return' , () => {
    expect(expected).toEqual([1,2,3,4]);
})