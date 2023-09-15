'use client';
import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';

import { Label, Select ,TextInput} from 'flowbite-react';

function Quote() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rhm9mkn', 'template_e4odj9l', form.current, 'B3WumuIsN-gC4yyNA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section>
        <section class="bg-cover bg-center bg-no-repeat  bg-gray-400 bg-blend-multiply pt-12">
            
            <div class="px-4 mx-auto  w-full text-center py-24 lg:py-40">
            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-blue-300 md:text-5xl lg:text-6xl">Get a free quote</h1>
                <p class="mb-8 text-2xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
                
            </div>
        </section>

        <section className='mx-8 mt-8 '>
            <div class="bg-blue-400 px-2 md:px-5 rounded-lg">

                <form className=' pb-5' ref={form} onSubmit={sendEmail}>
                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto  md:gap-x-4 grid-col-1 px-2 md:px-5 pt-4'>
                        
                        <div className='lg:px-2 px-4  col-span-1  md:w-1/3 pb-5 sm:items-center sm:justify-center'>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your name"/>
                            </div>
                            <div>
                                <TextInput id="name"placeholder="John Smith"required type="text"name="user_name"/>
                            </div>
                        </div>
                        
                        <div className='lg:px-2 px-4  col-span-1  md:w-1/3 pb-5 sm:items-center sm:justify-center'>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email"/>
                            </div>
                            <div>
                                <TextInput id="email1"placeholder="name@example.com"required type="email"name="user_email"/>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto  md:gap-x-4 grid-col-1 px-2 md:px-5 pt-4'>
                    
                        
                        <div className='lg:px-2 px-4  col-span-1  md:w-1/2 pb-5 sm:items-center sm:justify-center' id="select">
                            <div className="mb-2 block">
                                <Label htmlFor="countries" value="Select a service" />
                            </div>
                            <Select id="service_choice"name='service'required>
                                <option>House Cleaning</option>
                                <option>End-of-tenance Cleaning</option>
                                <option>Restaurant Cleaning</option>
                                <option>After event Cleaning</option>
                                <option>Office Cleaning</option>
                                <option>Tailored Cleaning</option>
                                <option>Window Cleaning</option>
                                <option>Other</option>
                                
                            </Select>
                        </div>

                        <div className='lg:px-2 px-4  col-span-1  md:w-1/2 pb-5 sm:items-center sm:justify-center' id="select">
                            <div className="mb-2 block">
                                <Label htmlFor="levels" value="Select the level of service" />
                            </div>
                            <Select id="cleaning_level"name='level' required>
                                <option>Basic (includes floors,counter tops and primary fixtures such as toilets,showers and sinks )</option>
                                <option>Extra Basic (in addition all visible surfaces including walls, doors and windows) </option>
                                <option>Deep Cleaning (absolutely everything including moving furniture to clean under and behind)</option>
                                
                                
                            </Select>
                        </div>

                        <div className='lg:px-2 px-4  col-span-1  md:w-1/2 pb-5 sm:items-center sm:justify-center' id="select">
                            <div className="mb-2 block">
                                <Label htmlFor="frequency" value="Select the frequency" />
                            </div>
                            <Select id="frequency"name='frequency' required>
                                <option>Daily </option>
                                <option>Weekly </option>
                                <option>Bi-weekly</option>
                                <option>Fortnight</option>
                                <option>Monthly</option>
                                <option>One time</option>
                                <option>Other</option>
                                
                                
                            </Select>
                        </div>
                    </div>

                    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-1 m-auto  md:gap-x-4 grid-col-1 px-2 md:px-5 pt-4'>
                    
                        
                        <div className='lg:px-2 px-4  col-span-1  md:w-1/3 pb-5 sm:items-center sm:justify-center' id="select">
                            <div className="mb-2 block">
                                <Label htmlFor="countries" value="The number of rooms" />
                            </div>
                            <Select id="rooms"name='rooms'required>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>+5</option>
                               
                                
                            </Select>
                        </div>

                        <div className='lg:px-2 px-4  col-span-1  md:w-1/3 pb-5 sm:items-center sm:justify-center' id="select">
                            <div className="mb-2 block">
                                <Label htmlFor="area" value="Approximate area" />
                            </div>
                            <Select id="area"name='area'required>
                                <option>Less than 100 square metres</option>
                                <option>200 square metres </option>
                                <option>300 square metres</option>
                                <option>400 square metres</option>
                                <option>500 square metres</option>
                                <option>More than 500 square metres</option>
                            </Select>
                        </div>

                        
                    </div>

                    <center>

                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Messsage <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <textarea id="message" name="message"rows="5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-1/2 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></center>
                </form>    
            </div>
        </section>
    </section>
  )
}

export default Quote