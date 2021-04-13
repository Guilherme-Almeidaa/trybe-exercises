const connection = require('./connection');
const { ObjectId } = require('mongodb');
const add = async (name, brand) => {
  try {

    const result = await connection()
      .then((db) => db.collection('products').insertOne({ name, brand }))


    return { id: result.insertedId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const rows = await connection()
      .then((db) => db.collection('products').find().toArray())
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const result = await connection()
      .then((db) => db.collection('products').findOne({ _id: ObjectId(id) }))

    if (!result) return null
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection()
    .then((db) => db.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, brand } }))
    return {
      id,
      name,
      brand
    };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {

    await connection()
      .then((db) => db.collection('products').deleteOne({_id:ObjectId(id)}))


  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };