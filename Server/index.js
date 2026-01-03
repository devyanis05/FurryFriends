import e from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Donate from './Model/Donate.js';
dotenv.config();

const app = e();
app.use(e.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MongoDB)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API Route
app.post("/donate", async (req, res) => {
  try {
    const data = new Donate(req.body);
    await data.save();
    res.json({ message: "Donation form submitted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error saving form" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);



