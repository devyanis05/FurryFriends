import mongoose from "mongoose";

const DonateSchema = new mongoose.Schema({
  petType: String,
  petName: String,
  breed: String,
  age: String,
  gender: String,
  size: String,
  color: String,
  description: String,
  donorName: String,
  email: String,
  phone: String,
  city: String
});

const Donate = mongoose.model("Donate", DonateSchema);

export default Donate;
