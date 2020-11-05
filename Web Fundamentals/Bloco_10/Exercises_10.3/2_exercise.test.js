let service = require('./1_exercise.js')

describe('Exercício 2', () => {
    it('Implementação', () => {
        service.random = jest.fn().mockImplementation((a, b) => a / b);
        expect(service.random(60, 10)).toBe(6);
        expect(service.random).toHaveBeenCalled();
        expect(service.random).toHaveBeenCalledWith(60, 10);
        expect(service.random).toHaveBeenCalledTimes(1);
    })
})