import React from 'react'
import { Link } from "react-router-dom";
import carpet from '../images/full-shot-man-servant-vacuuming-floor.jpg'
import tailored from '../images/still-life-cleaning-tools.jpg'
import office from '../images/full-shot-people-cleaning-office.jpg'
import deep from '../images/domestic-female-hand-wearing-gloves-cleaning-dirty-stove-after-cooking-using-sponge-washing-woman-housewife-enjoying-daily-household-closeup-top-view.jpg'
import kitchen from '../images/side-view-woman-cleaning-home.jpg'
import event from '../images/view-wedding-archway-front.jpg'
import window from '../images/medium-shot-man-cleaning-office-window.jpg'
import restaurant from '../images/cafe-owner-cleaning-tables-with-disinfectant-while-reopening-during-covid19-pandemic.jpg'
import bathroom from '../images/crop-blonde-woman-from-cleaning-company-wearing-yellow-protective-rubber-gloves-with-special-cleaning-sponge-cleaning-wall-tiled-surface-white-bathroom-housework-housekeeping-concept.jpg'
function Services() {
  return (
    <div>
      <section className='py-8'>

        <div>
        <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 flex sm:items-center sm:justify-center ">
                    <h4 class="mb-4 text-center text-1xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl">
                        Why you should choose us
                    </h4>

                    
                </div> 
        </div>

        <div className='lg:flex grid  lg:grid-cols-3 lg:gap-4 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-5 pt-4 '>

                      <div className="lg:px-8 px-4  col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={bathroom} alt="" />
                        <h5 className="md:text-2xl bg-slate-50 text-lg font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Bathroom cleaning
                            </p>
                        </h5>
                        <p className="font-normal bg-slate-50 text-sm md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            Thorough scrubbing and disinfecting of bathtubs, surfaces, toilets and 
                            many more 
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>

                      <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={carpet} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold bg-slate-50 tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Carpet cleaning
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg bg-slate-50 text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            Deep cleaning, stain removal using hot water extraction, dry-cleaning and vacuuming. 
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>

                      <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={kitchen} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold bg-slate-50 tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Kitchen cleaning
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg bg-slate-50 text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            We clean the cupboards, pantry, cooker, surfaces, fridge and many more. 
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>
        </div>

        <div className='lg:flex grid  lg:grid-cols-3 lg:gap-4 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 pt-8 px-2 md:px-5 '>

                      <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={window} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold bg-slate-50 tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Window cleaning
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg bg-slate-50 text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            We do exterior and interior cleaning of architectural glass(structural, lighting or decorative glass) 
                            etc 
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>

                      <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={restaurant} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold bg-slate-50 tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Restaurant cleaning
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg bg-slate-50 text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                           Cleaning and sanitization of tables, seats, counters, menus etc. We also launder all napkins tablescloths and aprons. 
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>

                      <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={tailored} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold bg-slate-50 tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Tailored cleaning
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg bg-slate-50 text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            We do exterior and interior cleaning of architectural glass(structural, lighting or decorative glass) 
                            etc 
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>

        </div>

        <div className='lg:flex grid  lg:grid-cols-3 lg:gap-4 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 pt-8 px-2 md:px-5 '>

                      <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={office} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold bg-slate-50 tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Office cleaning
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg bg-slate-50 text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            We clean and sanitize surfaces, doorknobs, handles, light switches etc and vacuuming.
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>

                      <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={deep} alt="" />
                        <h5 className="md:text-2xl text-lg font-bold bg-slate-50 tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            Deep cleaning
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg bg-slate-50 text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                           We get rid of dirt, grime and other gunk at home, offices and or restaurants. 
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>

                      <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={event} alt="" />
                        <h5 className="md:text-2xl text-lg bg-slate-50 font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                            <p className='text-center'>
                            After event cleaning
                            </p>
                        </h5>
                        <p className="font-normal text-sm bg-slate-50 md:text-lg text-gray-700 dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            Emtying bins, cleaning washrooms/toilets, event arena, seats and many more  
                            </p>

                            <center><Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center md:py-3 mt-4 mb-4 px-5 text-base font-medium text-sm md:text-lg text-center
                                text-blue rounded-full border border-green hover:bg-orange-300 focus:ring-4 focus:ring-green-400  bg-blue-300">
                                    Learn more
                                </Link></center>
                        </p>
                      </div>

        </div>

      </section>
    </div>
  )
}

export default Services