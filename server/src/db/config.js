import pg from 'pg';

const { Pool } = pg;

// const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'users',
	password: 'qwerty12345',
	port: 5432,
});

export default pool;
// module.exports = pool;
