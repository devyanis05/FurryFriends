import React from 'react'
import img1 from '../imges/pexels-chevanon-1108099.jpg'

function Bhome1() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#fde7a5] p-4">
        <div
          className="relative w-full max-w-5xl h-[500px] rounded-3xl overflow-hidden shadow-xl"
          style={{
            backgroundImage:
              `url( ${img1})`, backgroundSize: "cover", backgroundPosition: "center",
          }} >
          <div className="absolute inset-0 bg-black/40"></div>


          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              Find Your New Best <br /> Friend Today
            </h1>

            <p className="text-white/90 mt-4 max-w-2xl text-sm md:text-base">
              Free adoption for loving homes. Support our shelter by shopping for
              supplies or making a donation.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-[#c47a2c] hover:bg-orange-500 text-white px-6 py-3 rounded-full font-medium transition">
                Adopt a Friend
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-medium transition">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Bhome1
