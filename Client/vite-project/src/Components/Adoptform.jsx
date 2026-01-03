import React from "react";
import axios from "axios";
   
  const Adoptform = () => {
     const [Name,setname]=React.useState('');
      const [Address,setaddress]=React.useState('');
        const [Email,setemail]=React.useState('');
        const [Contact,setcontactname]=React.useState('');
        const [Petname,setpetname]=React.useState('');

// const axios = require('axios');

  const apicall = async()=>{
    const connect = await axios.post("http://localhost:5000/signup",{
      name:Name,
      address:Address,
      email:Email,
      contact:Contact,
      petName:Petname
    });
  
   console.log()  
  try{
    if(code ==11000){

alert("user alredy exist")
    }
    else{
      alert("user created")
    
    }

  }
  catch(err){
    alert(err)

  }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4c96a]">
      
      <div className="relative bg-[#f7ecd2] w-[420px] p-6 rounded-xl 
                      border-[3px] ">

        
        <h2 className="text-center text-xl font-bold mb-5">
          Adopt your pet
        </h2>
        <div className="flex items-center gap-3 mb-3">
          <label className="w-[90px] text-sm font-semibold">Name:</label>
          <input
            type="text"
            placeholder="Fullname"
            className="flex-1 px-3 py-1 border-2 border-black rounded-md bg-[#fff6df]"
          />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <label className="w-[90px] text-sm font-semibold">Address::</label>
          <input
            type="text"
            placeholder=""
            className="flex-1 px-3 py-1 border-2 border-black rounded-md bg-[#fff6df]"
          />
        </div>

        <div className="flex items-center gap-3 mb-3">
          <label className="w-[90px] text-sm font-semibold">Contact.No:</label>
          <input
            type="text"
            placeholder=""
            className="flex-1 px-3 py-1 border-2 border-black rounded-md bg-[#fff6df]"
          />
        </div>
    
        <div className="flex items-start gap-3 mb-5">
          <label className="w-[90px] text-sm font-semibold mt-1">
            Pet name:
          </label>
          <div className="relative flex-1">
export default function Adoptform() {
  return (
    <div className="min-h-screen bg-[#F5C977] flex items-center justify-center">
      <div className="bg-[#FCE6A6] w-109 p-6 rounded-xl border-2 border-gray-400 ">
        <h2 className="text-center text-xl font-bold mb-6">
          Adopt your pet
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="w-2.15">Name:</label>
            <input
              type="text"
              placeholder="Fullname"
              className="border rounded-md w-full px-3 py-1"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="w-2.15">Address:</label>
            <input
              type="text"
               placeholder="Enter your address"
              className="border rounded-md w-full px-3 py-1"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="w-2.15">Contact.No:</label>
            <input
              type="text"
               placeholder="Enter your contact number"
              className="border rounded-md w-full px-3 py-1"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="w-2.15">Pet name:</label>
            <textarea
              rows="2"
              className="flex-1 px-13 py-1 border-2 border-black rounded-md bg-[#fff6df]"
            ></textarea>    
          </div>
        </div>

        {/* Button */}
        <button
         onClick={apicall}
          className="block mx-auto bg-[#d48b3c] px-6 py-1 
                     border-2 border-black rounded-md 
                     font-semibold shadow-[2px_2px_0px_#000]
                     hover:bg-[#c57c2e]"
        >g
        <button className="mt-6 bg-[#835d36] px-6 py-2 rounded-md mx-auto block">
          Adopted
        </button>

      
      </div>
    </div>
  );
};

export default Adoptform;