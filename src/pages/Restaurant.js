import React from 'react'
import kitchen from '../images/front-view-professional-kitchen.jpg'
import tables from '../images/round-table-arrangement-restaurant.jpg'
import { IconContext } from "react-icons";
import {FaKitchenSet,FaToilet} from 'react-icons/fa6'
import {TbToolsKitchen2}from 'react-icons/tb'
import {GiDominoTiles}from 'react-icons/gi'
import toilet from '../images/hygiene-bowl-modern-bath-close.jpg'
import floor from '../images/restaurant-with-tables-chairs-outside.jpg'

function Restaurant() {
  return (
    <div>
    <section class="bg-cover bg-center bg-no-repeat bg-restaurant bg-gray-400 bg-blend-multiply pt-12">
        
        <div class="px-4 mx-auto  w-full text-center py-24 lg:py-40">
        
            <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-blue-300 md:text-5xl lg:text-6xl">Restaurant Cleaning</h1>
            <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
           
        </div>
    </section>

    <section class='pt-12'>
        <div className='lg:flex'>
            <div className='lg:w-full'> 

                <div className="sm:item-center sm:justify-center text-center ">

                        <h1 className='sm:tetx-2xl md:text-4xl font-bold '>Our Restaurant Checklist</h1>
                </div>

                <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto  md:gap-x-2 grid-col-1 px-2 md:px-5 pt-4 '>

                    <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                        <img class="rounded-t-lg" src={kitchen} alt="" />
                        <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Kitchen
                            </p>
                        </h5>

                        <div className='bg-slate-50'>

                        <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                        <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                    <FaKitchenSet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                </div>
                            </IconContext.Provider>

                            <div>
                                <p className='text-base font-semibold'>
                                Clean all the cooking utensils
                                </p>
                            </div>
                        </div>

                        <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                        <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                    <FaKitchenSet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                </div>
                            </IconContext.Provider>

                            <div>
                                <p className='text-base font-semibold'>
                                Thoroughly clean boilers, refrigerators and stoves
                                </p>
                            </div>
                        </div>

                        <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                        <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                    <FaKitchenSet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                </div>
                            </IconContext.Provider>

                            <div>
                                <p className='text-base font-semibold'>
                                Clean all the surfaces, sinks, pantry and cupboards
                                </p>
                            </div>
                        </div>

                        <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                        <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                    <FaKitchenSet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                </div>
                            </IconContext.Provider>

                            <div>
                                <p className='text-base font-semibold'>
                                Scrub the floor with water removing all the grease
                                </p>
                            </div>
                        </div>

                        <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                        <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                    <FaKitchenSet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                </div>
                            </IconContext.Provider>

                            <div>
                                <p className='text-base font-semibold'>
                                Remove dirt in the kitchen hoods
                                </p>
                            </div>
                        </div>
                        </div>
                     
                    </div>

                    <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                        <img class="rounded-t-lg" src={tables} alt="" />
                        <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Dining space
                            </p>
                        </h5>

                        <div className='bg-slate-50'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <TbToolsKitchen2 class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Remove tablescloths and wash them
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbToolsKitchen2 class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean and sanitise all the tables and chairs
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbToolsKitchen2 class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Take out trash and clean the bin 
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

                        <img class="rounded-t-lg" src={floor} alt="" />
                        <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Windows/Floors
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
                                Sweep and scrub the floor 
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
                                Clean all the windows
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
                                Clean the outside space
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

export default Restaurant