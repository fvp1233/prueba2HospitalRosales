import express from "express";
import clinical_historyController from "../controllers/clinical_historyController.js";

const router = express.Router();

router.route("/").get(clinical_historyController.getClinical_history).post(clinical_historyController.insertClinical_history);

router.route("/:id").put(clinical_historyController.updateClinical_history).delete(clinical_historyController.deleteClinical_history)

export default router