import React from 'react'
import img1 from '../imges/food.jpg'
import img2 from '../imges/billi.jpg'
import img3 from '../imges/bed.jpg'
import img4 from '../imges/belt.jpg'
function Bhome6() {
    return (
        <>
            <section className="bg-[#fde7a5] py-12 px-4">
            
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-[#c47a2c]">
                            Shop for Supplies
                        </h2>
                        <p className="text-sm text-gray-500">
                            Treat your pet, save another.
                        </p>
                    </div>
                    <button className="text-sm font-medium text-[#c47a2c]">
                        Visit Store
                    </button>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                
                    <div className="bg-white rounded-3xl shadow-md p-4">
                        <div className="bg-teal-600 rounded-2xl p-6 mb-4 flex justify-center">
                            <img
                                src={img1}
                                alt="Premium Dog Food"
                                className="h-28 object-contain"
                            />
                        </div>
                        <h3 className="font-semibold text-gray-800">Premium Dog Food</h3>
                        <p className="text-sm text-gray-500">Organic Chicken</p>

                        <div className="flex items-center justify-between mt-4">
                            <span className="text-[#c47a2c] font-semibold">$24.99</span>
                            <button className="bg-[#fde7a5] p-2 rounded-full">
                                🐾
                            </button>
                        </div>
                    </div>

                
                    <div className="bg-white rounded-3xl shadow-md p-4">
                        <div className="bg-gray-100 rounded-2xl p-6 mb-4 flex justify-center">
                            <img
                                src={img2}
                                alt="Cat Toy Set"
                                className="h-28 object-contain"
                            />
                        </div>
                        <h3 className="font-semibold text-gray-800">Cat Toy Set</h3>
                        <p className="text-sm text-gray-500">Interactive Mouse</p>

                        <div className="flex items-center justify-between mt-4">
                            <span className="text-[#c47a2c] font-semibold">$12.50</span>
                            <button className="bg-[#fde7a5] p-2 rounded-full">
                                🐾
                            </button>
                        </div>
                    </div>

            
                    <div className="bg-white rounded-3xl shadow-md p-4">
                        <div className="bg-gray-100 rounded-2xl p-6 mb-4 flex justify-center">
                            <img
                                src={img3}
                                alt="Cozy Pet Bed"
                                className="h-28 object-contain"
                            />
                        </div>
                        <h3 className="font-semibold text-gray-800">Cozy Pet Bed</h3>
                        <p className="text-sm text-gray-500">Memory Foam, Large</p>

                        <div className="flex items-center justify-between mt-4">
                            <span className="text-[#c47a2c] font-semibold">$45.00</span>
                            <button className="bg-[#fde7a5] p-2 rounded-full">
                                🐾
                            </button>
                        </div>
                    </div>

                
                    <div className="bg-white rounded-3xl shadow-md p-4">
                        <div className="bg-gray-100 rounded-2xl p-6 mb-4 flex justify-center">
                            <img
                                src={img4}
                                alt="Durable Leash"
                                className="h-28 object-contain"
                            />
                        </div>
                        <h3 className="font-semibold text-gray-800">Durable Leash</h3>
                        <p className="text-sm text-gray-500">Nylon, 6ft</p>

                        <div className="flex items-center justify-between mt-4">
                            <span className="text-[#c47a2c] font-semibold">$18.99</span>
                            <button className="bg-[#fde7a5] p-2 rounded-full">
                                🐾
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Bhome6
