import React from 'react'

function Login() {
  return (
    <>
      <div className="min-h-screen bg-[#F3C66A] flex items-center justify-center px-4">
      
      {/* Login Card */}
      <div className="bg-[#FCE6A6] w-full max-w-md rounded-2xl shadow-xl p-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center font-[cursive] mb-2">
         Furry Friends
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Welcome back 🐾
        </p>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Username / Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Username or Email
            </label>
            <input
              type="text"
              placeholder="Enter username or email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B87333]"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#B87333] text-white py-2 rounded-md hover:bg-[#a4632c] transition font-semibold"
          >
            Login
          </button>
        </form>

      </div>
    </div>
    </>
  )
}

export default Login
