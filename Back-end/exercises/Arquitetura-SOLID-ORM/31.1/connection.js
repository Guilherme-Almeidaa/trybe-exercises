
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '3053',
  database: 'plants_data',
});

module.exports = connection;