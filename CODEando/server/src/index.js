import express from "express";
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

/*   // Levantar servidor
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT})`;
  }); */
} catch (error) {
  console.error("An error has occurred:", error);
}