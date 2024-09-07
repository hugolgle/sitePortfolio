import mongoose from "mongoose";

const CareersSchema = new mongoose.Schema({
  date: { type: String, required: true },
  description: { type: String, required: true },
});

const CareersModel = mongoose.model("Careers", CareersSchema);

export default CareersModel;
