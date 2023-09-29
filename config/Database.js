import { Sequelize } from "sequelize";

const db = new Sequelize('dbrelasi', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

export default db;