const Pool = require('pg').Pool;
require('dotenv').config();


const pool = new Pool({
    user: process.env.userDB,
    host: process.env.hostDB,
    database: process.env.databaseDB,
    password: process.env.passwordDB,
    port: process.env.portDB,
});

module.exports = pool;