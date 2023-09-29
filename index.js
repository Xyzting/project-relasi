// Module
import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";

// Config
import db from "./config/Database.js";

// Model
import Computer from "./models/ComputerModel.js";
import User from "./models/UserModel.js";
import DepartProject from "./models/DepartProjectModel.js";
import Departement from "./models/DepartementModel.js";
import Project from "./models/ProjectModel.js";

// Router
import ComputerRoute from "./routes/ComputerRoute.js";
import DepartementRoute from "./routes/DepartementRoute.js";
import ProjectRoute from "./routes/ProjectRoute.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(cors())
app.use(ComputerRoute)
app.use(DepartementRoute)
app.use(ProjectRoute)
app.use(UserRoute)

try {
    await db.authenticate();
    Computer.sync();
    User.sync();
    Departement.sync();
    DepartProject.sync();
    Project.sync();
}catch(err) {
    console.log(err)
}

app.listen(3333, () => console.log("Hello world!, server is running"));