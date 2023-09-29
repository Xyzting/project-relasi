import { DATE, Sequelize } from "sequelize";
import db from "../config/Database.js";
import Computer from "./ComputerModel.js";

const { DataTypes } = Sequelize;

const User = db.define('user', {
    name: DataTypes.STRING,
    nik: DataTypes.STRING
}, {
    freezeTableName: true
})

User.hasOne(Computer, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Computer.belongsTo(User, { 
    foreignKey: 'user_id'
});

export default User;