import e from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = e();
const PORT = 5000;

app.post("/hi", (req,res)=>{
    res.send("hello from server");
});

app.listen(PORT,()=>{
    console.log(`your server is running on port ${PORT}`)
});