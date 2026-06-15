import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import registerPatientsRoutes from "./src/routes/registerPatient.js"
import patientsRoutes from "./src/routes/patients.js"
import loginPatients from "./src/routes/patients.js"

const app = express();

app.use(cors({
    origin: ["http://localhost:5173" , "http://localhost:5174"],
    credentials: true
}));

app.use(cookieParser());

app.use(express.json());

app.use("/api/registerPatient" , registerPatientsRoutes)

app.use("/api/patients" , patientsRoutes)

app.use("/api/loginPatients", loginPatients)

export default app
