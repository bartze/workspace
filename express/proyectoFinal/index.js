const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');

app.use('/api/users', usersRouter);
app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);

app.get('/', (req, res) => {
	res.set('Content-Type', 'text/plain');
	res.status(200).send('Hello Express Final Project!!');
});

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
