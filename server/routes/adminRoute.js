import express from "express";
import { jwtAuth } from "../middleware/jwtAuth.js";
import {
  adminLogin,
  adminLogout,
  allUsers,
  deleteUser, 
  fetchUserData,
  searchUser,
  userRoleUpdate,
  userStatusUpdate,
} from "../controller/adminController.js";

const router = express.Router();

router.post("/login",adminLogin);
router.get("/user", jwtAuth, fetchUserData);
router.get("/users", jwtAuth, allUsers);
router.put("/update-role", jwtAuth, userRoleUpdate);
router.put("/update-status", jwtAuth, userStatusUpdate);
router.delete("/delete-user/:id", jwtAuth, deleteUser);
router.get("/search", jwtAuth, searchUser);
router.get("/logout", jwtAuth, adminLogout);

export default router;