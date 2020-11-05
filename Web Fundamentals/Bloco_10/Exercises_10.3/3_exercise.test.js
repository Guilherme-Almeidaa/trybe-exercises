let service = { random } = require('./1_exercise.js')

describe('Exercício 3', () => {
    it('Reset', () => {
        const newImple = jest.spyOn(service, 'random').mockImplementation((a, b, c) => a * b * c)
        expect(newImple(2, 3, 4)).toBe(24);
        expect(newImple).toHaveBeenCalled();
        expect(newImple).toHaveBeenCalledTimes(1);
        expect(newImple).toHaveBeenCalledWith(2, 3, 4);

        service.random.mockReset()

        const newImple2 = jest.spyOn(service, 'random').mockImplementation((a) => a + a)
        expect(newImple2(25)).toBe(50);
        expect(newImple2).toHaveBeenCalled();
        expect(newImple2).toHaveBeenCalledTimes(1);
        expect(newImple2).toHaveBeenCalledWith(25);
    })
})