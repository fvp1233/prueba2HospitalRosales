import appointmentModel from "../models/appoitments.js";

const appointmentController = {};

appointmentController.getAppointments = async (req, res) => {
  try {
    const appointments = await appointmentModel.find();
    return res.status(200).json(appointments);
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

appointmentController.insertAppointment = async (req, res) => {
  try {
    let {
      patient_id,
      speciality_id,
      appoitmentDate,
      reason,
      status,
      observations,
    } = req.body;

    const newAppointment = new appointmentModel({
      patient_id,
      speciality_id,
      appoitmentDate,
      reason,
      status,
      observations,
    });

    await newAppointment.save();
    return res.status(200).json({ message: "Appointment saved" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

appointmentController.updateAppointment = async (req, res) => {
  try {
    let {
      patient_id,
      speciality_id,
      appoitmentDate,
      reason,
      status,
      observations,
    } = req.body;

    const appointmentUpdated = await appointmentModel.findByIdAndUpdate(
      req.params.id,
      {
        patient_id,
        speciality_id,
        appoitmentDate,
        reason,
        status,
        observations,
      },
      {
        new: true,
      },
    );

    if (!appointmentUpdated) {
      return res.status(400).json({ message: "Appoitment not found" });
    }

    return res.status(200).json({ message: "Speciality updated" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

appointmentController.deleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await appointmentModel.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedAppointment) {
      return res.status(400).json({ message: "Speciality not found" });
    }

    return res.status(200).json({ message: "Appointment deleted" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export default appointmentController
