



let service = { up, first, concatenate } = require('./2_exercise.js')
jest.mock('./2_exercise.js')
describe('Exercício 4', () => {
    it('Novas implementações', () => {
        up.mockImplementation((string) => string.toLowerCase())
        first.mockImplementation((string) => string[string.length - 1])
        concatenate.mockImplementation((string1, string2, string3) => string1 + string2 + string3)
        expect(up('GUILHERME')).toBe('guilherme')
        expect(first('Guilherme')).toBe('e')
        expect(concatenate('Gui', 'lher', 'me')).toBe('Guilherme')
    })
})