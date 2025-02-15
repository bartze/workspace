const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const usersRepo = require("../repositories/users");
const teachersRepo = require("../repositories/teachers");
const bcrypt = require("bcrypt");
const { isAuth } = require("../middlewares/auth");
const { JWT_SECRET } = require("../config");

router.post("/token", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await usersRepo.findByEmail(username);
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Incluir más información en el token
        const token = jwt.sign(
          { userId: user.id, username: user.email, type: user.type },
          JWT_SECRET,
          { expiresIn: "30m" }
        );
        res.json({ token });
      } else {
        res.status(401).json({ message: "Contraseña incorrecta" });
      }
    } else {
      res.status(401).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al generar token:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// Ejemplo de ruta protegida
router.get("/protected", isAuth, (req, res) => {
  res.json({ message: "Acceso concedido", user: req.user });
});

// Endpoint para obtener los datos del usuario autenticado
router.get("/me", isAuth, async (req, res) => {
  const userId = req.user.userId;

  try {
    // Obtener información adicional del usuario desde la base de datos
    const user = await usersRepo.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    let teacherId = null;

    // Usa teachersRepo para obtener el teacher asociado
    const teacher = await teachersRepo.findByUserId(userId);
    if (teacher) {
      teacherId = teacher.id;
    }

    const userData = {
      id: user.id,
      email: user.email,
      type: user.type,
      active: user.active,
      teacherId: teacherId,
    };

    res.json(userData);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;
