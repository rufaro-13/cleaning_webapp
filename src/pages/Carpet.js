import React from 'react'
import CleanReasons from './CleanReasons'
function Carpet() {
  return (
    <div>
        <section class="bg-cover bg-center bg-no-repeat bg-carpet bg-gray-400 bg-blend-multiply pt-44">
            
            <div class="px-4 mx-auto  w-full text-center py-24 lg:py-40">
            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-blue-300 md:text-5xl lg:text-6xl">Carpet Cleaning</h1>
                <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
                
            </div>
        </section>

        <section class='pt-12'>
            <div className='lg:flex'>
                <div className='lg:w-full'> 

                    {/* <div className="sm:item-center sm:justify-center text-center ">

                            
                    </div> */}

                    <div className='flex px-2 md:px-8  pt-5 col-span-1 lg:w-full  sm:items-start sm:justify-center ' >

                            <p className='bg-blue-300 px-8 py-5'>
                                The Stain Masters Limited team cleans carpets ensuring the satisfaction of its services
                                users. We use industrial machines to remove all the stains from carpets, sanitize it and dry it quicker 
                                than with the regular machines.
                            </p>

                    </div>




                    <div className='flex px-2 md:px-8  pt-5 col-span-1 lg:w-full  sm:items-start sm:justify-center  '>
                        <h1 className='sm:tetx-2xl md:text-3xl font-bold '>Why should you clean your carpet? </h1>
                    </div>
                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 lg:px-10 pt-4 '>
                    
                        <CleanReasons/>
    
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Carpet