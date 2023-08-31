import React from 'react'
import Hero from '../components/Hero'
import office from '../images/office.png'
import kitchen from '../images/kitchen-table.png'
import window from '../images/window-cleaning.png'
import shift from '../images/shift.png'
import clipboard from '../images/clipboard.png'
import bath from '../images/bath.png'
import carpet from '../images/carpet.png'
import cleaning from '../images/cleaning.png'
import restuarant from '../images/kitchen.png'
import homecare from '../images/nursing-home (1).png'
import events from '../images/red-carpet.png'
import house from '../images/house.png'
import vids from '../images/_import_626cc5fae1ddf9.60125609_FPpreview.mp4'
import img1 from '../images/hands-holding-cleaning-tools-solutions.jpg'

function Home() {
  return (
    <div>
      <Hero/>
      <section className='pt-8'>
        <div>
          <div className='lg:flex'>
       <div className='lg:w-1/2'> 

          <div className="sm:item-center sm:justify-center text-center ">

                  <h1 className='sm:tetx-2xl md:text-4xl font-bold '>Domestic Cleaning</h1>
          </div>
          

          
          <div className='grid lg:grid-cols-4 lg:gap-1 grid-cols-3 gap-2 px-2'>

            <div>
            
            <div class="w-fit mx-1   sm:items-center sm:justify-center   mt-5 mb-5">
                       <img src={house} alt='bathtub' class=" sm:items-center sm:justify-center mx-1  my-6"/>
                       <p className='text-1xl font-semibold text-center'>House cleaning</p>
                    </div>
                 
            </div>

            <div>
            
            <div class="w-fit mx-1   sm:items-center sm:justify-center   mt-5 mb-5">
                       <img src={bath} alt='bathtub' class=" sm:items-center sm:justify-center mx-1  my-6"/>
                       <p className='text-1xl font-semibold text-center'>Bathroom cleaning</p>
                    </div>
                 
            </div>

            <div>
            
            <div class="w-fit mx-1   sm:items-center sm:justify-center   mt-5 mb-5">
                       <img class=" sm:items-center sm:justify-center mx-1  my-6" src={kitchen} alt="kitchen"/>
                       <p className='text-1xl font-semibold text-center'>Kitchen cleaning</p>
                    </div>
                 
            </div>

          <div>
            
                    <div class="w-fit mx-1   sm:items-center sm:justify-center   mt-5 mb-5">
                       <img src={carpet} alt='carpet' class="  sm:items-center sm:justify-center mx-1  my-6" />
                       <p className='text-1xl font-semibold text-center'>Carpet cleaning</p>
                    </div>
                  
            </div>

            <div>
            
                    <div class="w-fit  sm:items-center sm:justify-center  mx-1  mt-5 mb-5">
                       <img class="sm:items-center sm:justify-center mx-1  my-6" src={window} alt="kitchen"/>
                       <p className='text-1xl font-semibold text-center'>Window cleaning</p>
                    </div>
                  
            </div>

            <div>
           
                    <div class="w-fit  sm:items-center sm:justify-center   mx-1 mt-5 mb-5">
                       <img class="sm:items-center sm:justify-center  mx-1 my-6" src={shift} alt="kitchen"/>
                       <p className='text-1xl font-semibold text-center'>End-of-tenance cleaning</p>
                    </div>
                  
            </div>

            <div>
           
                    <div class="w-fit  sm:items-center sm:justify-center   mx-1  mt-5 mb-5">
                       <img src={clipboard} alt='clipboard' class="sm:items-center sm:justify-center mx-1  my-6" />
                       <p className='text-1xl font-semibold text-center'>Tailored cleaning</p>
                    </div>
                  
            </div>

            </div>
</div>
            <div className='lg:w-1/2 sm:w-screen'>
              <div>
              <div class="view">
                        {/* <video Source> */}
                        <center>
                        <video  class="video-fluid mx-2  mt-3" controls autoplay loop muted  >
                            <source src={vids} type="video/mp4" />
                        </video></center>
                        <div class="mask rgba-indigo-light"></div>
                    </div>

              </div>  
            </div> 
          </div>

          <div className='lg:flex'>
          <div className='lg:w-1/2 mr-3 sm:w-screen'>
            <img src={img1} alt='bathtub' class=" sm:items-center sm:justify-center mx-3  my-6"/>
          </div>
          <div className='lg:w-1/2'>
          <div className="sm:item-center sm:justify-center text-center ">

            <h1 className='sm:tetx-2xl md:text-4xl font-bold pt-4'>Commercial Cleaning</h1>
          </div>

          <div className='grid lg:grid-cols-4 lg:gap-2 grid-cols-3 gap-2 px-2'>


          <div>

          <div class="w-fit  sm:items-center sm:justify-center   mx-1  mt-5 mb-5">
              <img src={office} alt='bathtub' class=" sm:items-center sm:justify-center mx-1  my-6"/>
              <p className='text-1xl font-semibold text-center'>Office cleaning</p>
            </div>

          </div>

          <div>

          <div class="w-fit  sm:items-center sm:justify-center   mx-1  mt-5 mb-5">
              <img src={events} alt='bathtub' class=" sm:items-center sm:justify-center mx-1  my-6"/>
              <p className='text-1xl font-semibold text-center'>Events cleaning</p>
            </div>

          </div>

          <div>

          <div class="w-fit  sm:items-center sm:justify-center  mx-1  mt-5 mb-5">
              <img class=" sm:items-center sm:justify-center mx-1  my-6" src={restuarant} alt="kitchen"/>
              <p className='text-1xl font-semibold text-center'>Restaurant cleaning</p>
            </div>

          </div>

          <div>

            <div class="w-fit  sm:items-center sm:justify-center   mx-1  mt-5 mb-5">
              <img src={homecare} alt='carpet' class="  sm:items-center sm:justify-center mx-1  my-6" />
              <p className='text-1xl font-semibold text-center'>HealthCare-services cleaning</p>
            </div>

          </div>

          <div>

            <div class="w-fit  sm:items-center sm:justify-center   mx-1  mt-5 mb-5">
              <img src={cleaning} alt='carpet' class="  sm:items-center sm:justify-center mx-1  my-6" />
              <p className='text-1xl font-semibold text-center'>Deep cleaning</p>
            </div>

          </div>

          <div>

            <div class="w-fit  sm:items-center sm:justify-center  mx-1  mt-5 mb-5">
              <img class="sm:items-center sm:justify-center mx-1  my-6" src={window} alt="kitchen"/>
              <p className='text-1xl font-semibold text-center'>Window cleaning</p>
            </div>

          </div>

          <div>

            <div class="w-fit  sm:items-center sm:justify-center   mx-1  mt-5 mb-5">
              <img class="sm:items-center sm:justify-center   mx-1 my-6" src={shift} alt="kitchen"/>
              <p className='text-1xl font-semibold text-center'>End-of-tenance cleaning</p>
            </div>

          </div>

          <div>

            <div class="w-fit  sm:items-center sm:justify-center  mx-1  mt-5 mb-5">
              <img src={clipboard} alt='clipboard' class="sm:items-center sm:justify-center mx-1  my-6" />
              <p className='text-1xl font-semibold text-center'>Tailored cleaning</p>
            </div>

          </div>


          </div>
          </div></div>
        </div>
      </section>

      <section className='pt-8'>

        <div>
          <div className="sm:item-center sm:justify-center text-center ">

            
          </div>
        </div>

      </section>
      </div>
  )
}

export default Home