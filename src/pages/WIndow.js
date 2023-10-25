import React from 'react'
import {GiWindow} from 'react-icons/gi'
import { IconContext } from "react-icons";
import window from '../images/close-up-cleaning-window-with-cloth.jpg'
import { Helmet } from 'react-helmet-async';
function WIndow() {
  return (
    <div>
        <Helmet>
            <title>Window cleaning </title>
            <meta name="description" content="Check our Window Checklist.
                        "/>
            <link rel="canonical" href="/window_cleaning" />
     </Helmet>
        <section class="bg-cover bg-center bg-no-repeat bg-window bg-gray-400 bg-blend-multiply pt-28">
            
            <div class="px-4 mx-auto  w-full text-center py-24 lg:py-52">            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-blue-300 md:text-5xl lg:text-6xl">Window Cleaning</h1>
                <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
                
            </div>
        </section>

        <section class='pt-12'>
            <div className='lg:flex'>
                <div className='lg:w-full'> 

                    {/* <div className="sm:item-center sm:justify-center text-center ">

                            
                    </div> */}

                    <div className=' flex px-2 md:px-8  pt-5 col-span-1 lg:w-3/4  sm:items-center sm:justify-center ' >

                           {/*  <p className='bg-blue-300 px-8 py-5'>
                                After a long day, weeek or more of hosting an event, eveyone just wants to rest, but with all the mess,
                                it becomes difficult. Do not worry, we are here to make sure you relax and get the much needed rest by taking of it all.
                                We will clean the venue making it even better that it was before the event
                            </p> */}

                    </div>


                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 lg:px-10 pt-4 '>


                        <div className='w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1'>
                            <img class="rounded-lg" src={window} alt="" />
                        </div>
                        <div className='px-2 lg:px-6  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center ' >

                            <p>
                                <h1 className='sm:tetx-2xl md:text-3xl font-bold '>Our Window Cleaning Checklist</h1>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <GiWindow class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Remove any clutter or setups from around the window panel
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <GiWindow class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Dust the window frames,sills, tracks and glass to remove surface accumulations 
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <GiWindow class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Clean the glass window with appropriate solutions
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <GiWindow class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Gently wipe away the solutions from the window.
                                        </p>
                                    </div>
                                </div>

                                <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: '', size: '20px', padding:'1px 2px' }}>
                                        <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                            <GiWindow class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                        </div>
                                    </IconContext.Provider>

                                    <div>
                                        <p className='text-base font-semibold'>
                                        Clean sliding door screens and tracks 
                                        </p>
                                    </div>
                                </div>

                                
                            </p>

                        </div>

                    </div>

                    
                    <div className=' lg:flex px-2 md:px-8 mt-8 mb-8 pt-5 col-span-1 lg:w-full bg-navcolour text-white sm:items-start sm:justify-center ' >

                        <p className='bg-navcolour text-white px-8 py-5'>
                        <h1 className='sm:text-2xl text-orangetheme md:text-3xl font-bold '>What you need to know when you request our services </h1>
                            <p className='pt-3'>
                            <ul className='list-disc pl-3'>
                                <li>You can request for <b>only exterior window cleaning </b>, only interior window cleaning or <b>both</b> </li>
                                <li>Our window cleaning service does not include cleaning glass on doors inside the building or mirrors</li>
                                <li>We use different solutions for different types of glass</li>
                                <li>Advise our staff if your windows have been recently tinted or processed so that we can take necessary precautions</li>
                                <li>If you request an external only window clean, make sure to unlatch all the windows and doors from the inside. </li>
                                <li>Shows</li>
                            </ul>
                            </p>
                        </p>

                        <p className=' px-8 py-5'>
                        <h1 className='sm:text-2xl text-orangetheme md:text-3xl font-bold '>What is not included </h1>
                            <p className='pt-11'>
                            <ul className='list-disc pl-3'>
                                <li>We do not <b>wash</b> window frames and fittings, we only <b>wipe </b>them clean.</li>
                                <li>Our window cleaning service does not include cleaning internal glass e,g internal doors or mirrors unles specified upon quote.</li>
                                <li>We use different solutions for different types of glass.</li>
                                <li>Advise our staff if your windows have been recently tinted or processed so that we can take necessary precautions.</li>
                                <li>If you request an external only window clean, make sure to unlatch all the windows and doors from the inside. </li>
                                <li>We <b>do not</b> remove cement stains fro recently built premises. This is a different service that you should contact us for.</li>
                            </ul>
                            </p>
                        </p>

                    </div>


                </div>
            </div>
        </section>
    </div>
  )
}

export default WIndow