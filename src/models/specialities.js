/*
specialityName,
description,
isAvailable
*/
import { Schema, model } from "mongoose";

const specialitieSchema = new Schema({
    specialityName: {
        type: String
    },
    description:{
        type: String
    },
    isAvailable:{
        type: Boolean
    }
},{
    timestamps: true,
    strict: false
})
export default model("Specialities", specialitieSchema)

