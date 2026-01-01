import React from 'react'

function Navbar() {
  return (
<>

      <nav className="w-full bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <div className="flex items-center gap-2">
          <span className="text-orange-500 text-2xl">🐾</span>
          <h1 className="text-xl font-semibold text-gray-800">FurryFriends</h1>
        </div>

      
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">Adopt</li>
          <li className="cursor-pointer hover:text-orange-500">Donate</li>
          <li className="cursor-pointer hover:text-orange-500">Shop</li>
          <li className="cursor-pointer hover:text-orange-500">Family Album</li>
          <li className="cursor-pointer text-orange-500">Help</li>
        </ul>


        <div className="flex items-center gap-4">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-full">
            Sign Up
          </button>
         
          <button className="text-gray-700 hover:text-orange-500">
            Log In
          </button>
        </div>

      </div>
    </nav> 
    
</>

  )
}

export default Navbar
