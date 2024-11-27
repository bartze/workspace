const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
	key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
	cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
};

const router = {
	GET: {},
	POST: {},
	PUT: {},
	DELETE: {},
	OPTIONS: {},
};

const extractURLParams = (path, pattern) => {
	const params = {};
	const pathParts = path.split('/');
	const patternParts = pattern.split('/');

	for (let i = 0; i < patternParts.length; i++) {
		if (patternParts[i].startsWith(':')) {
			const paramName = patternParts[i].slice(1);
			params[paramName] = pathParts[i];
		}
	}

	return params;
};

const parseBody = (req) => {
	return new Promise((resolve, reject) => {
		let body = '';
		req.on('data', (chunk) => {
			body += chunk.toString();
		});
		req.on('end', () => {
			try {
				resolve(JSON.parse(body));
			} catch (error) {
				resolve({});
			}
		});
	});
};

const serveStaticFile = async (req, res, filepath) => {
	const fullpath = path.join(__dirname, '..', 'public', filepath);
	try {
		const fileStream = fs.createReadStream(fullpath);
		const stat = await fs.promises.stat(fullpath);
		res.setHeader('Content-Length', stat.size);
		res.setHeader('Content-Type', getContentType(fullpath));
		fileStream.pipe(res);
	} catch (error) {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ error: 'File not found' }));
	}
};

const getContentType = (filepath) => {
	const ext = path.extname(filepath).toLowerCase();
	const types = {
		'.html': 'text/html',
		'.css': 'text/css',
		'.js': 'text/javascript',
		'.json': 'application/json',
		'.png': 'image/png',
		'.jpg': 'image/jpeg',
	};
	return types[ext] || 'text/plain';
};

const setCORSHeaders = (res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

const users = [];

router.GET['/api/users'] = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(users));
};

router.POST['/api/users'] = async (req, res) => {
	const user = await parseBody(req);
	user.id = Date.now();
	users.push(user);
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(user));
};

router.PUT['/api/users/:id'] = async (req, res) => {
	const id = parseInt(req.params.id);
	const userData = await parseBody(req);
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) {
		users[index] = { ...users[index], ...userData };
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(users[index]));
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ error: 'User not found' }));
	}
};

router.DELETE['/api/users/:id'] = (req, res) => {
	const id = parseInt(req.params.id);
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) {
		users.splice(index, 1);
		res.statusCode = 204; // No Content
		res.end();
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ error: 'User not found' }));
	}
};

router.OPTIONS['/api/users'] = (req, res) => {
	res.setHeader('Allow', 'OPTIONS, GET, POST');
	res.setHeader('Content-Type', 'application/json');
	res.end();
};

router.OPTIONS['/api/users/:id'] = (req, res) => {
	res.setHeader('Allow', 'OPTIONS, GET, PUT, DELETE');
	res.setHeader('Content-Type', 'application/json');
	res.end();
};

const matchRoute = (method, path) => {
	for (const pattern in router[method]) {
		const regex = new RegExp(`^${pattern.replace(/:\w+/g, '\\w+')}$`);
		if (regex.test(path)) {
			return pattern;
		}
	}
	return null;
};

const server = https.createServer(options, async (req, res) => {
	setCORSHeaders(res);

	const parsedUrl = new URL(req.url, `https://${req.headers.host}`);
	const path = parsedUrl.pathname;
	const method = req.method.toUpperCase();

	const routePattern = matchRoute(method, path);
	if (routePattern) {
		req.params = extractURLParams(path, routePattern);
		await router[method][routePattern](req, res);
	} else {
		// Si no es una ruta de la API, servir como archivo estático
		serveStaticFile(req, res, path === '/' ? 'index.html' : path.substr(1));
	}
});

server.listen(3000, '127.0.0.1', () => {
	console.log('HTTPS Server running at https://127.0.0.1:3000/');
});
