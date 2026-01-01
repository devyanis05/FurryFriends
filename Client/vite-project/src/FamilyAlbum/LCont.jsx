import React from 'react'

function LCont() {
  return (
    <>
      {/* this section is for the share your story button */}
      <div className='mr-61.5'>

     
      <div className='h-[30vh] w-[45vw] gap-2 flex flex-col items-center border-3 border-[#5c3f36] rounded-2xl justify-center text-center p-10  bg-[#fac074] ml-[25%]'>
        <p className='text-[5vh] text-[#5c3f36]'>Have a Story to Tell</p>   
        <p className='text-[3vh]'>We love to hear how your furry friend is doing! Share your update and join the gallery of happy tails.</p>

        <button 
        className='h-[9vh] text-[3vh] w-[15vw] bg-[#ffcc80] border-3 border-[#5c3f36] rounded-2xl'>
          Share Your Story
          </button>
      </div>
       </div> 
    </>
  )
}

export default LCont