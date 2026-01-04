import React from 'react'
import img1 from '../imges/dog.png'

function AboutsUs1() {
  return (
    <>
      <section className=" bg-[#f5cf7b] w-full  mx-auto items-center justify-center text-center ">
        <div className="heroContainer bg-[#fde7a5] flex ">

          <div className="right w-[50%] mx-auto mb-8 flex items-center justify-center flex-col ">
            <h1 className=" text-4xl md:text-6xl font-black leading-tight text-[#522c22] ">
              About <span className="text-[#522c22]"> Paws Hope.</span>
            </h1>
            <p className="mt-4 text-lg opacity-80 text-[#66483e] ml-[50px]">
              Paws and Pet is a compassionate platform dedicated to connecting loving homes with pets who deserve care, safety, and happiness. We believe every animal deserves a second chance, whether through adoption, support, or responsible donation. Our mission is to spread awareness, encourage kindness, and make pet adoption simple and joyful. Along with helping pets find forever homes, we also offer quality pet products and services to support their well-being. At Paws and Pet, we’re not just a website—we’re a community that believes love, care, and compassion can change lives, one paw at a time.
            </p>
          </div>

          <div className="left w-[50%] mx-auto mb-8  flex items-center justify-center ">
            <img
              src={img1}
              className='w-[45%]'
            />
          </div>
        </div>


      </section>
    </>
  )
}

export default AboutsUs1
