import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';



const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
    

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    

  emailjs.sendForm('service_4lx3w2k', 'template_e4odj9l', form.current, 'aoraZOJwYGEv9aeS6')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};
  return (
    <div className="pt-6 w-full max-w-[100%] mx-auto">

        {/* item 1 */}
      <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(0)}
        >
          <div className=" flex justify-between items-center">
            <span className="text-lg font-medium">Are you looking for a job? StainMasters is actively recruiting, click here to get your next job. </span>
            <span className="transform transition-transform">
              {activeIndex === 0 ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </span>
          </div>
        </button>
        {activeIndex === 0 && (
          <div className="p-4">
            <div class="lg:px-0 px-2   pt-5 mt-1 w-fit md:w-1/2 sm:items-start sm:justify-start">
                  <form encType='multipart/form-data' method='post' class="  max-w-max " ref={form} onSubmit={sendEmail}>
                
                    <div class="mb-6 ">
                        <label for="name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text" name="user_name" id="name" size="60" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name  surname" required/>
                    </div>
                          
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input  type="email"name="user_email" id="email"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: name@email.com" required/>
                    </div>

                    <div class="mb-6">
                        <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Telephone <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="tel"name="user_telephone" id="telephone"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: 0798 125 4567" required/>
                    </div> 

                    <div class="mb-6">
                        <label for="nationality" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nationality <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text"name="user_nationality" id="nationality"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div> 

                    <div class="mb-6">
                        <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Current Location <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text"name="user_location" id="location"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div> 

                    <div class="mb-6">
                        <label for="availability" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Availability <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text"name="user_availability" id="availability"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div> 
                    

                   {/*  <div class="mb-6">
                        <label for="cv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Attach your CV <span class="text-gray text-1xl italic font-normal">(Required)</span></label>
                        <input type='file'id="cv" name="user_cv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div> */}

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
        )}
      </div>


    </div>
  );
};


function Appliction() {
   

    
  return (
    <Accordion/>
  )
}

export default Appliction