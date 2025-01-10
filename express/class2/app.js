const express = require('express');
const cookieParser = require('cookie-parser'); // Importamos cookie-parser
const app = express();
const port = process.env.PORT || 3000;

// Importamos los routers
const bookRouter = require('./routes/book');
const taskRouter = require('./routes/task');
const studentRouter = require('./routes/student');
const userRouter = require('./routes/user');

// Habilitamos los middlewares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Usamos cookie-parser

// Middleware para servir archivos estáticos
app.use('/static', express.static(__dirname + '/public'));

// montamos los routers
app.use('/book', bookRouter);
app.use('/task', taskRouter);
app.use('/students', studentRouter);
app.use('/users', userRouter);

// Middlewares de APLICACIÓN

// 1. Se ejecuta en cada solicitud
app.use((req, res, next) => {
	console.log('Time:', Date.now());
	next();
});

// 2. Se ejecuta para cualquier tipo de solicitud HTTP en la ruta /user/:id
// app.use('/user/:id', (req, res, next) => {
// 	console.log('Request Type:', req.method);
// 	next();
// });

// 3. Maneja las solicitudes GET a la ruta /user/:id
// app.get('/user/:id', (req, res) => {
// 	res.send('USER');
// });

// 4. Subpila de middleware que imprime información de la solicitud
// app.use(
// 	'/user/:id',
// 	(req, res, next) => {
// 		console.log('Request URL:', req.originalUrl);
// 		next();
// 	},
// 	(req, res, next) => {
// 		console.log('Request Type composed:', req.method);
// 		next();
// 	},
// );

// 5. Ejemplo con next('route') para saltar a la siguiente ruta
// app.get(
// 	'/student/:id',
// 	(req, res, next) => {
// 		const studentId = Number(req.params.id); // Convertimos el id a número
// 		if (isNaN(Number(req.params.id))) {
// 			const error = new Error('Student ID inválido, introduzca un número');
// 			error.statusCode = 400; // Puedes añadir un código de estado al error
// 			return next(error); // Pasamos el error al manejador de errores
// 		}
// 		if (studentId > 99) {
// 			const error = new Error('Student ID no puede ser mayor a 99');
// 			error.statusCode = 400; // Código 400: Bad Request
// 			return next(error); // Pasamos el error al manejador de errores
// 		}
// 		if (studentId == 0) return next('route');
// 		next();
// 	},
// 	(req, res) => {
// 		res.send('regular');
// 	},
// );

// app.get('/student/:id', (req, res) => {
// 	res.send('special');
// });

app.get('/error-test', (req, res, next) => {
	try {
		throw new Error('This is a test error');
	} catch (error) {
		next(error); // Propagar el error al middleware de manejo de errores
	}
});

//Rutas principales
app.get('/', (req, res) => {
	res.send('¡Bienvenido a la clase 2! Esta es la página principal.');
});

// Ruta para servir hello.html
app.get('/hello', (req, res) => {
	res.sendFile(__dirname + '/public/hello.html');
});

app.get('/cookie', (req, res) => {
	res.cookie('customCookie', 'cookie value', { maxAge: 900000, httpOnly: true }).send(
		'Cookie is set',
	); // Establecer cookie con opciones
});

app.get('/check-cookie', (req, res) => {
	console.log('Cookies:', req.cookies);
	res.send(req.cookies.customCookie || 'No hay cookie'); // Manejo si la cookie no existe
});

// app.post('/user', (req, res) => {
// 	let title = null;

// Intentamos obtener el título de diferentes maneras
// if (req.body) {
// 	if (typeof req.body === 'object' && req.body.title) {
// 		//Caso json o urlencoded
// 		title = req.body.title;
// 	} else if (typeof req.body === 'string') {
// 		try {
// 			const parsedBody = JSON.parse(req.body);
// 			if (parsedBody && parsedBody.title) {
// 				title = parsedBody.title;
// 			}
// 		} catch (error) {
// No es un JSON válido, intentamos extraer el título con expresiones regulares
// 				const match = req.body.match(/"title"\s*:\s*"([^"]*)"/); // Busca "title": "valor"
// 				if (match) {
// 					title = match[1];
// 				}
// 			}
// 		}
// 	}

// 	if (title) {
// 		res.send(title);
// 	} else {
// 		res.status(400).send('No se encontró el campo "title" en la solicitud.');
// 	}
// });

// Middleware de manejo de errores, van siempre al final
app.use((err, req, res, next) => {
	console.error(err.stack); // Imprime el stack del error en la consola
	res.status(err.statusCode || 500).send('Algo ha fallado!: ' + err.message); // Envia un error 500 si no hay código de estado
});

app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
