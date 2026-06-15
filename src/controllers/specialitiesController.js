import specialitesModel from "../models/specialities.js";

const specialitiesController = {};

specialitiesController.getSpecialities = async (req, res) => {
  try {
    const specialities = await specialitesModel.find();
    return res.status(200).json(specialities);
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

specialitiesController.insertSpeciality = async (req, res) => {
  try {
    let { specialityName, description, isAvailable } = req.body;

    const newSpeciality = new specialitesModel({
      specialityName,
      description,
      isAvailable: true,
    });

    await newSpeciality.save();
    return res.status(200).json({ message: "Speciality Saved" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

specialitiesController.updteSpeciality = async (req, res) => {
  try {
    let { specialityName, description, isAvailable } = req.body;

    const specialityUpdated = await specialitesModel.findByIdAndUpdate(
      req.params.id,
      {
        specialityName,
        description,
        isAvailable,
      },
      {
        new: true,
      },
    );

    if (!specialityUpdated) {
      return res.status(400).json({ message: "Speciality not found" });
    }
    return res.status(200).json({ message: "Speciality Updated" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

specialitiesController.deleteSpeciality = async (req, res) => {
  try {
    const deletedSpeciality = await specialitesModel.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedSpeciality) {
      return res.status(400).json({ message: "speciality not found" });
    }
    return res.status(200).json({ message: "Speciality deleted" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default specialitiesController