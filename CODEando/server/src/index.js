/* import express from "express";
import { PORT } from "./config.js";
import { sequelize } from "../db.js";
import coursesRoutes from "../routes/courses_routes.js";

// Import models
import "../models/course.js";

const app = express();

// Middlewares
app.use(express.json());
app.use("/courses", coursesRoutes);

try {
  // Conexión a la base de datos
  await sequelize.sync();
  console.log("Database synced");

 // Levantar servidor
  app.listen(PORT, () => {
    console.log(`EL SERVIDOR SE ENCUENTRA CORRIENDO EN ${PORT}`)
  }); 
} catch (error) {
  console.error("An error has occurred:", error);
} */


import express from "express";
import { PORT } from "./config.js";
import { sequelize } from "../db.js";
import coursesRoutes from "../routes/courses_routes.js";
import "../models/course.js"; // para registrar el modelo

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/courses", coursesRoutes);

// Iniciar servidor y conectar BD
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a la base de datos");

    await sequelize.sync(); // crea las tablas si no existen
    console.log("📦 Tablas sincronizadas");

    app.listen(PORT, () =>
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
  }
};

startServer();
