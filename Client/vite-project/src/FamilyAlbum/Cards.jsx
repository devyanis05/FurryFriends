import React from 'react'

function Cards({ img ,name, date, story}) {
    
  return (
    <>
    {/* this is cards component here i have desin the card for family album info is not added  */}
      
         <div className="w-[260px] h-[380px]  border-2 border-[#81655d] rounded-2xl p-4 flex flex-col  items-center bg-[#dbb671]">
      
      {/* Image section */}
      <div className="border-2 border-[#755850] rounded-xl w-full h-[150px] overflow-hidden mb-3">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover rounded-xl" />
          </div>

      {/* Text */}
      <div className="h-[50%]">
        <h2 className="text-lg font-semibold text-[#5c3f36]">{name}</h2>
        <p className="text-sm text-[#5c3f36] mt-1">{date}</p>
        <p className="text-sm text-[#5c3f36] mt-2 text-center">{story}</p>
      </div>
      </div>
    </>
  )
}

export default Cards
