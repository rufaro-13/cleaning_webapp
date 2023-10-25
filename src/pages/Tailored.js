'use client';
import React from 'react'
import { Helmet} from 'react-helmet-async';


function Tailored() {
  return (
    <div>
      <Helmet>
            <title>Tailored cleaning </title>
            <meta name="description" content="Check our Tailored Cleaning Checklist.
                        "/>
            <link rel="canonical" href="/tailored_cleaning" />
     </Helmet>
        <section class="bg-cover bg-center bg-no-repeat bg-tailored bg-gray-400 bg-blend-multiply pt-96">
            
            <div class="px-4 mx-auto  w-full text-center py-24 lg:py-28">
            
                <h1 class="mb-4 text-4xl font-extrabold font-cursive tracking-tight leading-none text-navcolour md:text-5xl lg:text-6xl">Tailored Cleaning</h1>
                <p class="mb-8 text-2xl font-bold text-navcoloura lg:text-xl sm:px-16 lg:px-48"> We tailor the cleaning to suit our service users' needs be it at home, restaurant or office. 
                    They can choose whether they want us to clean using all-natural products or chemical products or both.
                    Service users  can choose the time that they want us to clean-morning, during the day or in the evening. We are flexible. 
</p>
                
            </div>
        </section>


    </div>
  )
}

export default Tailored