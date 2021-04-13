const { MongoClient } = require('mongodb')

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}


const URL = 'mongodb://localhost:27017'


let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(URL, OPTIONS)
      .then((conn) => {
        db = conn.db('rest_exercicios');
        return db;
      })
}

module.exports = connection;