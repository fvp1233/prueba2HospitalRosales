import upload from "../utils/cloudinaryConfig.js";
import express from "express";
import registerPatientController from "../controllers/registerPatientController.js";

const router = express.Router();

router.route("/").post(upload.single("image"), registerPatientController.register);

router.route("/verifyCodeEmail").post(registerPatientController.verifyCode);

export default router;
