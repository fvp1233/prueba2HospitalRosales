/*
patient_id,
diagnosis,
medications:[
{
medicineName
}
],
medicalNotes
*/
import mongoose, { Schema, model } from "mongoose";

const clinical_historySchemma = new Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patients",
  },
  diagnosis: {
    type: String,
  },
  medications: [
    {
      medicineName: {
        type: String,
      },
    },
  ],
  medicalNotes: {
    type: String
  },
},{
    timestamps: true,
    strict: false
});
export default model("Clinical_history", clinical_historySchemma)