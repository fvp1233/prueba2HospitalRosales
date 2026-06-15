import specialitiesController from "../controllers/specialitiesController.js";
import express from "express"

const router = express.Router();

router.route("/").get(specialitiesController.getSpecialities).post(specialitiesController.insertSpeciality);

router.route("/:id").put(specialitiesController.updteSpeciality).delete(specialitiesController.deleteSpeciality);

export default router