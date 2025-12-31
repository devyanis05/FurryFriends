import e from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = e();
const PORT = 5000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./user");


app.post("/signup", (req,res)=>{
    res.send("hello from server");
    
});

app.listen(PORT,()=>{
    console.log(`your server is running on port ${PORT}`)
});



//Minal code

app.use(cors());
app.use(express.json());


mongoose.connect(
  "mongodb://127.0.0.1:27017/paws_and_pet",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


app.get("/", (req, res) => {
  res.send("Backend is running");
});


app.post("/adopt", async (req, res) => {
  try {
    const { username, email, petName, petWeight } = req.body;

    const newUser = new User({
      username,
      email,
      adoptedPet: {
        petName,
        petWeight,
      },
    });

    await newUser.save();

    res.status(201).json({
      message: "Adoption data saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving data",
      error,
    });
  }
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});