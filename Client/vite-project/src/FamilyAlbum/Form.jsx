import React from "react";
import axios from "axios";`

function Form() {
    const [photo, setPhoto] = React.useState("");
    const [name, setName] = React.useState("");
    const [date, setDate] = React.useState("");
    const apicall=async()=>{
      try {
      const connect =await axios.post("http://localhost:5000/api/auth/login",{
      photo: }


  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-[#f5e4b3]">
      
      <div className="w-[420px] bg-[#f5c367] border-2 border-[#81655d] rounded-3xl p-6">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-[#5c3f36] mb-6">
          Add Your Pet 🌸
        </h2>

        {/* Photo Upload */}
        <div className="mb-4">
          <label className=" text-[#5c3f36] mb-1 font-medium">
            Pet Photo
          </label>
          <input
            type="file"
            className="w-full text-sm bg-amber-100 border-2 border-[#81655d] rounded-xl p-2"
          />
        </div>

        {/* Pet Name */}
        <div className="mb-4">
          <label className=" text-[#5c3f36] mb-1 font-medium">
            Pet Name
          </label>
          <input
            type="text"
            placeholder="Enter pet name"
            className="w-full bg-amber-100 border-2 border-[#81655d] rounded-xl p-2 outline-none"
          />
        </div>

        {/* Adoption Date */}
        <div className="mb-4">
          <label className="block text-[#5c3f36] mb-1 font-medium">
            Adoption Date
          </label>
          <input
            type="date"
            className="w-full bg-amber-100 border-2 border-[#81655d] rounded-xl p-2 outline-none"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-[#5c3f36] mb-1 font-medium">
            Description
          </label>
          <textarea
            rows="3"
            placeholder="Write something about your pet..."
            className="w-full bg-amber-100 border-2 border-[#81655d] rounded-xl p-2 outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#81655d] text-white py-2 rounded-xl text-lg font-semibold hover:bg-[#6f554e] transition">
          Add to our Family Album
        </button>

      </div>
    </div>
  );
}

export default Form;

