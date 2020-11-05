const { TestScheduler } = require('jest');

let service = require('./1_exercise.js')

describe('Exercício 1', () => {
    it('Testes', () => {
        service.random = jest.fn().mockReturnValue(10);
        expect(service.random()).toBe(10);
        expect(service.random).toHaveBeenCalled();
        expect(service.random).toHaveBeenCalledTimes(1)
    })
})