import express from "express";
const app = express();
import { PORT } from "./config.js";
import db from "../db.js";
import coursesRoutes from "../routes/courses_routes.js";

app.listen(PORT);
app.use(coursesRoutes);
console.log(`Server is running on port ${PORT}`);
