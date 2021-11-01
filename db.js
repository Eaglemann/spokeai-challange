const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'kmuswbgujjkjsv',
    host: 'ec2-18-202-1-222.eu-west-1.compute.amazonaws.com',
    database: 'deuc07uliucneq',
    password: '8e96148c9915822fe728028f081e148a69b8717db4a8925e11865b6dca18411d',
    port: 5432,
    ssl: true,
});

module.exports = pool;