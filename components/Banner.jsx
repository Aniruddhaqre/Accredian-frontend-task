import React from 'react'
import headphone from "../src/assets/headphone.png"
import pattern from "../src/assets/pattern.png"

const Banner = () => {
  return (
    <div class="mr-40 ml-36 mt-36 bg-blue-600 rounded-md relative flex justify-between align-middle overflow-hidden p-8">
     <img src={pattern} alt="" class="absolute -right-4 -bottom-15 "/>
        <div class="flex gap-8 justify-center align-middle">
            <div class="flex justify-center"><img src={headphone} alt="" class="size-[5rem]" /></div>
            <div class="flex flex-col justify-center align-middle z-10 gap-1">
                <h1 class="text-xl font-medium text-gray-100">Want to delve deeper into the program?</h1>
                <p class="text-sm font-medium text-gray-300">Share your details to receive expert insights from our program team!</p>
            </div>
        </div>
        <div class="flex justify-center text-slate-200 rounded  font-semibold text-sm z-10">
            <div class="flex flex-col align-middle justify-center bg-slate-200 rounded-md text-blue-500 font-semibold h-10 pr-6 pl-6 shadow-inner mt-6">
                Get in Touch
            </div>
        </div>
    </div>
  )
}

export default Banner