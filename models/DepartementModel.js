import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";

const { DataTypes } = Sequelize;

const Departement = db.define('departement',{
    title: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
    freezeTableName:true
});

Departement.hasMany(User, { 
    foreignKey:'departement_id'
});
User.belongsTo(Departement, {
    foreignKey:'departement_id'
});

export default Departement;