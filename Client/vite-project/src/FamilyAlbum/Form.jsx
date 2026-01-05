import React from "react";

function Form() {
  return (
    <>
    {/* <div className="h-screen flex items-center justify-center bg-[#221d0b]"> */}
      
      {/* Form Card */}
      <div className="w-[420px] bg-[#f8c873]  h-[520px] flex gap-3 flex-col border-2 border-[#8b5a2b] rounded-3xl p-6">
        
        {/* Title */}
        <h2 className="text-2xl   font-semibold text-center text-[#8b5a2b] ">
          Add Your Pet 🌸
        </h2>

        {/* Pet Photo */}
       
          <div className=" text-[#8b5a2b]">
            Pet Photo
          </div>
          <input
            type="file"
            className="w-full bg-[#fff3c4] border-2 border-[#8b5a2b] rounded-xl p-2"
          />
        

        {/* Pet Name */}
          <div className=" text-[#8b5a2b] ">
            Pet Name
          </div>
          <input
            type="text"
            placeholder="Enter pet name"
            className="w-full bg-[#fff3c4] border-2 border-[#8b5a2b] rounded-xl p-2 outline-none"
          />
        {/* </div> */}

        {/* Adoption Date */}
       
          <div className="block text-[#8b5a2b] ">
            Adoption Date
          </div>
          <input
            type="date"
            className="w-full bg-[#fff3c4] border-2 border-[#8b5a2b] rounded-xl p-2 outline-none"
          />
       

        {/* Description */}
          <div className="block text-[#8b5a2b] ">
            Description
          </div>
          <textarea
            rows="3"
            placeholder="Describe your pet..."
            className="w-full bg-[#fff3c4] border-2 border-[#8b5a2b] rounded-xl p-2 outline-none resize-none"
          ></textarea>
       

        {/* Submit Button */}
        <button className="w-full bg-[#ffcc80] border-2 border-[#8b5a2b] rounded-xl  text-[#8b5a2b] font-semibold hover:bg-[#ffc266] h-[80px]"> 
          Submit
        </button>

      </div>
    {/* </div> */}
    </>
  );
}

export default Form;
