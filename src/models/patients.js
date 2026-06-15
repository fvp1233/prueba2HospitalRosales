/*
name,
lastName,
email,
password,
birthDate,
phone,
address,
phoneEmergencyContacts: [{
phone,
nameEmergencyContact
}],
profilePhoto,
isVerified,
loginAttemps,
timeOut
*/
import { Schema, model } from "mongoose";

const patientSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    nameEmergencyContact: [
      {
        phone: { type: String },
        nameEmergencyContact: { type: String },
      },
    ],
    image: {
      type: String,
    },
    public_id: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
    loginAttemps: {
      type: Number,
    },
    timeOut: {
      type: Date,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);
export default model("Patients", patientSchema);
