/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'

//import sponge from '../images/sponge.gif'

function Hero() {
  return (
    
        <section class="w-full bg-center bg-no-repeat bg-hero_pattern bg-gray-400 bg-blend-multiply pt-8">
           
    <div class="px-4 mx-auto /* max-w-screen-xl */ w-screen text-center py-24 lg:py-40">
    
    <marquee behavior="scroll" direction="left "className="flex"><h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-orangetheme md:text-5xl lg:text-6xl">Welcome to StainMasters Limited</h1></marquee>
        <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48">We love to serve you with compassionate care.</p>
        {/* <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" 
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 
            hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" 
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center
             text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div> */}
    </div>
</section>
    
  )
}

export default Hero