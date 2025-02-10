import express from "express";
import {
  addNewUser,
  createPost,
  deletePost,
  updatePost,
} from "../controller/userController.js";
import { jwtAuth } from "../middleware/jwtAuth.js";

const router = express.Router();

router.post("/addNew", addNewUser);
router.post("/create", jwtAuth, createPost);
router.put("/update", jwtAuth, updatePost);
router.delete("/delete", jwtAuth, deletePost);

export default router;
