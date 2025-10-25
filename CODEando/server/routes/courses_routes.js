import { Router } from "express";
import { Course } from "../models/course.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

const router = Router();
const JWT_SECRET = "mi_super_secreto";

// Middleware para roles
const checkRole = (allowedRoles) => (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No autorizado" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!allowedRoles.includes(decoded.id_rol)) return res.status(403).json({ error: "Acceso prohibido" });
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
};

// Registro de usuarios
router.post("/register", async (req, res) => {
  try {
    const { email, contraseña, nombre } = req.body;
    if (!email || !contraseña) return res.status(400).json({ error: "Faltan campos obligatorios" });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).json({ error: "El email ya está registrado" });

    const newUser = await User.create({ email, nombre, contraseña, id_rol: 1 });
    res.status(201).json({ message: "Usuario registrado", user: { id: newUser.id, email, id_rol: 1 } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || user.contraseña !== contraseña) return res.status(401).json({ error: "Credenciales inválidas" });

    const payload = { id: user.id, email: user.email, id_rol: user.id_rol };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

    res.json({ message: "Login exitoso", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear profesor (solo superadmin)
router.post("/crear-profesor", checkRole([3]), async (req, res) => {
  try {
    const { email, nombre, contraseña } = req.body;
    if (!email || !nombre || !contraseña) return res.status(400).json({ error: "Faltan campos obligatorios" });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).json({ error: "El email ya está registrado" });

    const newUser = await User.create({ email, nombre, contraseña, id_rol: 2 });
    res.status(201).json({ message: "Profesor creado", user: { id: newUser.id, email, nombre, id_rol: 2 } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CRUD de cursos usando "decripcion"

// Obtener todos los cursos
router.get("/", async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener curso por ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: "Curso no encontrado" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear curso (admin o superadmin)
router.post("/", checkRole([2, 3]), async (req, res) => {
  try {
    const { name, category, descripcion, price, image, available } = req.body;
    if (!name || !category || !descripcion) return res.status(400).json({ error: "Faltan campos obligatorios" });

    const newCourse = await Course.create({ name, category, descripcion, price, image, available });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", checkRole([2, 3]), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, descripcion, price, image, available } = req.body;

    const course = await Course.findByPk(id);
    if (!course) return res.status(404).json({ error: "Curso no encontrado" });

    Object.assign(course, { name, category, descripcion, price, image, available });
    await course.save();
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Eliminar curso (admin o superadmin)
router.delete("/:id", checkRole([2, 3]), async (req, res) => {
  try {
    const deleted = await Course.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Curso no encontrado" });
    res.json({ message: "Curso eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
