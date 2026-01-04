import React from 'react'
import img1 from '../imges/cat.jpg'
import img2 from '../imges/dog abhu.jpg'
import img3 from '../imges/birds.jpg'
import img4 from '../imges/rabbit.jpg'

function Bhome4() {
    return (
        <>
            <section className="bg-[#f5cf7b] py-20 px-4">
                <h2 className="text-xl font-bold text-2xl text-[#c47a2c] mb-6">
                    Browse by Category
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <div className="bg-[#fde7a5] rounded-2xl shadow-md p-5 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-[#c47a2c]">
                            <img
                                src={img1}
                                alt="Cats"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-[#c47a2c] font-medium">Cats</p>
                    </div>

                
                    <div className="bg-[#fde7a5] rounded-2xl shadow-md p-5 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-[#c47a2c]">
                            <img
                                src={img2}
                                alt="Dogs"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-[#c47a2c] font-medium">Dogs</p>
                    </div>
                    <div className="bg-[#fde7a5] rounded-2xl shadow-md p-5 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-[#c47a2c]">
                            <img
                                src={img3}
                                alt="Birds"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-[#c47a2c] font-medium">Birds</p>
                    </div>
                    <div className="bg-[#fde7a5] rounded-2xl shadow-md p-5 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-[#c47a2c]">
                            <img
                                src={img4}
                                alt="Rabbits"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-[#c47a2c] font-medium">Rabbits</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Bhome4
