const productsModel = require('./models/productModel.js');
const productsController = require('./controllers/productController.js');


const token = "4eeccf1a5bbe2a23"

describe('Products Controllers', () => {
    describe('Get all products', () => {
        test('Quando fizer a chamada retorna todos os produtos', async () => {

            const mockData = [
                { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
                { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
                { "id": 3, "name": "MacBook Air", "brand": "Apples" }
            ];

            const getOneSpy = jest.spyOn(productsModel, 'getAll').mockResolvedValueOnce(mockData);
            const mockReq = { body: {}, headers: { authorization: token } }
            const mockRes = { status: jest.fn(), json: jest.fn() };


            await productsController.getAllProducts(mockReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(mockData);
            getOneSpy.mockRestore();
        })


    })

    describe('Get Product By Id', () => {
        test('Quando fizer uma chamada com o Id 1 ,deve retornar o produto Cerveja Skol', async () => {
            const mockData = { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" };

            const getOneSpy = jest.spyOn(productsModel, 'getById').mockResolvedValueOnce(mockData);
            const moqReq = { params: { id: 1 } };
            const mockRes = { status: jest.fn(), json: jest.fn() };

            await productsController.getProductById(moqReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(mockData);
            getOneSpy.mockRestore();
        })

        test('Quando fizer uma chamada com Id inexistente retornar erro 404', async () => {
            const mockData = null;
            const messageError = {
                "message": "Produto não encontrado"
            }

            const getOneSpy = jest.spyOn(productsModel, 'getById').mockResolvedValueOnce(mockData);
            const moqReq = { params: { id: 1234 } };
            const mockRes = { status: jest.fn(), send: jest.fn() };

            await productsController.getProductById(moqReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.send).toHaveBeenCalledWith(messageError);
            getOneSpy.mockRestore();
        })
    })


    describe('Post product', () => {
        test('Quando fizer a chamada adiciona o produto e retornar o mesmo', async () => {
            const mockData = { id: 4, name: 'PS5', brand: 'Sony' };
            const { name, brand } = mockData
            const getOneSpy = jest.spyOn(productsModel, 'add').mockResolvedValueOnce(mockData)
            const mockReq = { body: { name, brand } };
            const mockRes = { status: jest.fn(), json: jest.fn() };

            await productsController.createProduct(mockReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(mockData)
            getOneSpy.mockRestore();

        })

        test('Quando der alum erro retornar Algo deu errado', async () => {
            const mockData = { id: 4, name: 'PS5', brand: 'Sony' };
            const { name, brand } = mockData
            const messageError = { message: 'Algo deu errado' }
            const getOneSpy = jest.spyOn(productsModel, 'add').mockRejectedValueOnce(new Error())
            const mockReq = { body: { name, brand } };
            const mockRes = { status: jest.fn(), send: jest.fn() };

            await productsController.createProduct(mockReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.send).toHaveBeenCalledWith(messageError)
            getOneSpy.mockRestore();
        })
    })

    describe('Delete product', () => {
        test('Quando form chamada com o id2 delete um produto e retorna os produtos restantes', async () => {
            const mockData = [
                { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
                { "id": 3, "name": "MacBook Air", "brand": "Apples" }
            ];

            const getOneSpy = jest.spyOn(productsModel, 'remove').mockResolvedValueOnce(mockData)
            const mockReq = { params: { id: 2 } };
            const mockRes = { status: jest.fn(), json: jest.fn() };

            await productsController.deleteProductById(mockReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(mockData)
            getOneSpy.mockRestore();
        })

        test('Quando der alum erro retornar Algo deu errado', async () => {
            const messageError = { message: 'Algo deu errado' }

            const getOneSpy = jest.spyOn(productsModel, 'remove').mockRejectedValueOnce(new Error())
            const mockReq = { params: { id: 2 } };
            const mockRes = { status: jest.fn(), send: jest.fn() };

            await productsController.deleteProductById(mockReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.send).toHaveBeenCalledWith(messageError)
            getOneSpy.mockRestore();
        })
    })

    describe('Put product', () => {
        test('Quando chamada com o id3 retorna o produto atualizado', async () => {
            const mockData = [
                { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
                { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
                { "id": 3, "name": 'Nootebook', "brand": 'Asus' },
            ];
            const mockDataUpdate = { name: 'Nootebook', brand: 'Asus' };
            const { name, brand } = mockDataUpdate;
            const getOneSpy = jest.spyOn(productsModel, 'addOrUpdate').mockResolvedValueOnce(mockData);
            const mockReq = {
                body: { name, brand }, params: { id: 3 }
            }
            const mockRes = { status: jest.fn(), json: jest.fn() };

            await productsController.editProductById(mockReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(mockData)
            getOneSpy.mockRestore();
        })

        test('Quando chamada com o id inexsitente adciona um novo produto', async () => {
            const mockData = [
                { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
                { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
                { "id": 3, "name": 'Nootebook', "brand": 'Asus' },
                { "id": 4, "name": 'PS5', "brand": 'Sony' },
            ];

            const { name, brand } = mockData[mockData.length - 1]
            
            const getOneSpy = jest.spyOn(productsModel, 'addOrUpdate').mockResolvedValueOnce(mockData)
            const mockReq = {
                body: { name, brand }, params: { id: 23 }
            }
            const mockRes = { status: jest.fn(), json: jest.fn() };

            await productsController.editProductById(mockReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(mockData);
            getOneSpy.mockRestore();
        })

        test('Quando der alum erro retornar Algo deu errado', async () => {
            const messageError = { message: 'Algo deu errado' }
            const mockDataUpdate = { name: 'Nootebook', brand: 'Asus' };
            const { name, brand } = mockDataUpdate;
            const getOneSpy = jest.spyOn(productsModel, 'addOrUpdate').mockRejectedValueOnce(new Error())
            const mockReq = {
                body: { name, brand }, params: { id: 23 }
            }
            const mockRes = { status: jest.fn(), send: jest.fn() };

            await productsController.editProductById(mockReq, mockRes);
            expect(getOneSpy).toHaveBeenCalledTimes(1);
            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.send).toHaveBeenCalledWith(messageError)
            getOneSpy.mockRestore();
        })
    })
})