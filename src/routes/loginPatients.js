import express from "express";
import loginPatientsController from "../controllers/loginController.js";

const router = express.Router();

router.route("/").post(loginPatientsController.login);

export default router