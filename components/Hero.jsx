import React from 'react'
import heroImg from '../src/assets/heroImg.png';
import cash from '../src/assets/cash.png';
import ReferButton from './ReferButton';

const Hero = () => {
  return (

    <div class="flex justify-center h-4/5 mb-20">

    <div class="flex justify-center bg-blue-5 pt-4 w-9/12 h-1/2 rounded-xl shadow-2xl mt-10 relative">
        <img class="h-28 absolute -top-4 left-5 origin-center rotate-90" src={cash} alt="" />
        <img class="h-24 absolute -top-4 right-1 origin-center rotate-180" src={cash} alt="" />
        <img class="h-24 absolute bottom-28 right-10  origin-center -rotate-90" src={cash} alt="" />
        <img class="h-24 absolute top-8 right-72 origin-center rotate-180" src={cash} alt="" />
        <img class="h-28 absolute top-72 left-80 origin-center" src={cash} alt="" />
        <div class="flex flex-col basis-1/3 gap-6 pt-16">
            <div>
                <h1 class="text-5xl font-bold">Let’s Learn & Earn</h1>
            </div>
            <div>
                <h2 class="text-xl font-medium text-gray-600">Get a chance to win<br/> up-to <span class="text-2xl text-blue-500">Rs. 15,000</span></h2>
            </div>
            <ReferButton/>
        </div>
        <div class="w-1/2 flex justify-center align-middle p-0 m-0" >
            <img class="z-40 object-cover max-h-96" src={heroImg} alt="" />
        </div>
    
    </div>
    </div>
  )
}

export default Hero