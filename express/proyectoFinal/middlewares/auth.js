// Middleware para proteger rutas
function isAuthenticated(req, res, next) {
	if (req.session.isLoggedIn) {
		return next();
	}
	res.redirect('/login');
}

// Middleware para proteger rutas solo para usuarios de tipo profesor
function isAuthenticatedTeacher(req, res, next) {
	if (req.session.isLoggedIn && req.session.user.teacherId) {
		return next();
	}
	res.redirect('/login');
}

// Middleware para proteger rutas solo para usuarios de tipo admin
function isAdmin(req, res, next) {
	if (req.session.isLoggedIn && req.session.user.type === 'admin') {
		return next();
	}
	res.status(401).redirect('/unauthorized');
}

module.exports = {
	isAuthenticated,
	isAuthenticatedTeacher,
	isAdmin,
};
