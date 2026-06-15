import equipmentModel from "../models/equipment.js";
import { v2 as cloudinary } from "cloudinary";

const equipmentController = {};

equipmentController.getEquipment = async (req, res) => {
  try {
    const equipment = await equipmentModel.find();
    return res.status(200).json(equipment);
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

equipmentController.insertEquipment = async (req, res) => {
  try {
    let {
      equipmentName,
      description,
      brand,
      model,
      purcharseDate,
      condition,
      status,
      isAvailable,
    } = req.body;

    const newEquipment = new equipmentModel({
      equipmentName,
      description,
      brand,
      model,
      purcharseDate,
      condition,
      status,
      isAvailable: true,
      image: req.file.path,
      public_id: req.file.filename,
    });
    await newEquipment.save();
    return res.status(200).json({ message: "Equipment saved" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

equipmentController.updateEquipment = async (req, res) => {
  try {
    const {
      equipmentName,
      description,
      brand,
      model,
      purcharseDate,
      condition,
      status,
      isAvailable,
    } = req.body;

    const equipmentFound = await equipmentModel.findById(req.params.id);

    const updatedData = {
      equipmentName,
      description,
      brand,
      model,
      purcharseDate,
      condition,
      status,
      isAvailable,
    };

    if (req.file) {
      await cloudinary.uploader.destroy(equipmentFound.public_id);
      updatedData.image = req.file.path;
      updatedData.public_id = req.file.filename;
    }

    await equipmentModel.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });
    return res.status(200).json({ message: "Equipment updated" });
  } catch {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

equipmentController.deleteEquipment = async (req, res) => {
  try {
    const equipmentfound = await equipmentModel.findById(req.params.id);

    await cloudinary.uploader.destroy(equipmentfound.public_id);

    const equipmentDeleted = await equipmentModel.findByIdAndDelete(
      req.params.id,
    );

    if (!equipmentDeleted) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    return res.status(200).json({ message: "Equipment deleted" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default equipmentController