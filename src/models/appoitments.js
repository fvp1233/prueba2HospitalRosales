/*
patient_id,
speciality_id,
appoitmentDate,
reason,
status,
observations
*/
import mongoose, { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patients",
  },
  speciality_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Specialities",
  },
  appointmentDate: {
    type: Date,
  },
  reason: {
    type: String,
  },
  status: {
    type: String,
  },
  observations: {
    type: String,
  },
},{
    timestamps: true,
    strict: false
});
export default model("Appointments", appointmentSchema)
