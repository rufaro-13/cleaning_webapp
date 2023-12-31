'use client';

import {Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/StainMasters_png.png'
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      
      className="bg-blue-300"
    >
      <Link to='/'>
        <Navbar.Brand >
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-10 sm:h-16"
            src={logo}
          />
          <span className="self-center whitespace-nowrap text-navcolour text-xl font-semibold dark:text-white">
            StainMasters
          </span>
        </Navbar.Brand>
      </Link>
      <div className="flex  md:order-2">
        
        <Navbar.Toggle />
       {/*  <Link to='/quote'>
        <Button>
          Get Quote
        </Button>
        </Link> */}
        
      </div>
      <Navbar.Collapse className=" ml-2 ">
        <Link
          active
          to="/"
        >
          <p className='ml-2 text-navcolour font-bold md:text-lg'>
            Home
          </p>
        </Link>
        <Link to="/about" className='text-navcolour font-bold md:text-lg'>
          About
        </Link>
        <Link to="/services" className='text-navcolour font-bold md:text-lg'>
          Services
        </Link>
        
        <Link to="/contact" className='text-navcolour font-bold md:text-lg'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


