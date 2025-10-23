/* import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("codeando_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
 */

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("proyecto_tpi", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // opcional, evita spam en consola
});