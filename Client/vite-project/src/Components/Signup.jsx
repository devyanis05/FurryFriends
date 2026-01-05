import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Signup() {
 
 const [Data, setData] = useState({
  name: "",
  email: "",
  password: ""
});

    
   const handleChange = (e) => {
  setData({ ...Data, [e.target.name]: e.target.value });
};

    
const handleSubmit = async (e) => {
  e.preventDefault();   

  try {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Data)
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
    } else {
      alert(data.message);
    }

  } catch (error) {
    alert("Server error — please try again");
  }
};
 
  return (
    <>
      <div className="min-h-screen bg-[#F3C66A] flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-[#FCE6A6] w-full max-w-md rounded-2xl shadow-xl p-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2 font-[cursive]">
            Furry Friends
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Create your account 🐾
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm mb-1 font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
              onChange={handleChange}
            />
          </div>

          {/* Button */}
          <button
          
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#B87333] text-white py-2 rounded-md hover:bg-[#a4632c] transition font-semibold">
            Sign Up
          </button>
        </form>

        {/* Footer */}
         {/* <p className="text-center text-sm mt-4">
          Already have an account?
     <Link
    to="/login"
    className="text-[#B87333] font-semibold ml-1 hover:underline"
  >
    Login
  </Link>
        </p>  */}
      </div>
    </div>
 
    </>
  )
}

export default Signup
