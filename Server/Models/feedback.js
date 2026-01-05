import mongoose from "mongoose";
const feedbackSchema=new mongoose.Schema({
    
  category: String,
  name: String,
  email: String,
  subject: String,
  message: String,
  rating: Number,
  isRead: Boolean,
  createdAt: Date

});
const feedback=mongoose.model('feedback',feedbackSchema);
export default feedback;
