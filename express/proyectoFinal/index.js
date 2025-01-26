const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const session = require('express-session');
const { isAuthenticated, isAuthenticatedTeacher, isAdmin } = require('./middlewares/auth');
const app = express();
const port = 3000;

// Ruta para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

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
const { router: loginRouter } = require('./routes/login');
const apiRouter = require('./routes/api');
const viewsRouter = require('./routes/views');

app.use('/api/users', usersRouter);
app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);
app.use('/', loginRouter);
app.use('/', apiRouter);
app.use('/', viewsRouter);

app.get('/', (req, res) => {
	res.redirect('/login');
});

// Manejo de errores 401
app.get('/unauthorized', (req, res) => {
	res.status(401).render('error-401');
});

// Manejo de errores
app.use((err, req, res, next) => {
	if (err.status === 401) {
		return res.redirect('/unauthorized');
	}
	next(err);
});

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
