export function requireRole(roles = []) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: "No auth" });
    if (!roles.includes(req.user.id_rol)) {
      return res.status(403).json({ error: "No autorizado" });
    }
    next();
  };
}
