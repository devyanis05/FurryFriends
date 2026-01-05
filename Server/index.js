import e from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import adopt from './Models/adoptuser.js';
import Donate from './Models/Donate.js';
import feedback from './Models/feedback.js';
import User from './Models/Signup.js';
import dotenv from 'dotenv';


dotenv.config();



const app = e();
app.use(e.json());
app.use(cors());
const PORT = 5000;

const Database_conection= async()=>
 {
    const connect = await mongoose.connect(process.env.MongoDB);
  try {
    if (connect) {
      console.log("Database connected successfully");
    }   
    } catch (error) {
      console.log("Database connection failed", error)
    };
 }
Database_conection();



app.post("/feedback", async (req ,res)=>{
    try {
        const datas = new feedback(req.body);
        await datas.save();
res.json({ message: " Feedback firm submitted successfully"});
    } catch (err){
        res.status(5000).json({error: "Error saving form"});
    }
});

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({ message: "User registered successfully!" });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }

    res.status(500).json({ error: err.message });
  }
});





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



app.post("/Adoptdata", async(req, res) => {
  try{
     const data = new adopt(req.body);
     await data.save();
      res.json({ message: "Pet adoption form submitted successfully"});
  }catch (err){
    res.status(500).json({ error: "Error saving form" });
  }
 
});

app.listen(PORT, () => {
  console.log("Server running");
});

