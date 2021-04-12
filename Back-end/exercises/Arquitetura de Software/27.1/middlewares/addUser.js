const users = require('../models/users')

const addUserMiddware = async (req,res,_next) => {
    const {firstName,lastName,email,password} = req.body
    try {
        const result = await users.add(firstName,lastName,email,password)
   
    res.status(201).json(result)
    } catch (error) {
        res.status(500).end
        console.error(error.message)
        
    }
   
}

module.exports = addUserMiddware;