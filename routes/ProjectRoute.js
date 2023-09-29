import express from "express";
import { 
  getAllProject, 
  createProject, 
  updateProject, 
  deleteProject, 
  getOneProject 
} from "../controllers/ProjectController.js";

const ProjectRoute = express.Router()

ProjectRoute.get("/api/project", getAllProject);
ProjectRoute.get("/api/project/:id", getOneProject);
ProjectRoute.post("/api/project", createProject);
ProjectRoute.put("/api/project/:id", updateProject);
ProjectRoute.delete("/api/project/:id/", deleteProject);

export default ProjectRoute;