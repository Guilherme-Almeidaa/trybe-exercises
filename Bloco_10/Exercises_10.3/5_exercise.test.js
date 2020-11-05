let service = { up, first, concatenate } = require('./2_exercise.js')

describe('Exercício 5 ', () => {
    it('Reset', () => {
        service.up = jest.spyOn(service, 'up').mockImplementation((string) => string.toLowerCase())
        expect(service.up('GUI')).toBe('gui')
        expect(service.up).toHaveBeenCalled();
        expect(service.up).toHaveBeenCalledTimes(1);
        expect(service.up).toHaveBeenCalledWith('GUI');
       
        service.up.mockRestore()

        expect(service.up('gui')).toBe('GUI')
        
        

    })
})