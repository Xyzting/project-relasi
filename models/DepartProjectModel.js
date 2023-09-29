import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Departement from "./DepartementModel.js";
import Project from "./ProjectModel.js";

const { DataTypes } = Sequelize

const DepartProject = db.define('departproj', {}, {
    freezeTableName: true
}, {
    timestamps: false
});

Departement.belongsToMany(Project, {
    through: DepartProject
});
Project.belongsToMany(Departement, {
    through: DepartProject
});

export default DepartProject;