const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('ClaveSuperSecreta'));

// Middleware para sesiones
app.use(session({ secret: 'ClaveUltraSecreta', resave: false, saveUninitialized: false }));

app.get('/', (req, res) => {
	res.set('Content-Type', 'text/plain');
	res.status(200).send('Hello session, cookies & JWT!!');
});

// Ruta para asignar las cookies
app.get('/cookies/set', (req, res) => {
	const date = new Date();
	date.setHours(date.getHours() + 5);
	res.cookie('customCookie', 'Cookie value', {
		secure: false,
		httpOnly: true,
		expires: date,
		sameSite: 'strict',
	});
	res.cookie('customSignedCookie', 'Cookie value signed', {
		signed: true,
		httpOnly: true,
		expires: date,
		sameSite: 'strict',
	});
	res.send('Cookies set!');
});

// Ruta para obtener los valores de las cookies
app.get('/cookies', (req, res) => {
	// Cookies que no han sido firmadas
	console.log('Cookies: ', req.cookies);
	// Cookies que han sido firmadas
	console.log('Signed Cookies: ', req.signedCookies);
	res.json({
		customCookie: req.cookies.customCookie,
		customSignedCookie: req.signedCookies.customSignedCookie,
	});
});
// Ruta protegida, necesita que la variable haya sido configurada
app.get('/protected', (req, res) => {
	if (req.cookies.customCookie) {
		res.send('Cookie has been set!');
	} else {
		res.send("The Cookie doesn't exist!");
	}
});

// Ruta para eliminar las cookies
app.get('/cookies/delete', (req, res) => {
	res.clearCookie('customCookie');
	res.clearCookie('customSignedCookie');
	res.send('Cookies removed!');
});

// Configuración de la sesión
app.use(
	session({
		secret: 'ClaveUltraSecreta',
		resave: false,
		saveUninitialized: false,
	}),
);

// Ruta para asignar la sesión
app.get('/sessions/set', (req, res) => {
	req.session.isSessionSet = true;
	res.send('isSessionSet set!');
});

// Ruta para obtener los valores de la sesión
app.get('/sessions', (req, res) => {
	console.log('Sessions: ', req.session);
	// Cookies que han sido firmadas
	res.json({
		isSessionSet: req.session.isSessionSet,
	});
});
// Ruta protegida, necesita que la variable haya sido configurada
app.get('/protected-by-session', (req, res) => {
	if (req.session.isSessionSet) {
		res.send('isSessionSet has been set!');
	} else {
		res.send("The session variable doesn't exist!");
	}
});

// Ruta para eliminar la variable de la sesión
app.get('/sessions/delete', (req, res) => {
	delete req.session.isSessionSet;
	res.send('Session variable removed!');
});

// Con tokens
const JWT_SECRET = 'ClaveMegaSecreta';
app.get('/jwt/set', (req, res) => {
	const objectToEncoded = {
		name: 'Pepe',
		lastName: 'Perez',
		age: 25,
	};
	const token = jwt.sign({ data: objectToEncoded }, JWT_SECRET, {
		expiresIn: '30m',
	});
	res.json({ token: token });
});

// Middleware para obtener los datos de JWT
const isAuth = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401).json({
			message: 'Authorization Header missing',
		});
	}
	let authorization = req.headers.authorization;
	let token = authorization.split(' ')[1]; // Bearer <token>
	let jwtData;
	try {
		jwtData = jwt.verify(token, JWT_SECRET);
	} catch (error) {
		console.log(error);
		return res.status(401).json({
			message: 'Invalid Token.',
		});
	}
	req.data = jwtData;
	next();
};

// Ruta para obtener los valores del token JWT
app.get('/jwt', isAuth, (req, res) => {
	res.json({ data: req.data });
});

// Ruta protegida, necesita que el token JWT sea válido
app.get('/protected-by-jwt', isAuth, (req, res) => {
	res.send('JWT is valid and the data is: ' + JSON.stringify(req.data));
});

// Ruta para "eliminar" el token JWT
app.get('/jwt/delete', (req, res) => {
	const invalidToken = jwt.sign({ data: 'invalid' }, JWT_SECRET, { expiresIn: '1s' });
	res.json({ token: invalidToken, message: 'Token invalidated' });
});

// Ejercicio clase 6
// Endpoint Get para login
app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Endpoint Post para login
app.post('/login', (req, res) => {
	const { username, password } = req.body;

	if (username === 'foo' && password === 'bar') {
		req.session.isLoggedIn = true;
		res.redirect('/home');
	} else {
		res.send('Invalid credentials');
	}
});

// Endpoint Get para home
app.get('/home', (req, res) => {
	if (req.session.isLoggedIn) {
		res.sendFile(path.join(__dirname, 'views', 'home.html'));
	} else {
		res.redirect('/login');
	}
});

// Endpoint Post para logout
app.post('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return res.status(500).send('Error logging out');
		}
		res.redirect('/login');
	});
});

// Endpoint Post para generar un token JWT
app.post('/api/token', (req, res) => {
	const { username, password } = req.body;

	if (username === 'foo' && password === 'bar') {
		const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '5m' });
		res.json({ token });
	} else {
		res.status(401).send('Invalid credentials');
	}
});

// Endpoint Get para validar un token JWT
app.get('/api/protected', isAuth, (req, res) => {
	res.json({ username: req.data.username });
});

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
