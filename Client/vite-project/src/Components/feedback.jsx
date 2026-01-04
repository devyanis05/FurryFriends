import React from 'react'

function feedback() {
  return (
    <>
    <h1 className='font-bold text-3xl bg-[#F3C66A] pt-10 text-center'>We'd Love to Hear From You!</h1>
<p className='text-center font-bold bg-[#F3C66A] text-sm'>Your feedback helps us find more homes for pets and improve your shopping experience. We read every message!</p>
<div className='h-160 bg-[#F3C66A] flex items-center justify-center'>
<div className='h-140 w-160 bg-[#FCE6A6] shadow-lg rounded-lg '>
<p className=" text-black font-bold text-sm p-5">What is this regarding?</p>
<button type='submit' className="bg-amber-700 text-white px-4 py-1 m-2 rounded-full">Suggestion</button>
<button type='submit ' className="bg-amber-700  text-white px-4 py-1 m-2 rounded-full">Website Issue</button>
<button type='submit' className="bg-amber-700  text-white px-4 py-1 m-2 rounded-full">Adoption Experience</button>
<button type='submit' className="bg-amber-700  text-white px-4 py-1  rounded-full">General Comment</button>
<br></br>
<br></br>
<label className=' text-black font-bold text-sm p-2  pt-4'>Your Name (optional)</label>
<input type='text' placeholder='e.g Charlie Doggo' className='border-2 text-black px-1 py-1 text-sm rounded-full'></input>
<label className=' text-black font-bold text-sm p-2 pt-4'>Email Address</label>
<input type='Email' placeholder='name@example.com' className='border-2  text-black px-1 py-1 text-sm rounded-full'></input>
<br></br>
<br></br>
<label className=' text-black font-bold text-sm pt-4 p-2 '>Summary</label>
<input type='text' placeholder='Brief Summary Of Your Feedback ' className='border-2 w-150 text-black px-3          py-1 text-sm  rounded-full m-4 flex '></input>
<label className=' text-black font-bold text-sm pt-4 p-2 '>Tell Us More</label>
<input type='text' placeholder='Share Your Thoughts , Suggestions Or Describe The Issue You Encountered.....' className='border-2 h-30 w-150 text-black px-3 py-1 text-sm  rounded-full m-4 flex '></input>
<button type="submit" className="m-5  bg-amber-700 text-white px-6 py-2 rounded-full">Send Feedback →</button>

</div>
</div>
    
    </>
  )
}

export default feedback
