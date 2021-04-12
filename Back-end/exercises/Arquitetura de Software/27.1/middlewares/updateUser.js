const users = require('../models/users');

const updateUserMiddware = async (req, res, _next) => {
    const { firstName, lastName, email, password } = req.body;
    
    const { id } = req.params;
    try {
        const result = await users.updateUser(id,firstName, lastName, email, password)
        if (!result) {
            res.status(404).json(
                {
                    "error": true,
                    "message": "Usuário não encontrado"
                }
            )
            return
        }
        res.status(201).json(result)
    } catch (error) {
        res.status(500).end
        console.error(error.message)

    }
}

module.exports = updateUserMiddware;