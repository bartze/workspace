// CRUD para teachers
const express = require("express");
const { body, validationResult } = require("express-validator");
const teachers = require("../repositories/teachers");
const students = require("../repositories/students");
const users = require("../repositories/users");
const { isAuth, isAdmin } = require("../middlewares/auth");
const router = express.Router();

router.get("/", isAuth, isAdmin, async (req, res) => {
  try {
    const allTeachers = await teachers.getAll();
    res.json(allTeachers);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/:id", isAuth, async (req, res) => {
  try {
    const teacher = await teachers.findById(req.params.id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ message: "El profesor no existe" });
    }
  } catch (error) {
    console.error("Error fetching teacher:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.post(
  "/",
  isAuth,
  isAdmin,
  [
    // Validaciones con express-validator
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
      const newTeacher = await teachers.insert(req.body);
      res.status(201).json(newTeacher);
    } catch (error) {
      console.error("Error creating teacher:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
);

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  try {
    const updatedTeacher = await teachers.update(req.params.id, req.body);
    res.json(updatedTeacher);
  } catch (error) {
    console.error("Error updating teacher:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  try {
    const canDelete = await teachers.canDelete(req.params.id);
    if (canDelete) {
      const deleted = await teachers.delete(req.params.id);
      if (deleted) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ message: "El profesor no existe" });
      }
    } else {
      res.status(400).json({
        message:
          "No se puede eliminar al profesor porque tiene estudiantes asociados",
      });
    }
  } catch (error) {
    console.error("Error deleting teacher:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// Obtener los estudiantes de un profesor por fecha de nacimiento
router.get("/:teacher_id/students", isAuth, async (req, res) => {
  try {
    const teacherId = req.params.teacher_id;

    // Si el usuario es un profesor, verificar que solo pueda acceder a sus propios estudiantes
    if (
      req.user.type === "teacher" &&
      req.user.userId !== parseInt(teacherId)
    ) {
      return res.status(403).json({ message: "Acceso denegado" });
    }

    // Obtener los estudiantes del profesor
    const studentsList = await students.findByTeacherIdOrderedByDOB(teacherId);

    res.json(studentsList);
  } catch (error) {
    console.error("Error fetching students for teacher:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;
