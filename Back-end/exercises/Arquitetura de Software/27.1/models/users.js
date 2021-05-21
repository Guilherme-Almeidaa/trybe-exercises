const connection = require('../models/connection');
const { ObjectId } = require('mongodb')

const add = async (firstName, lastName, email, password) => {

    const addData = await connection()
        .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))



    return {
        id: addData.insertedId,
        firstName,
        lastName,
        email,
    }
}

const getAllUsers = async () => {
    const allUsers = await connection()
        .then((db) => db.collection('users').find().toArray())

    return allUsers
}

const findById = async (id) => {
    if (!ObjectId.isValid(id)) return null
    const user = await connection()
        .then((db) => db.collection('users').findOne(new ObjectId(id)))
    if (!user) return null
    return [user]
}

const updateUser = async (id, firstName, lastName, email, password) => {
    if (!ObjectId.isValid(id)) return null
    const onj = await findById(id)
    const user = await connection()
        .then((db) => db.collection('users').updateOne({ _id: ObjectId(id) },
            {
                $set:
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
            }))
    console.log(user)
    if (user.result.n < 1) return null
    return {
        id: onj[0]._id,
        firstName,
        lastName,
        email,
    }

}

module.exports = {
    add,
    getAllUsers,
    findById,
    updateUser,
}