import React from 'react'

function Bhome8() {
    return (
        <>
            <section className="bg-[#fde7a5] py-20 px-4">
                <div className="max-w-3xl mx-auto text-center">


                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-full bg-[#fde7a5] flex items-center justify-center shadow">
                            <span className="text-2xl text-[#c47a2c]">✉️</span>
                        </div>
                    </div>


                    <h2 className="text-2xl md:text-3xl font-bold text-[#c47a2c] mb-3">
                        Join Our Community
                    </h2>


                    <p className="text-gray-600 mb-8">
                        Get updates on new pets, happy tails, and shelter news.
                    </p>


                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full sm:w-80 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c47a2c]"
                        />

                        <button className="bg-[#c47a2c] text-white px-8 py-3 rounded-full font-medium shadow hover:opacity-90 transition">
                            Subscribe
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Bhome8
