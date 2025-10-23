import { Router } from "express";


const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "proyecto_tpi"
});

const router = Router();

router.get("api/courses", (req, res) => {
  db.query("SELECT * FROM cursos", (err,rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows)
  })
});

router.get("/courses/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Course ID: ${id}`);
});

router.post("/courses", (req, res) => {
  res.send(`Creando curso`);
});

router.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Actualizando curso con ID: ${id}`);
});

router.delete("/courses/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Eliminando curso con ID: ${id}`);
});

export default router;
