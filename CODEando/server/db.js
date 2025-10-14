import { Sequelize } from "sequelize";

const db = new Sequelize("codeando_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const connection = () => {
  db.authenticate()
    .then(() => {
      console.log("Conexion exitosa a la base de datos");
    })
    .catch((err) => {
      console.error("No se pudo conectar a la base de datos:", err);
    });
};

connection();
export default db;
