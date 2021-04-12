const andresses = require('../services/andressesService');

const getAndress = async (req, res) => {
    try {
        const { cep } = req.query;
        if (!cep) return res.status(400).json({
            message: 'Insira o cep'
        })
        const result = await andresses.getAndress(cep)
        if (result.message) {
            return res.status(result.code).json({
                message: result.message
            })
        }
        return res.status(200).json(result)

    } catch (error) {
        res.status(500).json({
            message: 'Not Found'
        })

        console.log(error.message)
    }
}

module.exports = {
    getAndress,
}