import { Schema,model } from "mongoose";
const feedbackSchema=new Schema({
    
  category: String,
  name: String,
  email: String,
  subject: String,
  message: String,
  rating: Number,
  isRead: Boolean,
  createdAt: Date

});
const feedback=model('feedback',feedbackSchema);
export default feedback;
