import React from 'react'
import dishes from '../images/morning-after-christmas-day-table-with-alcohol-leftovers.jpg'
import { IconContext } from "react-icons";
import {PiConfettiFill} from 'react-icons/pi'
import { Helmet } from 'react-helmet-async';
function AfterEvent() {
  return (
    <div>
        <Helmet>
            <title>After_event cleaning </title>
            <meta name="description" content="We clean after your event.
                        "/>
            <link rel="canonical" href="/event_cleaning" />
     </Helmet>
    
    <div>
        <section class="bg-cover bg-center bg-no-repeat bg-after_event bg-gray-400 bg-blend-multiply pt-96">
            
            <div class="px-4 mx-auto  w-full text-center py-24 lg:py-20">
            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-blue-300 md:text-5xl lg:text-6xl">After-Event Cleaning</h1>
                <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
                
            </div>
        </section>

        <section class='pt-12'>
            <div className='lg:flex'>
                <div className='lg:w-full'> 

                    {/* <div className="sm:item-center sm:justify-center text-center ">

                            
                    </div> */}

                    <div className=' flex px-2 md:px-8  pt-5 col-span-1 lg:w-3/4  sm:items-center sm:justify-center ' >

                            <p className='bg-blue-300 px-8 py-5'>
                                After a long day, weeek or more of hosting an event, eveyone just wants to rest, but with all the mess,
                                it becomes difficult. Do not worry, we are here to make sure you relax and get the much needed rest by taking of it all.
                                We will clean the venue making it even better that it was before the event
                            </p>

                    </div>


                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 lg:px-10 pt-4 '>


                        <div className='w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1'>
                            <img class="rounded-t-lg" src={dishes} alt="" />
                        </div>
                        <div className='px-2 lg:px-6  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center ' >

                            <p>
                                <h1 className='sm:tetx-2xl md:text-3xl font-bold '>Our After-Event Checklist</h1>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Remove all decorations
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Move all the chairs 
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Remove all decorations.
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Picking up all the waste (plates, bottles, plastic, paper etc).
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Clean up spills and stains from walls, counters, furniture and floor
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Clean all the dishes
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Sweep and scrub all the floors
                                        </p>
                                    </div>
                                </div>

                                     <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Clean and sanitise all the restrooms available
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <PiConfettiFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Empty and clean all the rubbish bins 
                                        </p>
                                    </div>
                                </div>
                            </p>

                        </div>

                    </div>

                    
                    <div className=' flex px-2 md:px-8  pt-5 col-span-1 lg:w-full  sm:items-start sm:justify-center ' >

                        <p className='bg-blue-300 px-8 py-5'>
                        <h1 className='sm:tetx-2xl md:text-3xl font-bold '>The Events we clean after </h1>
                            <p className='pt-3'>
                            <ul className='list-disc pl-3'>
                                <li>House Parties</li>
                                <li>Graduation Ceremonies</li>
                                <li>Funerals</li>
                                <li>Work Shops</li>
                                <li>Conferences</li>
                                <li>Shows</li>
                            </ul>
                            </p>
                        </p>

                    </div>


                </div>
            </div>
        </section>
    </div></div>
  )
}

export default AfterEvent