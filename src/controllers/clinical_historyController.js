import clinical_historyModel from "../models/clinical_history.js";

const clinical_historyController = {};

clinical_historyController.getClinical_history = async (req, res) => {
  try {
    const clinical_history = await clinical_historyModel.find();

    return res.status(200).json(clinical_history);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

clinical_historyController.insertClinical_history = async (req, res) => {
  try {
    let { patient_id, diagnosis, medications, medicalNotes } = req.body;

    const newClinical_history = new clinical_historyModel({
      patient_id,
      diagnosis,
      medications,
      medicalNotes,
    });

    await newClinical_history.save();
    return res.status(200).json({ message: "Clinical_history saved" });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

clinical_historyController.updateClinical_history = async (req, res) => {
  try {
    let { patient_id, diagnosis, medications, medicalNotes } = req.body;

    const clinical_historyUpdated =
      await clinical_historyModel.findByIdAndUpdate(
        req.params.id,
        {
          patient_id,
          diagnosis,
          medications,
          medicalNotes,
        },
        {
          new: true,
        },
      );

    if (!clinical_historyUpdated) {
      return res.status(400).json({ message: "clinical history not found" });
    }

    return res.status(200).json({ message: "Clinical history updated" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

clinical_historyController.deleteClinical_history = async (req, res) => {
  try {
    const deletedClinical_history =
      await clinical_historyModel.findByIdAndDelete(req.params.id);

    if (!deletedClinical_history) {
      return res.status(400).json({ message: "Clinical history not found" });
    }

    return res.status(200).json({ message: "Clinical history deleted" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export default clinical_historyController
