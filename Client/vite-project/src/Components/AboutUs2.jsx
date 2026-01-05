import React from 'react'

function AboutUs2() {
  return (
    <>
     <section className="bg-[#fde7a5] py-12">
              <div className="max-w-[1200px]  mx-auto px-6 grid md:grid-cols-3 gap-6">
                {[
                  [ "1,200+", "Pets Saved"],
                  ["850", "Adoptions"],
                  ["50k+", "Donations Raised"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[#f5cf7b] p-6 rounded-xl shadow  gap-5">
                    <div className='flex gap-6 flex-col items-center'>
                    <h3 className="text-3xl font-bold text-[#ed7c2b]">{value}</h3>
                    <p className="opacity-70 text-3xl text-[#421f16] font-bold">{label}</p>
                    </div>
                    <div className='mt-6 items-center flex'>
                 
                    </div>
                  </div>
                ))}
              </div>
            </section> 
    </>
  )
}

export default AboutUs2
