import express from "express";
import { addNewUser } from "../controller/userController.js";


const router = express.Router();

router.post("/addNew",addNewUser);

export default router;