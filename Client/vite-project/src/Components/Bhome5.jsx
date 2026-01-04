import React from 'react'
import img1 from '../imges/bella.jpg'
import img2 from '../imges/mili.jpg'
import img3 from '../imges/thuber.jpg'

function Bhome5() {
    return (
        <>
            <section className="bg-[#fde7a5] py-12 px-4">
            
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-[#c47a2c]">
                        Featured Pets
                    </h2>
                    <button className="text-sm text-[#c47a2c] font-medium">
                        View All
                    </button>
                </div>

            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    
                    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                        <div className="relative">
                            <img
                                src={img1}
                                alt="Billi"
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                                Vaccinated
                            </span>
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-[#c47a2c]">Bittu</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Golden Retriever • 2 Years
                            </p>

                            <button className="w-full bg-[#c47a2c] text-white py-2 rounded-full font-medium hover:opacity-90 transition">
                                Adopt Bittu 🐾
                            </button>
                        </div>
                    </div>

                    
                    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                        <div className="relative">
                            <img
                                src={img2}
                                alt="Mili"
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                                Verified
                            </span>
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-[#c47a2c]">Mili</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Siamese • 4 Years
                            </p>

                            <button className="w-full bg-[#c47a2c] text-white py-2 rounded-full font-medium hover:opacity-90 transition">
                                Adopt Mili 🐾
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                        <div className="relative">
                            <img
                                src={img3}
                                alt="Tapu"
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-[#c47a2c]">Tapu</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Holland Lop • 1 Year
                            </p>

                            <button className="w-full bg-[#c47a2c] text-white py-2 rounded-full font-medium hover:opacity-90 transition">
                                Adopt Tapu🐾
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Bhome5
