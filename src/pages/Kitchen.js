import React from 'react'
import { IconContext } from "react-icons";
import {FaSink} from 'react-icons/fa6'
import {TbCooker} from 'react-icons/tb'
import {GiDominoTiles}from 'react-icons/gi'
import {RiArchiveDrawerFill} from 'react-icons/ri'
import surfaces from '../images/minimalistic-kitchen-corner-with-appliances.jpg'
import stove from '../images/polished-gas-cooker-after-washingperfectly-clean-gas-cooker-after-being-washed-with-polishing-chemicals-result-washing-burners.jpg'
import cupboards from '../images/view-beautifully-decorated-green-kitchen.jpg'
import floor from '../images/close-up-marble-textured-tiles.jpg'
import { Helmet } from 'react-helmet-async';
function Kitchen() {
  return (
    <div>
        <Helmet>
            <title>Kitchen cleaning </title>
            <meta name="description" content="Check our Kitchen Checklist.
                        "/>
            <link rel="canonical" href="/kitchen_cleaning" />
     </Helmet>
        <section class="bg-cover bg-center bg-no-repeat bg-kitchen bg-gray-400 bg-blend-multiply pt-12">
            
            <div class="px-4 mx-auto  w-full text-center py-24 lg:py-40">
            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-blue-300 md:text-5xl lg:text-6xl">Kitchen Cleaning</h1>
                <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
                
            </div>
        </section>

        <section class='pt-12'>
            <div className='lg:flex'>
                <div className='lg:w-full'> 

                    <div className="sm:item-center sm:justify-center text-center ">

                            <h1 className='sm:tetx-2xl md:text-4xl font-bold '>Our Kitchen Checklist</h1>
                    </div>

                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 pt-4 '>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={floor} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Floor/Walls
                                </p>
                            </h5>

                            <div className='bg-slate-50 md:py-10 '>


                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiDominoTiles class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Remove cob webs in the corners and ceiling
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
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
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiDominoTiles class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Mop and dry the floor and walls
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiDominoTiles class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Launder curtains
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiDominoTiles class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Empty and wash the rubbish bins
                                    </p>
                                </div>
                            </div>

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={surfaces} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Countertops
                                </p>
                            </h5>

                            <div className='bg-slate-50 md:py-5'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaSink class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean sink, faucet and knobs with hot soapy water
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSink class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wash in and out of the dishwasher
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSink class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Remove items on countertops
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSink class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wash the countertopswith soapy water removing stains
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaSink class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    clean and wipe items before neatly returning them on the countertops
                                    </p>
                                </div>
                            </div>
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={stove} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Cooker/Microwave/Fridge
                                </p>
                            </h5>

                            <div className='bg-slate-50 '>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the stove top removing oil stains
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the oven from the inside and the outside
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the microwave
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wash the shelves, trays, drawers and the inside walls of fridge/freezer 
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the fridge exterior and the handles 
                                    </p>
                                </div>
                            </div>

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={cupboards} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Copboards/Drawers
                                </p>
                            </h5>

                            <div className='bg-slate-50 md:py-12'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <RiArchiveDrawerFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Remove items from cupboards and drawers
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <RiArchiveDrawerFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean inside and outside the drawers and cupboards
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <RiArchiveDrawerFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                   Clean the pantry
                                    </p>
                                </div>
                            </div>

                            

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <RiArchiveDrawerFill class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wipe and put back the items
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

export default Kitchen