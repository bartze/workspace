const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware para verificar si el usuario está autenticado
const isAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Falta el header de autorización" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Almacena la información del usuario en la solicitud
    next();
  } catch (error) {
    console.error("Token inválido:", error);
    res.status(401).json({ message: "Token inválido" });
  }
};

// Middleware para verificar si el usuario es administrador
const isAdmin = (req, res, next) => {
  if (req.user && req.user.type === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Acceso denegado: Se requiere rol de administrador" });
  }
};

// Middleware para verificar si el usuario es profesor, al final no he implementado esta lógica
// const isTeacher = (req, res, next) => {
//   if (req.user && req.user.type === "teacher") {
//     next();
//   } else {
//     res
//       .status(403)
//       .json({ message: "Acceso denegado: Se requiere rol de profesor" });
//   }
// };

module.exports = {
  isAuth,
  isAdmin,
};
