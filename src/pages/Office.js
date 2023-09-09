import React from 'react'
import { IconContext } from "react-icons";
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {GiOfficeChair,GiVendingMachine}from 'react-icons/gi'
import office from '../images/abstract-office-desktop.jpg'
import corridor from '../images/blurred-abstract-background-interior-view-looking-out-toward-empty-office-lobby-entrance-doors-glass-curtain-wall-with-frame.jpg'
import vending from '../images/Vending machines and snacks set.jpg'
import { Link } from "react-router-dom";
function Office() {
  return (
    <div>
        <section class="bg-cover bg-center bg-no-repeat bg-office bg-gray-400 bg-blend-multiply pt-12">
            
            <div class="px-4 mx-auto  w-full text-center py-24 lg:py-40">
            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-blue-300 md:text-5xl lg:text-6xl">
                    Office Cleaning
                </h1>
                <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
                
            </div>
        </section>

        <section class='pt-12'>
            <div className='lg:flex'>
                <div className='lg:w-full'> 

                    <div className="sm:item-center sm:justify-center text-center ">

                            <h1 className='sm:tetx-2xl md:text-4xl font-bold '>Our Office Checklist</h1>
                    </div>

                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 pt-4 '>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={office} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Offices/Conference Room
                                </p>
                            </h5>

                            <div className='bg-slate-50 md:py-8 '>


                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the desks and chairs
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Dust all the computer accesories and phone
                                    </p>
                                </div>
                            </div>



                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the carpets,doors and light switches
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Remove alll the cobwebs
                                    </p>
                                </div>
                            </div>


                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the windows
                                    </p>
                                </div>
                            </div>


                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiOfficeChair class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
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

                            <img class="rounded-t-lg" src={vending} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2 ">
                                <p className='text-center'>
                                Vending Machines
                                </p>
                            </h5>

                            <div className='bg-slate-50 md:py-12'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <GiVendingMachine class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Remove dust and stains from inside and outside the vending machine
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiVendingMachine class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the handles and buttons of the machine
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiVendingMachine class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the environment around the machines
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1  ">
                                        <GiVendingMachine class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Empty the bins
                                    </p>
                                </div>
                            </div>

                            
                            </div>
                         
                        </div>

                        <div className='lg:px-2 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center" '>

                            <img class="rounded-t-lg" src={corridor} alt="" />
                            <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                                <p className='text-center'>
                                Hallway/Windows
                                </p>
                            </h5>

                            <div className='bg-slate-50 md:py-16'>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-0 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <HiOutlineBuildingOffice2 class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Sweep and scrub the floor and remove cobwebs
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <HiOutlineBuildingOffice2 class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean the rails
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                            <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <HiOutlineBuildingOffice2 class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Clean all the windows
                                    </p>
                                </div>
                            </div>

                            <div class="w-fit mx-1 flex  sm:items-center sm:justify-center   mt-1 mb-1">
                                <IconContext.Provider value={{ color: 'navcolour', size: '20px', padding:'1px 2px' }}>
                                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-1 ">
                                        <HiOutlineBuildingOffice2 class="sm:items-center sm:justify-center  mx-3 md:mx-1 my-1"/>
                                    </div>
                                </IconContext.Provider>

                                <div>
                                    <p className='text-base font-semibold'>
                                    Mop and dry the floor 
                                    </p>
                                </div>
                            </div>

                            

                            
                            </div>
                         
                        </div>

                        

                    </div>

                    
                    <div className="sm:item-center sm:justify-center text-center ">
                        <h3 className='sm:text-2xl md:text-3xl font-bold '>Some of the things on the checklist </h3>
                        <br/><br/>

                        <p>
                            <Link to="/kitchen" className='hover:underline hover:text-blue'>Office Kitchen Cleaning</Link><br/><br/>
                            <Link to="/bathroom" className='hover:underline hover:text-blue'>Office Bathroom Cleaning</Link>

                        </p>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Office