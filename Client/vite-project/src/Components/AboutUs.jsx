import React from 'react'
import img1 from '../imges/divvya-removebg-preview.png'
import img2 from '../imges/bhavna_photo-removebg-preview - Copy.png'
import img3 from '../imges/steffi-removebg-preview (1) - Copy.png'
import img4 from '../imges/vedu2-removebg-preview.png'
import img5 from '../imges/acchal-removebg-preview.png'
import img6 from '../imges/dhan-removebg-preview.png'
import img7 from '../imges/minal-removebg-preview.png'
import img8 from '../imges/poonam-removebg-preview.png'



function AboutUs() {
  return (
    <>
    <section className=" bg-[#f5cf7b] w-full h-auto mx-auto px-6 py-16 items-center justify-center text-center ">
            <div className="teamMember">
                <h1 className=" text-4xl md:text-6xl font-black leading-tight text-[#522c22] ">
                    Meet the <span className="text-[#522c22]"> Team Behind Paws Hope.</span>
                </h1>
                <p className="mt-4 text-lg opacity-80 text-[#66483e]">
                    Our dedicated team of animal lovers and advocates work tirelessly to rescue, rehabilitate, and rehome abandoned pets. Together, we strive to create a better world for our furry friends.
                </p>

            </div>

            <div className="teamCard flex flex-wrap justify-center gap-8 mt-12 ">

                <div >
                    <img
                        src={img1}
                        alt="Team Member"
                        className="w-48 h-48 rounded-full  border-6 border-[#4b392d]"
                    />  
                    <h2 className=" text-2xl font-bold text-[#421f16] ">Devyani</h2>
                    <p className=" text-lg opacity-80 text-[#66483e]">Team Leader</p>

                </div>
                <div >
                    <img
                        src={img2 }
                        alt="Team Member"
                        className="w-48 h-48 rounded-full mx-auto mb-4 border-6 border-[#4b392d]"
                    />  
                    <h2 className=" text-2xl font-bold text-[#421f16] ">Bhavna</h2>
                    <p className=" text-lg opacity-80 text-[#66483e]">Employee</p>

                </div>
                <div >
                    <img
                        src={img3 }
                        alt="Team Member"
                        className="w-48 h-48 rounded-full mx-auto mb-4 border-6 border-[#4b392d]"
                    />  
                    <h2 className=" text-2xl font-bold text-[#421f16] ">Steffi</h2>
                    <p className=" text-lg opacity-80 text-[#66483e]">Employee</p>

                </div>
                <div >
                    <img
                        src={img4 }
                        alt="Team Member"
                        className="w-48 h-48 rounded-full mx-auto mb-4 border-6 border-[#4b392d]"
                    />  
                    <h2 className=" text-2xl font-bold text-[#421f16] ">Vaidehi</h2>
                    <p className=" text-lg opacity-80 text-[#66483e]">Employee</p>

                </div>
                <div >
                    <img
                        src={img5 }
                        alt="Team Member"
                        className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-[#443022]"
                    />  
                    <h2 className=" text-2xl font-bold text-[#421f16] ">Achal</h2>
                    <p className=" text-lg opacity-80 text-[#66483e]">Employee</p>

                </div>
                <div >
                    <img
                        src={img6 }
                        alt="Team Member"
                        className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-[#443022]"
                    />  
                    <h2 className=" text-2xl font-bold text-[#421f16] ">Dhanswi</h2>
                    <p className=" text-lg opacity-80 text-[#66483e]">Employee</p>

                </div>
                <div >
                    <img
                        src={img7  }
                        alt="Team Member"
                        className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-[#443022]"
                    />  
                    <h2 className=" text-2xl font-bold text-[#421f16] ">Minal</h2>
                    <p className=" text-lg opacity-80 text-[#66483e]">Employee</p>

                </div>
                <div >
                    <img
                        src={img8}
                        alt="Team Member"
                        className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-[#443022]"
                    />  
                    <h2 className=" text-2xl font-bold text-[#421f16] ">Poonam</h2>
                    <p className=" text-lg opacity-80 text-[#66483e]">Employee</p>

                </div>

            </div>
            </section>
    </>
  )
}

export default AboutUs
