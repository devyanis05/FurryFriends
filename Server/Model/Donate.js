import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
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

const Donation = mongoose.model("Donation", DonationSchema);

export default Donation;
