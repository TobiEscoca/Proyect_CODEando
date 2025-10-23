/* import { Router } from "express";
import cors from "cors";
import mysql from "mysql";

const router = Router();

// Configuración de la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "proyecto_tpi"
});

// Middleware de CORS y JSON solo si vas a usar router directamente con app
// Si lo aplicas en index.js, no hace falta aquí
// router.use(cors());
// router.use(express.json());

// Rutas
router.get("/courses", (req, res) => {
  db.query("SELECT * FROM cursos", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

router.get("/courses/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Course ID: ${id}`);
});

router.post("/courses", (req, res) => {
  res.send("Creando curso");
});

router.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Actualizando curso con ID: ${id}`);
});

router.delete("/courses/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Eliminando curso con ID: ${id}`);
});

export default router; */

import { Router } from "express";
import { Course } from "../models/course.js";

const router = Router();

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

export default router;
