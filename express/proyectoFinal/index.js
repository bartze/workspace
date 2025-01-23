const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const session = require('express-session');
const app = express();
const port = 3000;

// Configurar el motor de plantillas Mustache
app.engine('html', mustacheExpress(path.join(__dirname, 'views', 'partials'), '.html'));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Configurar partials
app.set('partials', path.join(__dirname, 'views', 'partials'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar middleware para sesiones
app.use(
	session({
		secret: 'ClaveMegaSecreta',
		resave: false,
		saveUninitialized: false,
	}),
);

const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');
const loginRouter = require('./routes/login');
const apiRouter = require('./routes/api');

app.use('/api/users', usersRouter);
app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);
app.use('/', loginRouter);
app.use('/', apiRouter);

app.get('/', (req, res) => {
	res.set('Content-Type', 'text/plain');
	res.status(200).send('Hello Express Final Project!!');
});

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
