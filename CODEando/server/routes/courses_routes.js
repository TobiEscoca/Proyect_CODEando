import { Router } from "express";
import { Course } from "../models/course.js";
import { User } from "../models/user.js";
import { ProfesorCurso } from "../models/profesorCurso.js";
import { Inscripcion } from "../models/inscripcion.js";
import jwt from "jsonwebtoken";

const router = Router();
const JWT_SECRET = "mi_super_secreto";

// Middleware para roles
const checkRole = (allowedRoles) => (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No autorizado" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!allowedRoles.includes(decoded.id_rol))
      return res.status(403).json({ error: "Acceso prohibido" });
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
};

// Registro de usuarios
router.post("/register", async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    if (!email || !contraseña)
      return res.status(400).json({ error: "Faltan campos obligatorios" });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
      return res.status(409).json({ error: "El email ya está registrado" });

    const newUser = await User.create({ email, contraseña, id_rol: 1 });
    res.status(201).json({
      message: "Usuario registrado",
      user: { id: newUser.id, email, id_rol: 1 },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || user.contraseña !== contraseña)
      return res.status(401).json({ error: "Credenciales inválidas" });

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
    const { email, contraseña } = req.body;
    if (!email || !contraseña)
      return res.status(400).json({ error: "Faltan campos obligatorios" });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
      return res.status(409).json({ error: "El email ya está registrado" });

    const newUser = await User.create({ email, contraseña, id_rol: 2 });
    res.status(201).json({
      message: "Profesor creado",
      user: { id: newUser.id, email, id_rol: 2 },
    });
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
    if (!name || !category || !descripcion)
      return res.status(400).json({ error: "Faltan campos obligatorios" });

    const newCourse = await Course.create({
      name,
      category,
      descripcion,
      price,
      image,
      available,
    });
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

    Object.assign(course, {
      name,
      category,
      descripcion,
      price,
      image,
      available,
    });
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
router.post("/:id/asignar-profesor", checkRole([2, 3]), async (req, res) => {
  try {
    const cursoId = Number(req.params.id);
    const profeId =
      req.user.id_rol === 2 ? req.user.id : req.body.profesor_id ?? req.user.id;

    // Si definiste UNIQUE(curso_id) entonces habrá un solo profe por curso.
    await ProfesorCurso.upsert({
      profesor_id: profeId,
      curso_id: cursoId,
      activo: true,
    });

    res.json({ ok: true, curso_id: cursoId, profesor_id: profeId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * ALUMNO (id_rol=1) se inscribe.
 * Congelamos el profesor activo al momento de la inscripción.
 */
router.post("/:id/inscribirme", checkRole([1]), async (req, res) => {
  try {
    const cursoId = Number(req.params.id);

    // profesor activo del curso (si hay)
    const profe = await ProfesorCurso.findOne({
      where: { curso_id: cursoId, activo: true },
      attributes: ["profesor_id"],
    });
    const profesorId = profe?.profesor_id ?? null;

    // unique (usuario_id, curso_id) evita duplicados
    await Inscripcion.create({
      usuario_id: req.user.id,
      curso_id: cursoId,
      profesor_id: profesorId,
      estado: "activa",
    });

    res.json({ ok: true, curso_id: cursoId, profesor_id: profesorId });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ error: "Ya estás inscripto a este curso" });
    }
    res.status(400).json({ error: error.message });
  }
});

/**
 * Mis cursos (muestra email del profesor si lo hubo)
 * Podrías moverlo a /users_routes si prefieres, pero lo dejo aquí por simplicidad.
 */
/**
 * Cursos que doy (profesor / superadmin)
 */
router.get("/me/cursos-dictados", checkRole([2, 3]), async (req, res) => {
  try {
    const rows = await ProfesorCurso.findAll({
      where: { profesor_id: req.user.id, activo: true },
      order: [["asignado_en", "DESC"]],
    });

    // enriquecer con nombre del curso
    const out = await Promise.all(
      rows.map(async (pc) => {
        const c = await Course.findByPk(pc.curso_id, {
          attributes: ["id", "name"],
        });
        return { id: c?.id, name: c?.name, asignado_en: pc.asignado_en };
      })
    );

    res.json(out);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Mis alumnos (profesor / superadmin)
 */
router.get("/me/alumnos", checkRole([2, 3]), async (req, res) => {
  try {
    const rows = await Inscripcion.findAll({
      where: { profesor_id: req.user.id },
      order: [["inscripto_en", "DESC"]],
    });

    const out = await Promise.all(
      rows.map(async (r) => {
        const alumno = await User.findByPk(r.usuario_id, {
          attributes: ["email"],
        });
        const curso = await Course.findByPk(r.curso_id, {
          attributes: ["name"],
        });
        return {
          curso: curso?.name ?? null,
          alumno_email: alumno?.email ?? null,
          estado: r.estado,
          inscripto_en: r.inscripto_en,
        };
      })
    );

    res.json(out);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/me/inscripciones", checkRole([1, 2, 3]), async (req, res) => {
  try {
    const rows = await Inscripcion.findAll({
      where: { usuario_id: req.user.id },
      order: [["inscripto_en", "DESC"]],
    });

    const out = await Promise.all(
      rows.map(async (r) => {
        const curso = await Course.findByPk(r.curso_id, {
          attributes: ["id", "name", "image", "category", "price"],
        });
        const profe = r.profesor_id
          ? await User.findByPk(r.profesor_id, { attributes: ["email"] })
          : null;
        return {
          id: r.id,
          estado: r.estado,
          inscripto_en: r.inscripto_en,
          curso: curso
            ? {
                id: curso.id,
                name: curso.name,
                image: curso.image,
                category: curso.category,
                price: curso.price,
              }
            : null,
          profesor_email: profe?.email || null,
        };
      })
    );

    res.json(out);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// DELETE /courses/:id/desinscribirme  (alumno borra su inscripción a ese curso)
router.delete("/:id/desinscribirme", checkRole([1]), async (req, res) => {
  try {
    const cursoId = Number(req.params.id);
    const deleted = await Inscripcion.destroy({
      where: { usuario_id: req.user.id, curso_id: cursoId },
    });
    if (!deleted)
      return res
        .status(404)
        .json({ error: "No estabas inscripto a este curso" });
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// GET /courses/me/cursos-dictados  (profe/superadmin)
router.get("/me/cursos-dictados", checkRole([2, 3]), async (req, res) => {
  try {
    const rows = await ProfesorCurso.findAll({
      where: { profesor_id: req.user.id, activo: true },
      order: [["asignado_en", "DESC"]],
    });

    const out = await Promise.all(
      rows.map(async (pc) => {
        const c = await Course.findByPk(pc.curso_id, {
          attributes: ["id", "name", "image", "category"],
        });
        return { curso: c, asignado_en: pc.asignado_en };
      })
    );

    res.json(out);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /courses/:id/alumnos  (profe del curso o superadmin)
router.get("/:id/alumnos", checkRole([2, 3]), async (req, res) => {
  try {
    const cursoId = Number(req.params.id);

    // seguridad: si es profe, debe estar asignado a ese curso
    if (req.user.id_rol === 2) {
      const pc = await ProfesorCurso.findOne({
        where: { profesor_id: req.user.id, curso_id: cursoId, activo: true },
      });
      if (!pc)
        return res.status(403).json({ error: "No sos profesor de este curso" });
    }

    const rows = await Inscripcion.findAll({
      where: {
        curso_id: cursoId,
        profesor_id: req.user.id_rol === 3 ? undefined : req.user.id,
      },
      order: [["inscripto_en", "DESC"]],
    });

    const out = await Promise.all(
      rows.map(async (r) => {
        const alumno = await User.findByPk(r.usuario_id, {
          attributes: ["email"],
        });
        return {
          alumno_email: alumno?.email ?? null,
          estado: r.estado,
          inscripto_en: r.inscripto_en,
        };
      })
    );

    res.json(out);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /admin/profesores  (superadmin)
router.get("/admin/profesores", checkRole([3]), async (_req, res) => {
  try {
    const profesores = await User.findAll({
      where: { id_rol: 2 },
      attributes: ["id", "email"],
    });

    const out = await Promise.all(
      profesores.map(async (p) => {
        const pcs = await ProfesorCurso.findAll({
          where: { profesor_id: p.id, activo: true },
        });
        const cursos = await Promise.all(
          pcs.map(async (pc) => {
            const c = await Course.findByPk(pc.curso_id, {
              attributes: ["id", "name"],
            });
            return c;
          })
        );
        return { id: p.id, email: p.email, cursos };
      })
    );

    res.json(out);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// PUT /users/:id  (superadmin only)
router.put("/users/:id", checkRole([3]), async (req, res) => {
  try {
    const { id } = req.params;
    const { email, contraseña } = req.body;

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    if (user.id_rol !== 2)
      return res
        .status(403)
        .json({ error: "Solo se pueden editar profesores" });

    // Check if email is being changed and if it's already taken
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser)
        return res.status(409).json({ error: "El email ya está registrado" });
    }

    const updates = {};
    if (email) updates.email = email;
    if (contraseña && contraseña.trim() !== "") updates.contraseña = contraseña;

    Object.assign(user, updates);
    await user.save();

    res.json({
      message: "Usuario actualizado",
      user: {
        id: user.id,
        email: user.email,
        id_rol: user.id_rol,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /users/:id  (superadmin only)
router.delete("/users/:id", checkRole([3]), async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    if (user.id_rol !== 2)
      return res
        .status(403)
        .json({ error: "Solo se pueden eliminar profesores" });

    // Delete all profesor-curso relationships
    await ProfesorCurso.destroy({ where: { profesor_id: id } });

    // Delete all inscriptions where this user is the professor snapshot
    await Inscripcion.destroy({ where: { profesor_id: id } });

    // Finally delete the user
    await user.destroy();

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /admin/cursos  (superadmin - get all courses with details)
router.get("/admin/cursos", checkRole([3]), async (_req, res) => {
  try {
    const courses = await Course.findAll();

    const out = await Promise.all(
      courses.map(async (course) => {
        // Get professors for this course
        const pcs = await ProfesorCurso.findAll({
          where: { curso_id: course.id, activo: true },
          attributes: ["profesor_id", "asignado_en"],
        });

        const profesores = await Promise.all(
          pcs.map(async (pc) => {
            const prof = await User.findByPk(pc.profesor_id, {
              attributes: ["id", "email"],
            });
            return prof
              ? { ...prof.toJSON(), asignado_en: pc.asignado_en }
              : null;
          })
        );

        // Get students for this course
        const inscripciones = await Inscripcion.findAll({
          where: { curso_id: course.id },
          order: [["inscripto_en", "DESC"]],
        });

        const estudiantes = await Promise.all(
          inscripciones.map(async (ins) => {
            const alumno = await User.findByPk(ins.usuario_id, {
              attributes: ["id", "email"],
            });
            return alumno
              ? {
                  ...alumno.toJSON(),
                  estado: ins.estado,
                  inscripto_en: ins.inscripto_en,
                  inscripcion_id: ins.id,
                }
              : null;
          })
        );

        return {
          ...course.toJSON(),
          profesores: profesores.filter((p) => p !== null),
          estudiantes: estudiantes.filter((e) => e !== null),
        };
      })
    );

    res.json(out);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// DELETE /admin/cursos/:id/estudiantes/:estudianteId  (superadmin)
router.delete(
  "/admin/cursos/:id/estudiantes/:estudianteId",
  checkRole([3]),
  async (req, res) => {
    try {
      const { id: cursoId, estudianteId } = req.params;

      const deleted = await Inscripcion.destroy({
        where: { curso_id: cursoId, usuario_id: estudianteId },
      });

      if (!deleted)
        return res
          .status(404)
          .json({ error: "Estudiante no encontrado en este curso" });

      res.json({ message: "Estudiante eliminado del curso correctamente" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
);

// DELETE /admin/cursos/:id/profesores/:profesorId  (superadmin)
router.delete(
  "/admin/cursos/:id/profesores/:profesorId",
  checkRole([3]),
  async (req, res) => {
    try {
      const { id: cursoId, profesorId } = req.params;

      const deleted = await ProfesorCurso.destroy({
        where: { curso_id: cursoId, profesor_id: profesorId },
      });

      if (!deleted)
        return res
          .status(404)
          .json({ error: "Profesor no encontrado en este curso" });

      res.json({ message: "Profesor eliminado del curso correctamente" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
);

export default router;
