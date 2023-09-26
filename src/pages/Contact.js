import React from 'react'
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText, FaLocationDot,FaSquareWhatsapp, FaMobileScreenButton, FaPhone,FaInstagram } from 'react-icons/fa6';
import './insta.css'
//import  Map from '../components/Map'

function Contact() {

  
  return (
    <div>
        <section>
            <div class=" lg:px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="lg:px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-fuchsia-950 md:text-3xl lg:text-3xl">
                    Contacting Stain Masters Limited
                    </h4>
                </div> 

                <div class="sm:flex sm:items-center sm:justify-center lg:mx-8 mt-2 px-5">
                  <p class=" font-normal text-sm md:text-lg text-fuchsia-950">
                      To request more information, please give us a call or email us. We would love to speak to you regarding
                      our experienced support carers that can help you deliver excellent services to your business and clients.
                  
                  </p>
                  <br/>
            
                </div>

                <center>
                <div class="max-w-fit sm:82 rounded-lg  items-center sm:items-center sm:justify-center mx-4  lg:mx-8 mt-1">

                    <div class="max-w-fit  sm:82 rounded-lg   sm:items-center sm:justify-center py-4 lg:ml-48 mt-8">

                        <IconContext.Provider value={{ color: '#ff0000', size: '50px', padding:'5px 2px' }}>
                            <a href="mailto:info@veemuhealthcare.co.uk"><div class="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center  mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black text-2xl font-bold"><a href="mailto:info@veemuhealthcare.co.uk" className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                            info@veemuhealthcare.co.uk

                            </p>
                          </div>
                    </div>

                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:07427494551"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black  "><a href="tel:0795 419 2764" 
                            className="block py-2  underline text-black rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mobile: 07427494551</a></span></div>
                            
                            </p>
                          </div>

                          

                    </div>

                   <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: 'green', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:07463 372 8971"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaSquareWhatsapp class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          

                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black "><a href="tel:07463 372 8971" 
                            className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call Us</a></span></div>
                            Whatsapp: 07463 372 8971
                            </p>
                          </div>

                    </div> 

                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                         <a href="https://x.com/stainmastersltd?s=11&t=ksJmMFAEzPdupCkRpF5qIA" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black"  viewBox="0 0 512 512">
                          
                          <path fill-rule="evenodd" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" clip-rule="evenodd"/>
                        </svg>
                          <span class="sr-only">Twitter handle</span>
                        </a>

                          {/*< IconContext.Provider value={{ color: 'black', size: '50px', padding:'5px 2px' }}>
                            <a href="https://x.com/stainmastersltd?s=11&t=ksJmMFAEzPdupCkRpF5qIA"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaXTwitter class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider> */}
                          

                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black "><a href="https://x.com/stainmastersltd?s=11&t=ksJmMFAEzPdupCkRpF5qIA" 
                            className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Follow Us</a></span></div>
                            X: @StainMastersLtd
                            </p>
                          </div>

                    </div> 

                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: '#339933', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:0203 534 0955"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaPhone class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black "><a href="tel:02477981121" 
                            className="block py-2  underline text-black rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Landline:  0203 534 0955</a></span></div>
                          
                            </p>
                          </div>

                    </div>

                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color:'white', size: '50px', padding:'5px 2px' }}>
                            <a href="https://instagram.com/stainmasters_limited?igshid=NGVhN2U2NjQ0Yg=="><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaInstagram class="sm:items-center insta rounded sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          

                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black "><a href="https://instagram.com/stainmasters_limited?igshid=NGVhN2U2NjQ0Yg==" 
                            className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Follow Us</a></span></div>
                            instagram: @stainmasters_limited
                            </p>
                          </div>

                    </div>


                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: '#89cff0', size: '50px', padding:'5px 2px' }}>
                            <a href="https://www.google.com/maps/place/19+Albert+Square,+London+E15+1HJ,+UK/@51.6118925,0.0336148,11z"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaLocationDot class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                              <div>
                                <span class="text-black text-2xl font-bold">
                                  <a href="https://www.google.com/maps/place/19+Albert+Square,+London+E15+1HJ,+UK/@51.6118925,0.0336148,11z" 
                                      className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visit Us</a></span></div>
                                      StainMasters Limited<br/><br/>
                                      Leicester 
                                      Leicester
                                      <br/>
                            </p>
                          </div>

                    </div>
                </div>

                </center>

        
         
         <div>

         {/* <MapSection location={location} zoomLevel={17} /> */}
         </div>
            
          

            </div>
        </section>
    </div>
  )
}

export default Contact