// CRUD para users
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const usersRepo = require("../repositories/users");
const { isAuth, isAdmin } = require("../middlewares/auth");
const router = express.Router();

router.get("/", isAuth, isAdmin, async (req, res) => {
  try {
    const allUsers = await usersRepo.getAll();
    res.json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/:id", isAuth, isAdmin, async (req, res) => {
  try {
    const user = await usersRepo.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "El usuario no existe" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.post(
  "/",
  isAuth,
  isAdmin,
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Formato de email inválido")
      .custom(async (value) => {
        const user = await usersRepo.findByEmail(value);
        if (user) {
          throw new Error("Ya existe un usuario con este email");
        }
      }),
    body("password").notEmpty().withMessage("La contraseña es requerida"),
    body("type").notEmpty().withMessage("El tipo de usuario es requerido"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await usersRepo.insert({
        ...req.body,
        password: hashedPassword,
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
);

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  try {
    const updatedUser = await usersRepo.update(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  try {
    const result = await usersRepo.deleteUser(req.params.id);
    if (result.success) {
      res.sendStatus(204);
    } else if (result.message === "User not found") {
      res.status(404).json({ message: result.message });
    } else {
      res.status(400).json({ message: result.message });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// GET /users/:id/active para verificar si el usuario exitste, actualiza active a true y devovlerá datos actualizados
router.get("/:id/active", isAuth, isAdmin, async (req, res) => {
  try {
    const user = await usersRepo.findById(req.params.id);
    if (user) {
      res.json({ active: user.active });
    } else {
      res.status(404).json({ message: "El usuario no existe" });
    }
  } catch (error) {
    console.error("Error fetching user active status:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// POST /users/:id/active para verificar si el usuario exitste, actualiza active a true y devovlerá datos actualizados
router.post("/:id/active", isAuth, isAdmin, async (req, res) => {
  try {
    const user = await usersRepo.findById(req.params.id);
    if (user) {
      user.active = true;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: "El usuario no existe" });
    }
  } catch (error) {
    console.error("Error updating user active status:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;
