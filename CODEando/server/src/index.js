import express from "express";
import { PORT } from "./config.js";
import { sequelize } from "../db.js";
import coursesRoutes from "../routes/courses_routes.js";

const app = express();

import "../models/course.js";

try {
  app.listen(PORT);
  app.use(coursesRoutes);

  await sequelize.sync();

  console.log(`Server is listening in port ${PORT}`);
} catch (error) {
  console.log(`An error has occurred`);
}
