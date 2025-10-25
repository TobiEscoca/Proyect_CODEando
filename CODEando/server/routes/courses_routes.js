
import { Router } from "express";
import { Course } from "../models/course.js";
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = Router();
const JWT_SECRET = "mi_super_secreto";
// Obtener todos los cursos
router.get("/", async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un curso por ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: "Curso no encontrado" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear curso
router.post("/", async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const newCourse = await Course.create({ nombre, descripcion });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar curso
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const course = await Course.findByPk(id);
    if (!course) return res.status(404).json({ error: "Curso no encontrado" });

    course.nombre = nombre;
    course.descripcion = descripcion;
    await course.save();
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar curso
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Course.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: "Curso no encontrado" });
    res.json({ message: "Curso eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


/* router.post("/register", async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    // Rol por defecto (usuario)
    const id_rol = 1;

    // Validar campos
    if (!email || !contraseña) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "El email ya está registrado" });
    }

    // Crear el usuario

    const newUser = await User.create({ email, contraseña, id_rol });

    res.status(201).json({
      message: "Usuario registrado con éxito",
      user: {
        id: newUser.id,
        email: newUser.email,
        contraseña: newUser.contraseña,
        id_rol: newUser.id_rol,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
}); */

router.post("/register", async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const id_rol = 1;
    if (!email || !contraseña) return res.status(400).json({ error: "Faltan campos obligatorios" });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).json({ error: "El email ya está registrado" });

    // ⚠️ Guardando contraseña en texto plano (NO HACER EN PRODUCCIÓN)
    const newUser = await User.create({ email, contraseña, id_rol });
    res.status(201).json({ message: "Usuario registrado con éxito", user: { id: newUser.id, email: newUser.email, id_rol: newUser.id_rol } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: "Credenciales inválidas" });

    // comparación directa (texto plano)
    if (contraseña !== user.contraseña) return res.status(401).json({ error: "Credenciales inválidas" });

    const payload = { id: user.id, email: user.email, id_rol: user.id_rol };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


export default router;
