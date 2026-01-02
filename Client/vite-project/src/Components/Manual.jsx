import React from 'react'
import Common from './images/Common.jpg'
import Dog from './images/Dog.jpg'
import Rabbit from './images/Rabbit.jpg'
import Bird from './images/Bird.jpg'
import Cat from './images/Cat.jpg'
import Hamster from './images/Hamster.jpg'

const Manual = () => {
  return (
    

    <div  className='min-h-screen w-screen bg-[#fde7a5]'>
{/* Hero Section */}
  <section className="text-center text-black py-16 px-4 bg-[#fde7a5]">
    <h2 className="text-3xl font-bold mb-3">How can we help you?</h2>
    <p className="text-sm mb-6">Search adoption, donations, shop or community help</p>
    <div className="max-w-xl mx-auto flex bg-[#fff7ea] rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Search pets, donations, shop..."
        className="flex-1 px-4 py-2 text-black outline-none"
      />
      <button className="bg-[#c47a2c] px-6 text-white">Search</button>
    </div>
  </section>
   
   

  {/* Main Content */}
  <div className="max-w-6xl mx-auto bg-[#f5cf7b]  rounded-3xl p-6 md:p-10 -mt-10">


    {/* Getting Started */}
    <section className="mb-10">
      <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
      <p className="text-sm text-gray-600 mb-6">
        New here? Follow these simple steps to begin your journey with us.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-[#fff7ea] p-5 rounded-xl">
          <h4 className="font-semibold mb-2">Create Account</h4>
          <p className="text-sm text-gray-600">Sign up to adopt, donate or shop.</p>
        </div>
        <div className="bg-[#fff7ea] p-5 rounded-xl">
          <h4 className="font-semibold mb-2">Browse Pets</h4>
          <p className="text-sm text-gray-600">Find your perfect furry friend.</p>
        </div>
        <div className="bg-[#fff7ea] p-5 rounded-xl">
          <h4 className="font-semibold mb-2">Visit Us</h4>
          <p className="text-sm text-gray-600">Meet pets and shelters nearby.</p>
        </div>
      </div>
    </section>

    {/* Adoption Process */}
    <section className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">The Adoption Process</h3>
        
      </div>
      <ol className="space-y-4">
        <li className="flex gap-3">
          <span className="h-7 w-7 rounded-full bg-[#c47a2c] text-white flex items-center justify-center">1</span>
          <p className="text-sm">Find your match and check pet details.</p>
        </li>
        <li className="flex gap-3">
          <span className="h-7 w-7 rounded-full bg-[#c47a2c] text-white flex items-center justify-center">2</span>
          <p className="text-sm">Submit adoption application.</p>
        </li>
        <li className="flex gap-3">
          <span className="h-7 w-7 rounded-full bg-[#c47a2c] text-white flex items-center justify-center">3</span>
          <p className="text-sm">Verification & confirmation and take them home.</p>
        </li>
      </ol>
    </section>

    {/* Donations */}
    <section className="mb-10 grid md:grid-cols-2 gap-6 items-center">
    <img src={Common} alt='img' className='rounded-xl'/>
      
    
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Donations</h3>
  {/* left side */}
      <ul className="space-y-3">
  <li className="flex items-center gap-3">
    <span className="h-7 w-7 rounded-full bg-[#c47a2c] text-white flex items-center justify-center">
      1
    </span>
    <span>Submit pet details for donation</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="h-7 w-7 rounded-full bg-[#c47a2c] text-white flex items-center justify-center">
      2
    </span>
    <span>Verification & Safety Check</span>
  </li>

  <li className="flex items-center gap-3">
    <span className="h-7 w-7 rounded-full bg-[#c47a2c] text-white flex items-center justify-center">
      3
    </span>
    <span>Connect with a loving adopter</span>
  </li>
</ul>
        <button className="mt-4 px-5 py-2 bg-[#c47a2c] text-white rounded-lg">
          Donate Now
        </button>
      </div>
    </section>

    {/* Pet Shop */}
    <section className="mb-10 bg-[#fff7ea] p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4">Pet Shop</h3>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div className="bg-white p-4 rounded-xl">Browse Categories</div>
        <div className="bg-white p-4 rounded-xl">Easy Checkout</div>
        <div className="bg-white p-4 rounded-xl">Fast Delivery</div>
      </div>
    </section>

    {/* Family Album */}
    <section className="mb-10">
      <h3 className="text-xl font-semibold mb-2">Family Album</h3>
      <p className="text-sm text-gray-600 mb-4">
        Happy moments from our adopted families.
      </p>
      <div className="flex gap-4">
        <img src={Dog} alt='dogimg' className="h-20 w-20 rounded-full bg-gray-300" />
        <img src={Rabbit} alt='rabitimg' className="h-20 w-20 rounded-full bg-gray-300" />
         <img src={Bird} alt='Birdimg' className="h-20 w-20 rounded-full bg-gray-300" />
          <img src={Cat} alt='Catimg' className="h-20 w-20 rounded-full bg-gray-300" />
          <img src={Hamster} alt='Hamsterimg' className="h-20 w-20 rounded-full bg-gray-300" />

      </div>
    </section>

    {/* FAQ */}
    <section>
      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-3 text-sm">
        <div className="p-3 border rounded-lg">Do I need a license to adopt?</div>
        <div className="p-3 border rounded-lg">What are adoption fees?</div>
        <div className="p-3 border rounded-lg">Can I return items from shop?</div>
        <div className="p-3 border rounded-lg">How long does approval take?</div>
      </div>
    </section>
  </div>

  


      
    </div>
    
  )
}

export default Manual
