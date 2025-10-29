import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { sequelize } from "../db.js";
import coursesRoutes from "../routes/courses_routes.js";
import "../models/user.js";
import "../models/profesorCurso.js";
import "../models/inscripcion.js";
import "../models/course.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/courses", coursesRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a la base de datos");

    await sequelize.sync({ alter: false });
    console.log("📦 Modelos sincronizados con la base existente");

    app.listen(PORT, () =>
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
  }
};

startServer();
