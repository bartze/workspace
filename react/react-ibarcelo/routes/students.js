// CRUD para students
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const students = require("../repositories/students");
const { isAuth } = require("../middlewares/auth");
const { Student } = require("../models");

router.get("/", isAuth, async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error("Error al obtener los estudiantes:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// Endpoint para obtener estudiantes de un profesor específico
router.get("/teachers/:teacher_id/students", isAuth, async (req, res) => {
  const teacherId = req.params.teacher_id;
  try {
    const students = await Student.findAll({
      where: { teacher_id: teacherId },
      order: [["date_of_birth", "ASC"]],
    });
    res.json(students);
  } catch (error) {
    console.error("Error al obtener los estudiantes del profesor:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/:id", isAuth, async (req, res) => {
  try {
    const student = await students.findById(req.params.id);
    if (student) res.json(student);
    else res.status(404).json({ message: "Estudiante no encontrado" });
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.post(
  "/",
  isAuth,
  [
    body("dni").notEmpty().withMessage("DNI es requerido"),
    body("name").notEmpty().withMessage("Nombre es requerido"),
    body("last_name").notEmpty().withMessage("Apellido es requerido"),
    body("date_of_birth")
      .isISO8601()
      .withMessage("Fecha de nacimiento inválida"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newStudent = await students.insert({
        ...req.body,
        teacher_id: req.user.userId, // Usamos el userId del token JWT
      });
      res.status(201).json(newStudent);
    } catch (error) {
      console.error("Error creating student:", error);
      res.status(500).json({ message: "Error al crear estudiante" });
    }
  }
);

router.put("/:id", isAuth, async (req, res) => {
  try {
    const updatedStudent = await students.update(req.params.id, req.body);
    res.json(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Error al actualizar estudiante" });
  }
});

router.delete("/:id", isAuth, async (req, res) => {
  try {
    if (await students.canDelete(req.params.id)) {
      await students.delete(req.params.id);
      res.sendStatus(204);
    } else {
      res.status(400).json({
        message:
          "No se puede eliminar al estudiante porque está asociado a un profesor",
      });
    }
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ message: "Error al eliminar estudiante" });
  }
});

module.exports = router;
