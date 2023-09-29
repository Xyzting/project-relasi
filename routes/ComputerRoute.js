import express from "express";
import { 
  defaultRoute, 
  getAllComputer, 
  createComputer, 
  updateComputer, 
  deleteComputer, 
  getOneComputer 
} from "../controllers/ComputerController.js";

const ComputerRoute = express.Router()

ComputerRoute.get('/', defaultRoute)
ComputerRoute.get("/api/computer", getAllComputer);
ComputerRoute.get("/api/computer/:id", getOneComputer);
ComputerRoute.post("/api/computer", createComputer);
ComputerRoute.put("/api/computer/:id", updateComputer);
ComputerRoute.delete("/api/computer/:id/", deleteComputer);

export default ComputerRoute;