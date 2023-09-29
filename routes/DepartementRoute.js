import express from "express";
import { 
  getAllDepartement, 
  createDepartement, 
  updateDepartement, 
  deleteDepartement, 
  getOneDepartement 
} from "../controllers/DepartementController.js";

const DepartementRoute = express.Router()

DepartementRoute.get("/api/departement", getAllDepartement);
DepartementRoute.get("/api/departement/:id", getOneDepartement);
DepartementRoute.post("/api/departement", createDepartement);
DepartementRoute.put("/api/departement/:id", updateDepartement);
DepartementRoute.delete("/api/departement/:id/", deleteDepartement);

export default DepartementRoute;