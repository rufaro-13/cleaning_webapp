/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import { IconContext } from "react-icons";
import {FaToilet,FaSoap, FaShower} from 'react-icons/fa6'
import {GiDominoTiles}from 'react-icons/gi'
import sink from '../images/new-modern-steel-faucet-with-ceramic-sink-bathroom.jpg'
import shower from '../images/modern-bathroom-authentic-interior-design.jpg'
import toilet from '../images/hygiene-bowl-modern-bath-close.jpg'
import floor from '../images/sleek-minimalistic-bathroom-with-white-toilet-bathtub-sink.jpg'
function BathRoom() {
  return (
    <div>
        <section class="w-full bg-center bg-no-repeat bg-bathroom bg-gray-400 bg-blend-multiply pt-12">
            
            <div class="px-4 mx-auto /* max-w-screen-xl */ w-screen text-center py-24 lg:py-40">
            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-navcolour md:text-5xl lg:text-6xl">Bathroom Cleaning</h1>
                <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
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

        <section class='pt-12'>
            <div className='lg:flex'>
                <div className='lg:w-full'> 

                    <div className="sm:item-center sm:justify-center text-center ">

                            <h1 className='sm:tetx-2xl md:text-4xl font-bold '>Our Bathroom Checklist</h1>
                    </div>

                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 pt-4 '>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={sink} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Sink/Surfaces
                                </p>
                            </h5>

                            <div className='bg-slate-50'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                            <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSoap class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Toilet is cleaned and sanitized (base and behind)
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSoap class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Countertops cleaned and sanitized
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSoap class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wipe and spray down counters
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSoap class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean mirrors and glasses
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSoap class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Spotless faucet and basin
                                    </p>
                                </div>
                            </div>
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={toilet} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Toilet
                                </p>
                            </h5>

                            <div className='bg-slate-50'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Toilet bowl is cleaned and sanitized (base and behind)
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean exterior and interior of toilet
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Take out trash and clean the bin 
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean mirrors and glasses
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Spotless faucet and basin
                                    </p>
                                </div>
                            </div>
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={shower} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Shower/tub
                                </p>
                            </h5>

                            <div className='bg-slate-50'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaShower class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Scrub tub and showers and remove moulds
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaShower class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean shower head
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaShower class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wipe and dry tub and shower
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaShower class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean creases where shower/tub meets bathroom walls
                                    </p>
                                </div>
                            </div>

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={floor} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Floors/walls
                                </p>
                            </h5>

                            <div className='bg-slate-50'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiDominoTiles class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Bathroom mats are swept and or vacuumed
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiDominoTiles class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean creases where shower/tub meets bathroom floor
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiDominoTiles class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Scrub floors and walls
                                    </p>
                                </div>
                            </div>

                            

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiDominoTiles class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Mop and dry the floor and walls
                                    </p>
                                </div>
                            </div>
                            </div>
                         
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default BathRoom