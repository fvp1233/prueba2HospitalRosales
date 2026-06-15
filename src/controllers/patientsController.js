import { v2 as cloudinary } from "cloudinary";
import patientsModel from "../models/patients.js";

const patientsController = {};

patientsController.getPatients = async (req, res) => {
  try {
    const patients = await patientsModel.find();
    return res.status(200).json(patients);
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

patientsController.deletePatient = async (req, res) => {
  try {
    const patientFound = await patientsModel.findById(req.params.id);
    await cloudinary.uploader.destroy(patientFound.public_id);

    const patientsDeleted = await patientsModel.findByIdAndDelete(
      req.params.id,
    );

    if (patientsDeleted) {
      return res.status(404).json({ message: "Patient not found" });
    }
    return res.status(200).json({ message: "Patients deleted" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

patientsController.updatePatient = async (req, res) => {
  try {
    const {
      name,
      lastName,
      email,
      password,
      birthDate,
      phone,
      address,
      phoneEmergencyContacts,
      isVerified,
      loginAttemps,
      timeOut,
    } = req.body;

    const patientsFound = await patientsModel.findById(req.params.id);
    const updatedData = {
      name,
      lastName,
      email,
      password,
      birthDate,
      phone,
      address,
      phoneEmergencyContacts,
      isVerified,
    };
    if (req.file) {
      await cloudinary.uploader.destroy(patientsFound.public_id);
      updatedData.image = req.file.path;
      updatedData.public_id = req.file.filename;
    }
    await patientsModel.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });
    return res.status(200).json({ message: "Patients updated" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export default patientsController;
