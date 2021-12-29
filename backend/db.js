const mysql = require('mysql2');
const dbConfig = require('./config/dbConfig.js');

const pool = mysql.createPool(dbConfig);

module.exports = pool;
