import { Router } from "express";

const router = Router();

router.get("/courses", (req, res) => {
  res.send("List of courses");
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
