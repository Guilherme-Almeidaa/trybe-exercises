const middlewares = require('./middlewares');
const token = "4eeccf1a5bbe2a23"
describe('middlwares', () => {
    test('Se passando um token válido passa para next()', () => {
        const mockReq = { headers: { authorization: token } };
        const mockRes = { status: jest.fn(), json: jest.fn() };
        const mockNext = jest.fn()
        middlewares.checkAuthToken(mockReq, mockRes, mockNext);

        expect(mockNext).toHaveBeenCalled();
        expect(mockRes.status).not.toHaveBeenCalled();
        expect(mockRes.json).not.toHaveBeenCalled();
    })

    test('Se passando um token inválido retorna um erro', () => {
        const messageError = { message: 'Token inválido!' }
        const mockReq = { headers: { authorization: 'asdsadasdas' } };
        const mockJson = jest.fn();
        const mockRes = { status: jest.fn().mockReturnValue({ json: mockJson }) };
        const mockNext = jest.fn()
        middlewares.checkAuthToken(mockReq, mockRes, mockNext);

        expect(mockNext).not.toHaveBeenCalled();
        expect(mockRes.status).toHaveBeenCalledWith(401)
        expect(mockJson).toHaveBeenCalledWith(messageError)
    })

    test('Test log com body' ,  () => {
        const mockReq = {
            body:{
                nome:"Guilherme"
            }
        }
        const mockRes = {};
        const mockNext = jest.fn();
        const consoleSpy = jest.spyOn(console,'log');
        middlewares.log(mockReq,mockRes,mockNext);
        expect(mockNext).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith(mockReq.body,expect.any(Date))
    })

    test('Test log sem body' ,  () => {
        const mockReq = {}
        const mockRes = {};
        const mockNext = jest.fn();
        const consoleSpy = jest.spyOn(console,'log');
        middlewares.log(mockReq,mockRes,mockNext);
        expect(mockNext).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith(undefined,expect.any(Date))
    })

   
})