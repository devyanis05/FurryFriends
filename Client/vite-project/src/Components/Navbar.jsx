import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/"><li className="cursor-pointer hover:text-orange-500">Home</li></Link>
          <Link to="/adopt"><li className="cursor-pointer hover:text-orange-500">Adopt</li></Link>
          <Link to="/donate"><li className="cursor-pointer hover:text-orange-500">Donate</li></Link>
          {/* <Link to="/shop"><li className="cursor-pointer hover:text-orange-500">Shop</li></Link> */}
          <Link to="/familyalbum"><li className="cursor-pointer hover:text-orange-500">Family Album</li></Link>
          <Link to="/manual"><li className="cursor-pointer hover:text-orange-500">Manual</li></Link>
          <Link to="/feedback"><li className="cursor-pointer hover:text-orange-500">Feedback</li></Link>
      <Link to='/AboutUs' >    <li className="cursor-pointer hover:text-orange-500">About</li></Link> 
        </ul>


        <div className="flex items-center gap-4">
         <Link to="/signup"><button className="bg-[#835d36] text-white px-5 py-2 rounded-full">
            Sign Up
          </button></Link>
         
          <Link to="/login">< button className="bg-[#835d36] text-white px-5 py-2 rounded-full">
            Log In
          </button></Link>
        </div>

      </div>
    </nav> 
    
</>

  )
}

export default Navbar
