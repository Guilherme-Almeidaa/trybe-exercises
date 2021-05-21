const models = require('./models/productModel');
const fs = require('fs');

jest.mock('fs');

describe('Testando models', () => {



    it('Se a função getAll retornar todos os produtos', () => {
        const mockProducts = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" }
        ]
        fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockProducts));

        const products = models.getAll();
        expect(products).toBeTruthy()
        expect(products).toStrictEqual(mockProducts);

    })

    it('Se a função getByid retorna o produto correto', () => {
        const mockProducts = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" }
        ]


        fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockProducts));

        const products = models.getById(1);
        expect(products).toBeTruthy()
        expect(products).toStrictEqual(mockProducts[0]);

    })

    it('Se a função getByid com um id inexsitente retorna null', () => {
        const mockProducts = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" }
        ]


        fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockProducts));

        const products = models.getById(4);

        expect(products).toBeNull()

    })

    it('Se a função add retornar o produto adicionado', () => {
        const mockProducts = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" }
        ]
        const mockData = { id: 4, name: 'PS5', brand: 'Sony' };
        const { name, brand } = mockData;

        fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockProducts));
        const product = models.add(name, brand);

        expect(product).toBeTruthy();
        expect(product).toStrictEqual(mockData)

    })

    it('Se a função remove retornar os produtos sem o produto removido', () => {
        const mockProducts = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" }
        ]
        const mockData = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" }
        ]


        fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockProducts));
        const product = models.remove(2);

        expect(product).toBeTruthy();
        expect(product).toStrictEqual(mockData)

    })

    it('Se a função addOrUpdate retorna o produto atualizado', () => {
        const mockProducts = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" }
        ]
        const mockData = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            {"id": 3, "brand": "Sony", "name": "PS5"}
        ];

     
        const { name, brand } = mockData[2];

        fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockProducts));
        const product = models.addOrUpdate(3,name,brand);

        expect(product).toBeTruthy();
        expect(product).toStrictEqual(mockData)

    })

    it('Se a função addOrUpdate com um id inexsistente retorna os produto atualizados', () => {
        const mockProducts = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" }
        ]
        const mockData = [
            { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
            { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
            { "id": 3, "name": "MacBook Air", "brand": "Apple" },
            {"id": 4, "brand": "Sony", "name": "PS5"}
        ];

     
        const { name, brand } = mockData[3];

        fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockProducts));
        const product = models.addOrUpdate(12,name,brand);

        expect(product).toBeTruthy();
        expect(product).toStrictEqual(mockData)

    })



})