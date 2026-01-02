import React from "react";

export default function Adoptform() {
  return (
    <div className="min-h-screen bg-[#F5C977] flex items-center justify-center">
      <div className="bg-[#f3f3f3] w-[420px] p-6 rounded-xl border-2 border-gray-400">
        <h2 className="text-center text-xl font-bold mb-6">
          Adopt your pet
        </h2>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <label className="w-[90px]">Name:</label>
            <input
              type="text"
              placeholder="Fullname"
              className="border rounded-md w-full px-3 py-1"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="w-[90px]">Address:</label>
            <input
              type="text"
              className="border rounded-md w-full px-3 py-1"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="w-[90px]">Contact.No:</label>
            <input
              type="text"
              className="border rounded-md w-full px-3 py-1"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="w-[90px]">Pet name:</label>
            <textarea
              className="border rounded-md w-full px-3 py-1"
            />
          </div>
        </div>

        <button className="mt-6 bg-[#d2a679] px-6 py-2 rounded-md mx-auto block">
          Adopted
        </button>
      </div>
    </div>
  );
}