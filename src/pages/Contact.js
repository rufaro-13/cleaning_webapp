import React, { useRef} from 'react'
import { IconContext } from "react-icons";
import emailjs from '@emailjs/browser';
import { FaEnvelopeOpenText, FaLocationDot,FaSquareWhatsapp, FaMobileScreenButton, FaInstagram } from 'react-icons/fa6';
import './insta.css'
import { Label, Select } from 'flowbite-react';
import { HiMail } from 'react-icons/hi'
import { Helmet } from 'react-helmet-async';
import Appliction from '../components/Appliction'; 
//import  Map from '../components/Map'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4lx3w2k', 'template_c9ce2ou', form.current, 'aoraZOJwYGEv9aeS6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
  return (
    <div>
      <Helmet>
            <title>Contact </title>
            <meta name="description" content="Get in touch with us.
                        "/>
            <link rel="canonical" href="/contact" />
     </Helmet>
        <section>
            <div class=" lg:px-2 mx-auto max-w-screen-xl t pt-4">

                <div class="lg:px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-navcolour md:text-3xl lg:text-3xl">
                    Contacting Stain Masters Limited
                    </h4>
                </div> 

                <div class="sm:flex sm:items-center sm:justify-center lg:mx-8 mt-2 px-5">
                  <p class=" font-normal text-sm md:text-lg text-navcolour">
                      To request more information, please give us a call or email us. We would love to speak to you regarding
                      our experienced support cleaners that can help you deliver excellent services to your business and clients.
                      You can also enquire about our services. Simply leave your contact information using the form below and we will 
                      get back to you as soon as possible.
                  
                  </p>
                  <br/>
            
                </div>

                <div className='lg:flex'>
                  <div className='lg:w-3/5 '> 
                    <div class=" grid lg:grid-cols-2 lg:gap-12  md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-2 pt-4 items-center sm:items-center sm:justify-center mx-4  lg:mx-2 mt-1">

                      <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                          <IconContext.Provider value={{ color: '#ff0000', size: '50px', padding:'5px 2px' }}>
                              <a href="mailto:info@stainmasterslimited.com"><div class="  sm:items-center sm:justify-center  mx-2 mt-5 mb-5">
                              
                              <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                              </div></a>
                            </IconContext.Provider>
                            <div class="  sm:items-center sm:justify-center  mt-1">
                              <p class=" text-1xl font-normal">
                              <div><span class="text-black text-2xl font-bold"><a href="mailto:info@stainmasterslimited.co.uk" className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                              info@stainmasterslimited.com

                              </p>
                            </div>
                      </div>

                      <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                            <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                              <a href="tel:07427494551"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                                <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                              </div></a>
                            </IconContext.Provider>
                            <div class="  sm:items-center sm:justify-center   mt-1">
                              <p class=" text-1xl font-normal">
                              <div><span class="text-black text-black text-2xl font-bold "><a href="tel:07507913398" 
                              className="block py-2  underline text-black rounded hover:bg-gray-100 md:hover:bg-transparent 
                              md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                              dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call us</a></span></div>
                              Mobile: 07507913398
                              </p>
                            </div>

                            

                      </div>

                    <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-center sm:justify-center">

                            <IconContext.Provider value={{ color: 'green', size: '50px', padding:'5px 2px' }}>
                              <a href="tel:07463 372 8971"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                                <FaSquareWhatsapp class="sm:items-center sm:justify-center  my-6"/>
                              </div></a>
                            </IconContext.Provider>
                            

                            <div class="  sm:items-center sm:justify-center   mt-1">
                              <p class=" text-1xl font-normal">
                              <div><span class="text-black text-2xl font-bold"><a href="tel:" 
                              className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Message Us</a></span></div>
                              Whatsapp: 07507913398
                              </p>
                            </div>

                      </div> 
                  
                  
                      <div class="lg:px-1 px-4  col-span-1 max-w-md  md:w-1/2 sm:items-center sm:justify-center">

                          <a href="https://x.com/stainmastersltd?s=11&t=ksJmMFAEzPdupCkRpF5qIA" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="black"  viewBox="0 0 512 512">
                            
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
                              <div><span class="text-black text-2xl font-bold "><a href="https://x.com/stainmastersltd?s=11&t=ksJmMFAEzPdupCkRpF5qIA" 
                              className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Follow Us</a></span></div>
                              X: @StainMastersLtd
                              </p>
                            </div>

                      </div> 

                      <div class="lg:px-1 px-4  col-span-1 max-w-md  md:w-1/2 sm:items-center sm:justify-center">

                            <IconContext.Provider value={{ color:'white', size: '50px', padding:'5px 2px' }}>
                              <a href="https://instagram.com/stainmasters_limited?igshid=NGVhN2U2NjQ0Yg=="><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                                <FaInstagram class="sm:items-center insta rounded sm:justify-center  my-6"/>
                              </div></a>
                            </IconContext.Provider>
                            

                            <div class="  sm:items-center sm:justify-center   mt-1">
                              <p class=" text-1xl font-normal">
                              <div><span class="text-black text-2xl font-bold "><a href="https://instagram.com/stainmasters_limited?igshid=NGVhN2U2NjQ0Yg==" 
                              className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Follow Us</a></span></div>
                              instagram: @stainmasters_limited
                              </p>
                            </div>

                      </div>

                      <div class="lg:px-1 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">

                            <IconContext.Provider value={{ color: '#89cff0', size: '50px', padding:'5px 2px' }}>
                              <a href="https://www.google.com/maps/place/19+Albert+Square,+London+E15+1HJ,+UK/@51.6118925,0.0336148,11z"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                                <FaLocationDot class="sm:items-center sm:justify-center  my-6"/>
                              </div></a>
                            </IconContext.Provider>
                            <div class="  sm:items-center sm:justify-center   mt-1">
                              <p class=" text-1xl font-normal">
                                <div>
                                  <span class="text-black text-2xl font-bold">
                                    <a href="https://www.google.com/maps/place/52+Hinckley+Rd,+Leicester+LE3+0RB,+UK/@52.6312504,-1.1502901,17z" 
                                        className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visit Us</a></span></div>
                                        StainMasters Limited<br/>
                                        52 Hinckley Road, LE3 0RB<br/>
                                        Leicester
                                        <br/>
                              </p>
                            </div>

                      </div>

                      
                  
                    </div>
                  </div>
                
                  <div class=" lg:w-2/5 sm:w-screen">
                    <h1 className='font-bold md:text-2xl text-xl text-navcolour'>Enquiry Form</h1>
                  <div class="lg:px-0 px-2 pb-4  pt-5 mt-1 w-fit md:w-1/2 sm:items-start sm:justify-start">
                  <form class="  max-w-max " ref={form} onSubmit={sendEmail}>
                
                    <div class="mb-6 ">
                        <label for="name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text" name="user_name" id="name" size="60" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: John Smith" required/>
                    </div>
                          
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input icon={HiMail} type="email"name="user_email" id="email"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: name@email.com" required/>
                    </div>
                    <div class="mb-6">
                        <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Telephone <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="tel"name="user_telephone" id="telephone"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: 0798 125 4567" required/>
                    </div> 
                    <div class="mb-6 ml-0" id="select">
                        <label for="subject" class="ml-0 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Enquiry type <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <div className="mb-2 block">
                                <Label htmlFor="area"/*  value="Approximate area" */ />
                            </div>
                            <Select id="area"name='area'required>
                                <option>Having a weekly cleaner </option>
                                <option>Having a fortnightly cleaner </option>
                                <option>Having a once off clean</option>
                                <option>I am a regular client</option>
                                
                            </Select>
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Messsage <span class="text-gray text-1xl italic font-normal">(Optional)</span></label>
                        <textarea id="message" name="message"rows="5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" optional/>
                    </div>

                    {/* <div class="mb-6 sm:w-full lg:w-full md-w-full">
                        <p>
                        <span class=" text-1xl font-semibold">Terms & Conditions<span class="text-red text-1xl italic font-normal">(Required)</span><br/></span>
                        I agree to the Terms & Conditions and understand that stainmasterslimited.com has a legitimate interest to process the data that I have submitted.<Link
                        to="/terms_and_conditions"className=" underline text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        > See our Terms and Conditions and Privacy Policy </Link>for more information.
                        This site is protected by reCAPTCHA and the Google <a class="text-blue-700"href="https://policies.google.com/privacy">Privacy Policy </a>and <a class="text-blue-700" href="https://policies.google.com/terms">Terms of Service</a> apply.
                        
                        </p>
                    </div> */}
                        {/* <div class="max-w-full sm:82 rounded-lg sm:flex flex mx-6 mb-6">
                            <div class="ml-5 flex items-center h-5">
                            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:black">Yes I agree to the terms, conditions and privacy & cookie policy</label>
                        </div> */}
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    
            </form>
                  </div>
                  </div>
                </div>

                <div className='lg:flex'>
                  <div className='lg:w-2/5 '>

                  <div class="lg:px-1 mx-auto max-w-screen-xl text-center pt-6 ">
                        <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-navcolour md:text-3xl lg:text-3xl">
                        Opening Times
                        </h4>

                        <p>
                        Mon-Thurs 8am - 6pm<br/>
                        Friday    8am - 5pm<br/>
                        Sartuday  9am - 3pm<br/>
                        Sunday    9am - 3pm<br/>
                        </p>
                      </div>
                  </div>

                  <div className='lg:w-3/ pb-4 '>
                    <Appliction/>
                  </div>
                </div>
        
         
         <div>

         {/* <MapSection location={location} zoomLevel={17} /> */}
         </div>
       
            </div>
        </section>
    </div>
  )
}

export default Contact