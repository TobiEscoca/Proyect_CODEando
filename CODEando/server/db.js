import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("codeando_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
