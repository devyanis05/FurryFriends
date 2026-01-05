import React, { useState } from "react";
import axios from "axios";

export default function Adoptform() {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Petname, setPetname] = useState("");

  const apicall = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name: Name,
        address: Address,
        email: Email,
        contact: Contact,
        petName: Petname,
      });

      alert("User created successfully");
      console.log(res.data);
    } catch (err) {
      if (err.response?.data?.code === 11000) {
        alert("User already exists");
      } else {
        alert("Something went wrong");
        console.log(err);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5C977]">
      <div className="bg-[#FCE6A6] w-[420px] p-6 rounded-xl border-2 border-gray-400">
        <h2 className="text-center text-xl font-bold mb-6">Adopt your pet</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full px-3 py-1 rounded-md"
          />

          <input
            type="text"
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            className="border w-full px-3 py-1 rounded-md"
          />

          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full px-3 py-1 rounded-md"
          />

          <input
            type="text"
            placeholder="Contact Number"
            value={Contact}
            onChange={(e) => setContact(e.target.value)}
            className="border w-full px-3 py-1 rounded-md"
          />

          <textarea
            placeholder="Pet Name"
            value={Petname}
            onChange={(e) => setPetname(e.target.value)}
            className="border w-full px-3 py-1 rounded-md"
          ></textarea>
        </div>

        <button
          onClick={apicall}
          className="mt-6 bg-[#835d36] px-6 py-2 rounded-md text-white mx-auto block"
        >
          Adopt
        </button>
      </div>
    </div>
  );
}
