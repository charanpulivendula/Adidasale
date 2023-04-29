const mysql = require('mysql2')
module.exports = mysql.createConnection({
    host: 'adidasale.cy9ccofudlwp.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'qwertyuiop',
    database: 'adidasale'
  });