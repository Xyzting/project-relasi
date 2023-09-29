import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Project = db.define('project', {
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Project;