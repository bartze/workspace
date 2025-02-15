const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3000;

// Importar routers
const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/students");
const teachersRouter = require("./routes/teachers");
const apiRouter = require("./routes/api"); // Contiene el endpoint /api/token

// Habilitar CORS
app.use(cors());

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas de la API
app.use("/api/users", usersRouter);
app.use("/api/students", studentsRouter);
app.use("/api/teachers", teachersRouter);
app.use("/api", apiRouter); // Asegúrate de que /api/token esté definido aquí

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint no encontrado" });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error("Error en el servidor:", err);
  res.status(500).json({ message: "Error interno del servidor" });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
