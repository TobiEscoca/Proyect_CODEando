/* import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Course = sequelize.define(
  "Course",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING(500),
    },
  },
  {
    tableName: "cursos", // 🔹 importante: usa tu tabla existente
    timestamps: false, // 🔹 desactiva createdAt / updatedAt si no existen
  }
);

 */

import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Course = sequelize.define(
  "Course",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      field: "decripcion", // 👈 nombre real en la base de datos
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING(500),
    },
  },
  {
    tableName: "cursos", // 👈 asegúrate de que este sea el nombre correcto de la tabla
    timestamps: false,
  }
);