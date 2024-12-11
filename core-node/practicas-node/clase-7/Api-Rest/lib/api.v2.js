const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
	key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
	cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
};

const users = [];

const setCORSHeaders = (res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

const serveHTML = (res, htmlContent) => {
	res.setHeader('Content-Type', 'text/html');
	res.end(htmlContent);
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

const router = {
	GET: {},
	POST: {},
	PUT: {},
	DELETE: {},
	OPTIONS: {},
};

router.GET['/api/users'] = (req, res) => {
	const userListHTML = users
		.map(
			(user) => `
    <li>ID: ${user.id}, Name: ${user.name}, Email: ${user.email}</li>
  `,
		)
		.join('');
	serveHTML(
		res,
		`
    <h1>Users List</h1>
    <ul>${userListHTML}</ul>
    <a href="/">Go Back</a>
  `,
	);
};

router.POST['/api/users'] = async (req, res) => {
	let body = '';
	req.on('data', (chunk) => {
		body += chunk.toString();
	});
	req.on('end', () => {
		const user = JSON.parse(body);
		user.id = Date.now();
		users.push(user);
		res.writeHead(302, { Location: '/api/users' });
		res.end();
	});
};

router.PUT['/api/users/:id'] = async (req, res) => {
	const id = parseInt(req.params.id);
	let body = '';
	req.on('data', (chunk) => {
		body += chunk.toString();
	});
	req.on('end', () => {
		const userData = JSON.parse(body);
		const index = users.findIndex((user) => user.id === id);
		if (index !== -1) {
			users[index] = { ...users[index], ...userData };
			res.writeHead(302, { Location: '/api/users' });
			res.end();
		} else {
			serveHTML(res, `<p>User not found</p><a href="/api/users">Go Back</a>`);
		}
	});
};

router.DELETE['/api/users/:id'] = (req, res) => {
	const id = parseInt(req.params.id);
	const index = users.findIndex((user) => user.id === id);
	if (index !== -1) {
		users.splice(index, 1);
		res.writeHead(302, { Location: '/api/users' });
		res.end();
	} else {
		serveHTML(res, `<p>User not found</p><a href="/api/users">Go Back</a>`);
	}
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
		serveStaticFile(req, res, path === '/' ? 'index.html' : path.substr(1));
	}
});

server.listen(3000, '127.0.0.1', () => {
	console.log('HTTPS Server running at https://127.0.0.1:3000/');
});
