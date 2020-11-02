const uppercase = require("./1_exercise");

test('If you pass a string with lowercase letters, you must return in capital letters', () => {
    uppercase('guilherme', (result) => {
        expect(result).toBe('GUILHERME')
    })
})