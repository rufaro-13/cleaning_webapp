import React from 'react'
import Hero from '../components/Hero'
import { IconContext } from "react-icons";

import kitchen from '../images/kitchen-table.png'
import window from '../images/window-cleaning.png'
import shift from '../images/shift.png'
import clipboard from '../images/clipboard.png'
import bath from '../images/bath.png'
import carpet from '../images/carpet.png'

function Home() {
  return (
    <div>
      <Hero/>
      <section className='pt-8'>

          <div className="sm:item-center sm:justify-center text-center ">

                  <h1 className='sm:tetx-2xl md:text-4xl font-bold '>Domestic Cleaning</h1>
          </div>

          <div className='grid lg:grid-cols-5 lg:gap-4 grid-cols-3 gap-2 px-2'>

            <div>
            
            <div class="w-fit mx-1 lg:mx-5  sm:items-center sm:justify-center bg-gray-200 lg:mx-5 mt-5 mb-5">
                       <img src={bath} alt='bathtub' class=" sm:items-center sm:justify-center mx-1 lg:mx-5 lg:mx-6 my-6"/>
                       <p className='text-1xl font-semibold text-center'>Bathroom cleaning</p>
                    </div>
                 
            </div>

            <div>
            
            <div class="w-fit mx-1 lg:mx-5  sm:items-center sm:justify-center bg-gray-200 lg:mx-5 mt-5 mb-5">
                       <img class=" sm:items-center sm:justify-center mx-1 lg:mx-5 lg:mx-6 my-6" src={kitchen} alt="kitchen"/>
                       <p className='text-1xl font-semibold text-center'>Kitchen cleaning</p>
                    </div>
                 
            </div>

          <div>
            
                    <div class="w-fit mx-1 lg:mx-5  sm:items-center sm:justify-center bg-gray-200 lg:mx-5 mt-5 mb-5">
                       <img src={carpet} alt='carpet' class="  sm:items-center sm:justify-center mx-1 lg:mx-5 lg:mx-6 my-6" />
                       <p className='text-1xl font-semibold text-center'>Carpet cleaning</p>
                    </div>
                  
            </div>

            <div>
            
                    <div class="w-fit  sm:items-center sm:justify-center bg-gray-200 mx-1 lg:mx-5 mt-5 mb-5">
                       <img class="sm:items-center sm:justify-center mx-1 lg:mx-6 my-6" src={window} alt="kitchen"/>
                       <p className='text-1xl font-semibold text-center'>Window cleaning</p>
                    </div>
                  
            </div>

            <div>
           
                    <div class="w-fit  sm:items-center sm:justify-center bg-gray-200 lg:mx-5 mx-1 mt-5 mb-5">
                       <img class="sm:items-center sm:justify-center lg:mx-6  mx-1 my-6" src={shift} alt="kitchen"/>
                       <p className='text-1xl font-semibold text-center'>End-of-tenance cleaning</p>
                    </div>
                  
            </div>

            <div>
           
                    <div class="w-fit  sm:items-center sm:justify-center bg-gray-200  mx-1 lg:mx-5 mt-5 mb-5">
                       <img src={clipboard} alt='clipboard' class="sm:items-center sm:justify-center mx-1 lg:mx-6 my-6" />
                       <p className='text-1xl font-semibold text-center'>Tailored cleaning</p>
                    </div>
                  
            </div>


          </div>

      </section>
      </div>
  )
}

export default Home