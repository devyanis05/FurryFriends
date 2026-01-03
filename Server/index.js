import e from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import feedback from './modules/feedback.js';
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
        const data = new Donate(req.body);
        await Data.save();
res.json({ message: " Feedback firm submitted successfully"});
    } catch (err){
        res.status(5000).json({error: "Error saving form"});
    }
});

app.listen(process.env.PORT,() =>
console.log("server running on port ${process.env.PORT} ")
);