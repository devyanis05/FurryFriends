import React from 'react'

function Bhome2() {
  return (
    <>
      <section className="bg-[#f5cf7b] py-16 px-4 flex items-center justify-center">
        <div className="max-w-3xl text-center">


          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-[#fde7a5] flex items-center justify-center shadow">
              <span className="text-2xl text-[#c47a2c]">💛</span>
            </div>
          </div>


          <h2 className="text-2xl md:text-3xl font-bold text-[#c47a2c] mb-4">
            Our Mission is Simple: Love & Care
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-8">
            We believe every pet deserves a loving home. That’s why adoption is
            100% free. Our shelter is supported entirely by your generous
            donations and purchases from our shop.
          </p>


          <div className="flex justify-center gap-4">
            <button className="bg-[#c47a2c] text-white px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition">
              Donate Now
            </button>

            <button className="bg-white text-[#c47a2c] px-6 py-3 rounded-full font-medium border border-[#c47a2c] hover:bg-[#c47a2c] hover:text-white transition">
              Learn More
            </button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Bhome2
