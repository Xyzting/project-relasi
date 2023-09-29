import express from "express";
import { 
  getAllUser, 
  createUser, 
  updateUser, 
  deleteUser, 
  getOneUser 
} from "../controllers/UserController.js";

const UserRoute = express.Router()

UserRoute.get("/api/user", getAllUser);
UserRoute.get("/api/user/:id", getOneUser);
UserRoute.post("/api/user", createUser);
UserRoute.put("/api/user/:id", updateUser);
UserRoute.delete("/api/user/:id/", deleteUser);

export default UserRoute;