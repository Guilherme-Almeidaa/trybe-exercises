const checkEmailAndPasswordMiddiwares = require('./checkEmailandPassword');
const checkNameMiddiware = require('./checkUserName');
const errorMiddware = require('./errorMiddwares');
const addUserMiddware = require('./addUser')
const updateUser = require('./updateUser')

module.exports = {
    checkEmailAndPasswordMiddiwares,
    checkNameMiddiware,
    addUserMiddware,
    updateUser,
}