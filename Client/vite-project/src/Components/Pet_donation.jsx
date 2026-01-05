import React from 'react'
import { useState } from 'react';
import axios from 'axios';


function Pet_donation() {
  // state 
  const [formData, setFormData] = useState({
  petType: "",
  petName: "",
  breed: "",
  age: "",
  gender: "",
  size: "",
  color: "",
  description: "",
  donorName: "",
  email: "",
  phone: "",
  city: ""
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
// state end

const handleSubmit = async () => {
  try {
    const res = await fetch("http://localhost:5000/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    alert("Your donation form has been successfully submitted ");
  } catch (error) {
    alert("Server error — please try again");
  }
};


  return (
    <>
       <div className="min-h-screen bg-[#F4E1A1] flex flex-col items-center py-10 px-4">

      {/* Header Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-[#6B3F20]">Donate Your Pet</h1>
        <p className="text-[#7A5331] mt-1 mb-1">
          Help us find a loving new family for your pet. Fill the details below.
        </p>

      </div>


      {/* Form Card */}
      <div className="w-full max-w-4xl bg-[#FFF3D2] mt-4 p-6 rounded-2xl shadow-lg border border-[#D1A45A]">

        {/* Section Title */}
        <h2 className="text-xl font-semibold text-[#6B3F20] mb-3">
          Pet Details
        </h2>


        {/* Pet Type Buttons */}
       <div className="flex flex-col mb-3">
  <label className="text-[#6B3F20] font-semibold mb-1">
    What kind of pet are you rehoming?
  </label>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

    {/* Dog */}
    <label className="typeRadioBox">
      <input type="radio" name="petType" value="Dog" className="accent-[#8B5E34]" onChange={handleChange} />
      <span>Dog</span>
    </label>

    {/* Cat */}
    <label className="typeRadioBox">
      <input type="radio" name="petType" value="Cat" className="accent-[#8B5E34]" onChange={handleChange} />
      <span>Cat</span>
    </label>

    {/* Rabbit */}
    <label className="typeRadioBox">
      <input type="radio" name="petType" value="Rabbit" className="accent-[#8B5E34]" onChange={handleChange} />
      <span>Rabbit</span>
    </label>

    {/* Bird */}
    <label className="typeRadioBox">
      <input type="radio" name="petType" value="Bird" className="accent-[#8B5E34]" onChange={handleChange} />
      <span>Bird</span>
    </label>

  </div>
</div>


        {/* Fields Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


  {/* Pet Name */}
<div className="flex flex-col">
  <label className="text-[#6B3F20] font-medium mb-1">Pet Name</label>

  <input
    name="petName"       
    className="field"
    placeholder="Enter pet name"
    onChange={handleChange}
  />
</div>

  {/* Breed */}
<div className="flex flex-col">
  <label className="text-[#6B3F20] font-medium mb-1">Breed</label>

  <input
    name="breed"          
    className="field"
    placeholder="Enter breed"
    onChange={handleChange}
  />
</div>

{/* Age */}
<div className="flex flex-col">
  <label className="text-[#6B3F20] font-medium mb-1">Age</label>

  <input
    name="age"             
    className="field"
    placeholder="Enter age"
    onChange={handleChange}
  />
</div>

  {/* Gender — Radio */}
<div className="flex flex-col">
  <label className="text-[#6B3F20] font-medium mb-1">Gender</label>

  <div className="flex gap-4 bg-[#FAEDC8] px-3 py-2 rounded-2xl border border-[#D1A45A]">

    <label className="flex items-center gap-2 text-[#6B3F20]">
      <input
        type="radio"
        name="gender"
        value="Male"             
        className="accent-[#8B5E34]"
        onChange={handleChange}   
      />
      Male
    </label>

    <label className="flex items-center gap-2 text-[#6B3F20]">
      <input
        type="radio"
        name="gender"
        value="Female"
        className="accent-[#8B5E34]"
        onChange={handleChange}
      />
      Female
    </label>

  </div>
</div>

  {/* Size — Radio */}
<div className="flex flex-col">
  <label className="text-[#6B3F20] font-medium mb-1">Size</label>

  <div className="flex gap-4 bg-[#FAEDC8] px-3 py-2 rounded-2xl border border-[#D1A45A]">

    <label className="flex items-center gap-2 text-[#6B3F20]">
      <input
        type="radio"
        name="size"
        value="Small"              
        className="accent-[#8B5E34]"
        onChange={handleChange}    
      />
      Small
    </label>

    <label className="flex items-center gap-2 text-[#6B3F20]">
      <input
        type="radio"
        name="size"
        value="Medium"
        className="accent-[#8B5E34]"
        onChange={handleChange}
      /> Medium
    </label>

    <label className="flex items-center gap-2 text-[#6B3F20]">
      <input
        type="radio"
        name="size"
        value="Large"
        className="accent-[#8B5E34]"
        onChange={handleChange}  />
      Large
    </label>

  </div>
</div>
{/* Color */}
<div className="flex flex-col">
  <label className="text-[#6B3F20] font-medium mb-1">Color</label>

  <input
    name="color"         
    className="field"
    placeholder="Enter color"
    onChange={handleChange}  
  />
</div>
</div>



        {/* dESCRIPTION Section */}
        

          <div className="text-xl font-semibold text-[#6B3F20] mt-6 mb-2">
             Describe Your Pet
          </div>

            <textarea
               name="description"        
               className="field"
               rows="3"
               placeholder="Describe your pet's behavior and habits..."
               onChange={handleChange} />  
            
        {/* Contact Info */}
<h2 className="text-xl font-semibold text-[#6B3F20] mt-6 mb-2">
  Your Contact Info
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  {/* Donor Name */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Donor Name</label>
    <input
      name="donorName"          
      className="field"
      placeholder="Enter donor name"
      onChange={handleChange}
    />
  </div>

  {/* Email */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Email Address</label>
    <input
      name="email"
      className="field"
      placeholder="Enter email address"
      onChange={handleChange}
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">Phone Number</label>
    <input
      name="phone"
      className="field"
      placeholder="Enter phone number"
      onChange={handleChange}
    />
  </div>

  {/* City */}
  <div className="flex flex-col">
    <label className="text-[#6B3F20] font-medium mb-1">
      City / Location
    </label>
    <input
      name="city"
      className="field"
      placeholder="Enter city or location"
      onChange={handleChange}
    />
  </div>

</div>



        {/* Button */}

<button
  onClick={handleSubmit}
  className="mt-6 rounded border-2 border-[#8B5E34] bg-[#8B5E34] text-white px-6 py-2 font-semibold hover:bg-transparent hover:text-[#8B5E34] transition">
  Submit Pet Profile
</button>

      </div>
    </div>
    </>
  )
}

export default Pet_donation