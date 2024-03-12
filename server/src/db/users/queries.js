import pool from '../config.js';

const getUsers = (req, res) => {
	pool.query('SELECT * FROM users', (error, results) => {
		if (error) {
			throw error
		}
		res.status(200).json(results.rows)
	})
}
export default { getUsers };