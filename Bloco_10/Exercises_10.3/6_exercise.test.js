let { requestDog } = require('./3_exercise.js')


describe('Request dog', () => {
    requestDog = jest.fn();
    afterEach(() => {
        requestDog.mockReset()
    })
    it('Should succeed', async () => {
        requestDog.mockResolvedValue('request sucess')
        expect(requestDog()).resolves.toBe('request sucess')
        expect(requestDog).toHaveBeenCalledTimes(1);
    })

    it('Should failed', async () => {
       requestDog.mockRejectedValue('request failed');

       expect(requestDog()).rejects.toBe('request failed')
       expect(requestDog).toHaveBeenCalledTimes(1); 
    })

})