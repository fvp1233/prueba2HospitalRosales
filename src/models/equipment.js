/*
equipmentName,
description,
brand,
model,
purcharseDate,
condition,
image,
status,
isAvailable
*/
import { Schema, model } from "mongoose";

const equipmentSchema = new Schema(
  {
    equipmentName: {
      type: String,
    },
    description: {
      type: String,
    },
    brand: {
      type: String,
    },
    model: {
      type: String,
    },
    purcharseDate: {
      type: Date,
    },
    condition: {
      type: String,
    },
    image: {
      type: String,
    },
    public_id: {
      type: String,
    },
    status: {
      type: String,
    },
    isAvailable: {
      type: String,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);
export default model("Equipment", equipmentSchema);
