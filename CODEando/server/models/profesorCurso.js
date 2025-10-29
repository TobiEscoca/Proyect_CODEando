import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const ProfesorCurso = sequelize.define("profesores_cursos", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  profesor_id: { type: DataTypes.INTEGER, allowNull: false },
  curso_id: { type: DataTypes.INTEGER, allowNull: false },
  activo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  asignado_en: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, {
  tableName: "profesores_cursos",
  timestamps: false,
  indexes: [
    { unique: true, fields: ["profesor_id", "curso_id"] },
    // ⚠️ Si quieres *UN* profesor por curso, deja este unique:
    { unique: true, fields: ["curso_id"] },
  ],
});
