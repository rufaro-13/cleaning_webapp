import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-1/2 max-w-[100%] mx-auto">

        {/* item 1 */}
      <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:text-white focus:bg-blue-800"
          onClick={() => toggleAccordion(0)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">It is Healthy</span>
            <span className="transform transition-transform">
              {activeIndex === 0 ? (
                <svg
                  className="w-6 h-6"fill="none"stroke="currentColor"viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"strokeLinejoin="round"strokeWidth={2}d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"fill="none"stroke="currentColor"viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              )}
            </span>
          </div>
        </button>
        {activeIndex === 0 && (
          <div className="p-4">
           
            <p>
                Carpets trap dust, dirt and allergens. If not cleaned, the air  in the room gets polluted leading 
                respiratory problems and sinus problems. Deep cleaning of these carpets will prevent these problems.
            </p>
            
          </div>
        )}
      </div>

        {/* item 2 */}
        <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:text-white focus:bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => toggleAccordion(1)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Keeps infestations under control</span>
            <span className="transform transition-transform">
              {activeIndex === 1 ? (
                <svg
                  className="w-6 h-6"fill="none"stroke="currentColor"viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"strokeLinejoin="round"strokeWidth={2}d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"fill="none"stroke="currentColor"viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              )}
            </span>
          </div>
        </button>
        {activeIndex === 1 && (
          <div className="p-4">
           
            <p>
               Dust mites are common in carpets and they can be taken care of by deep cleaning carpets .
            </p>
            
          </div>
        )}
        </div>

        {/* item 3 */}
        <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:text-white focus:bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => toggleAccordion(2)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Maintain its look</span>
            <span className="transform transition-transform">
              {activeIndex === 2 ? (
                <svg
                  className="w-6 h-6"fill="none"stroke="currentColor"viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"strokeLinejoin="round"strokeWidth={2}d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"fill="none"stroke="currentColor"viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              )}
            </span>
          </div>
        </button>
        {activeIndex === 2 && (
          <div className="p-4">
           
            <p>
               Your carpet will give good first impressions if it is clean and looks new. Cleaning your carpet reduces
               foot traffic lanes, removes stains and bacteria. 

            </p>
            
          </div>
        )}
        </div>

    </div>
  );
};

const CleanReasons = () => {
  return (
    
      <Accordion />
  );
};

export default CleanReasons;
