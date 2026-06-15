import upload from "../utils/cloudinaryConfig.js"
import express from "express"
import patientsController from "../controllers/patientsController.js"

const router = express.Router();

router.route("/").get(patientsController.getPatients);

router.route("/:id")
.put(upload.single("image"), patientsController.updatePatient)
.delete(patientsController.deletePatient)

export default router