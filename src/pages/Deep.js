import React from 'react'
import { IconContext } from "react-icons";
import {GrLounge} from 'react-icons/gr'
import {TbCooker} from 'react-icons/tb'
import {GiOfficeChair,GiFlowerPot} from 'react-icons/gi'
import {FaToilet,FaBed} from 'react-icons/fa6'
import kitchen from '../images/closeup-female-hand-gloves-cleaning-kitchen-tap.jpg'
import bathroom from '../images/shower-head-getting-cleaned.jpg'
import bedroom from '../images/chambermaid-making-bed-hotel-room.jpg'
import out from '../images/serrated-metal-rake-garden-cleaning.jpg'
import living from '../images/interior-design-with-photoframes-couch.jpg'
import office from '../images/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg'
function Deep() {
  return (
    <div>
        <section class="bg-cover bg-center bg-no-repeat bg-office bg-gray-400 bg-blend-multiply pt-12">
            
            <div class="px-4 mx-auto  w-full text-center py-24 lg:py-40">
            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-blue-300 md:text-5xl lg:text-6xl">
                    Deep Cleaning
                </h1>
                <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
                
            </div>
        </section>

        <section class='pt-12'>
            <div className='lg:flex'>
                <div className='lg:w-full'>

                    <div className='lg:mx-auto flex px-2 md:px-8  pt-5 col-span-1 lg:w-3/4  sm:items-center sm:justify-center ' >

                            <p className='bg-blue-300 px-8 py-5'>
                                Once in a while, every space needs thorough cleaning, reaching all those hidden spaces.
                                 We are here to deep clean for you. Any property can be deep cleaned- house, office, restaurant etc.
                                 You can request deep cleaning of one or more rooms or the entire building. We make sure to:<br/>

                                 <ul className='list-disc pl-4'>
                                    <li>Move all furiture to clean all the hidden spaces</li>
                                    <li>Clean ceiling fans and dust the air conditioners</li>
                                    <li>Clean garbage bins</li>
                                    <li>Clean curtains and blinds</li>
                                    <li>Clean door frames </li>
                                 </ul>

                            </p>

                    </div>
 

                    <div className="sm:item-center sm:justify-center text-center ">

                            <h1 className='sm:tetx-2xl md:text-4xl font-bold '>Our Deep Clean Checklist</h1>
                    </div>

                    <div className=' grid  lg:grid-cols-3 lg:gap-1 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 pt-4 '>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={kitchen} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Kitchen
                                </p>
                            </h5>

                            <div className=' md:py-8 mb-3'>


                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean fridge, microwave and freezer
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Move and clean behind fridge, oven and freezer
                                    </p>
                                </div>
                            </div>



                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Scrub inside ovens, stovetop, stove grates and hood fan.
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the dishwasher, empty filter, clean drain and contrl panel
                                    </p>
                                </div>
                            </div>


                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean and organize pantry and cabinets 
                                    </p>
                                </div>
                            </div>


                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean all utensil holders
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean counter tops and sink scrubbing the taps
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <TbCooker class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Mop the floor and empty bin
                                    </p>
                                </div>
                            </div>

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={bathroom} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2 ">
                                <p className='text-center'>
                                Bathroom
                                </p>
                            </h5>

                            <div className=' md:py-12'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean mirror with glass cleaner
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean toothbrush holder
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean bathtub/shower and faucet
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean toilet interior, base and tank
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Scrub the bathroom walls
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wash rugs and shower curtain
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <FaToilet class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Remove all moulds
                                    </p>
                                </div>
                            </div>

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={bedroom} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Bedrooms
                                </p>
                            </h5>

                            <div className=' md:py-16'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaBed class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wash all the bedding and pillow covers
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaBed class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Flip and or rotate the mattress
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaBed class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean under the bed
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaBed class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Dust and clean out drawers, closets, tables and dressers
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaBed class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wash all the curtains, clean carpets and rugs
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaBed class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                   Remove cobwebs and clean the floor
                                    </p>
                                </div>
                            </div>

                            

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={living} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Living room
                                </p>
                            </h5>

                            <div className=' md:py-16'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GrLounge class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Dust all electronic appliances and stands
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GrLounge class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wipe and disinfect all remotes
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GrLounge class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wash cushion covers, and throw blankets and vacuum couch
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GrLounge class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Wash carpets and rugs
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaBed class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the floor
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <FaBed class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                   Remove cobwebs and clean the floor
                                    </p>
                                </div>
                            </div>

                            

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={office} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Office
                                </p>
                            </h5>

                            <div className=' md:py-16'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Dust all electronic appliances and stands
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean all surfaces/surfaces
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                   Vaccum all chairs and couches
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Disinfect touch-points (light switches, phones,handles)
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Move all the desks and chairs to clean the space
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                   Remove cobwebs and clean the floor
                                    </p>
                                </div>
                            </div>

                            

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={out} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Outside
                                </p>
                            </h5>

                            <div className=' md:py-16'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiFlowerPot class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Dust and clean all chairs and tables
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiFlowerPot class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Move all furniture and flower pots and clean the space
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiFlowerPot class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                   Pressure wash all hard surfaces
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiFlowerPot class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Sweep and remove leaves around the place
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

export default Deep