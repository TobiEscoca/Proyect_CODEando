
import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";


export const User = sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}
,
  {
    tableName: "usuarios", // 👈 asegúrate de que este sea el nombre correcto de la tabla
    timestamps: false,
  });
