const mysql = require('mysql2/promise')

const connectToMysql = mysql.createPool({
    database: 'qlinh',
    port: 3308,
    host: 'localhost',
    user: 'root',
    password: '123456',
    queueLimit: 0,
    connectionLimit: 10,
    waitForConnections: true
})

module.exports = connectToMysql