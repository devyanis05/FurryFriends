import React from 'react'
import img1 from '../imges/1 (2).jpg'
import img2 from '../imges/2 (1).jpg'

function Bhome7() {
    return (
        <>
            <section className="bg-[#f5cf7b] py-14 px-4">

                <h2 className="text-[50px] font-semibold text-center text-[#c47a2c] mb-10">
                    Happily Ever After
                </h2>


                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">


                    <div className="bg-white rounded-3xl shadow-md p-6 flex items-start gap-4">
                        <img
                            src={img1}
                            alt="Shree shelke"
                            className="w-14 h-14 rounded-full object-cover border-2 border-[#fde7a5]"
                        />

                        <div>

                            <div className="flex mb-2 text-[#c47a2c]">
                                ⭐⭐⭐⭐⭐
                            </div>


                            <p className="text-gray-600 text-sm mb-2">
                                “Adopting Luna changed our lives. The process at Paws Home
                                was so smooth and caring.”
                            </p>


                            <p className="text-sm font-medium text-gray-800">
                                — Shree shelke
                            </p>
                        </div>
                    </div>


                    <div className="bg-white rounded-3xl shadow-md p-6 flex items-start gap-4">
                        <img
                            src={img2}
                            alt="Mamta Agrawal"
                            className="w-14 h-14 rounded-full object-cover border-2 border-[#fde7a5]"
                        />

                        <div>

                            <div className="flex mb-2 text-[#c47a2c]">
                                ⭐⭐⭐⭐⭐
                            </div>


                            <p className="text-gray-600 text-sm mb-2">
                                “Max found his forever home with us. We can’t imagine our
                                family without him now.”
                            </p>


                            <p className="text-sm font-medium text-gray-800">
                                — Mamta Agrawal
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Bhome7
