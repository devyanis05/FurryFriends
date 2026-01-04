import e from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import users from './Models/adoptuser.js';
import Donate from './Models/Donate.js';
import feedback from './Models/feedback.js';
import dotenv from 'dotenv';


dotenv.config();



const app = e();
app.use(e.json());
app.use(cors());
const PORT = 5000;

mongoose.connect(process.env.Mongodb)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/feedback", async (req ,res)=>{
    try {
        const data = new feedback(req.body);
        await data.save();
res.json({ message: " Feedback firm submitted successfully"});
    } catch (err){
        res.status(5000).json({error: "Error saving form"});
    }
});



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



app.post("/Adoptdata", (req, res) => {
  const { name, address,email, contact, petName } = req.body;

  console.log("Adoption Request Received:");
  console.log(req.body);


  res.status(200).json({
    message: "Pet adoption form submitted successfully ",
  });
});

app.listen(PORT, () => {
  console.log("Server running");
});

