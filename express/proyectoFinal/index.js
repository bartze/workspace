const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');

app.use('/users', usersRouter);
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
