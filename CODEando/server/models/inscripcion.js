import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Inscripcion = sequelize.define(
  "inscripciones",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    usuario_id: { type: DataTypes.INTEGER, allowNull: false },
    curso_id: { type: DataTypes.INTEGER, allowNull: false },
    profesor_id: { type: DataTypes.INTEGER, allowNull: true },
    estado: {
      type: DataTypes.ENUM("pendiente", "activa", "cancelada"),
      allowNull: false,
      defaultValue: "activa",
    },
    inscripto_en: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "inscripciones",
    timestamps: false,
    indexes: [
      { unique: true, fields: ["usuario_id", "curso_id"] },
      { fields: ["profesor_id"] },
    ],
  }
);
