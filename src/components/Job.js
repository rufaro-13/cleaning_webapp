import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

import  { Component } from "react";
const PATH = 'http://localhost/api/index.php';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      location: "",
      availability: "",
      nationality: "",
      telephone: "",
      cv: "",
      sent: false,
      error: null
    };
  }
  FormSubmittionHandler(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          sent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }
  render() {
     
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
    /* const [setResult] = useState('') */

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
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
            <span className="text-lg font-medium">For job application, please click the drop down button. </span>
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
                  <form encType='multipart/form-data' method='post' class="  max-w-max " >
                
                    <div class="mb-6 ">
                        <label for="name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text" name="user_name" id="name" size="60" class="shadow-sm bg-gray-50 border border-gray-300 
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 
                        px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
                        dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name  surname" required
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}/>
                    </div>
                          
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input  type="email"name="user_email" id="email"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: name@email.com" required
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}/>
                    </div>

                    <div class="mb-6">
                        <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Telephone <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="tel"name="user_telephone" id="telephone"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: 0798 125 4567" required
                        value={this.state.telephone}
                        onChange={(e) => this.setState({ telephone: e.target.value })}/>
                    </div> 

                    <div class="mb-6">
                        <label for="nationality" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nationality <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text"name="user_nationality" id="nationality"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required
                        value={this.state.nationality}
                        onChange={(e) => this.setState({ nationality: e.target.value })}/>
                    </div> 

                    <div class="mb-6">
                        <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Current Location <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text"name="user_location" id="location"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required
                        value={this.state.location}
                        onChange={(e) => this.setState({ location: e.target.value })}/>
                    </div> 

                    <div class="mb-6">
                        <label for="availability" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Availability <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text"name="user_availability" id="availability"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required
                        value={this.state.availability}
                        onChange={(e) => this.setState({ availability: e.target.value })}/>
                    </div> 
                    

                    <div class="mb-6">
                        <label for="cv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Attach your CV <span class="text-gray text-1xl italic font-normal">(Required)</span></label>
                        <input type='file'id="cv" name="user_cv" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required
                        value={this.state.cv}
                        onChange={(e) => this.setState({ cv: e.target.value })}/>
                    </div>

                    
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={e => this.FormSubmittionHandler(e)} >Submit</button>
                    
            </form>
                  </div>
          </div>
        )}
      </div>


    </div>
  );
};

return(
function Job() {
   

    
  return (
    <Accordion/>
  )
})
}

}
