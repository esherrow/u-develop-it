const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'C0ff33&c4t5',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
module.exports = db;