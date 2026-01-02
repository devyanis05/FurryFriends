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
    const connect = await axios.post("http://localhost:1224/signup",{
      name:Name,
      email:Email,
      password:Password
    })
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
            <textarea
              rows="2"
              className="flex-1 px-13 py-1 border-2 border-black rounded-md bg-[#fff6df]"
            ></textarea>    
          </div>
        </div>

        {/* Button */}
        <button
          className="block mx-auto bg-[#d48b3c] px-6 py-1 
                     border-2 border-black rounded-md 
                     font-semibold shadow-[2px_2px_0px_#000]
                     hover:bg-[#c57c2e]"
        >
          Adopted
        </button>

      
      </div>
    </div>
  );
};

export default Adoptform;