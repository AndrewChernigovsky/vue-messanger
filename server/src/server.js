import express from 'express';
import db from './db/users/queries.js';
import usersRoutes from './db/users/routes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.use('/api/v1/users', usersRoutes);

app.get('/users', db.getUsers)

app.listen(port, () => console.log(`App running on port ${port}.`));