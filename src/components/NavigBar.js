'use client';

import {  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/StainMasters_png.png'
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      
      className="bg-blue-300"
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-navcolour text-xl font-semibold dark:text-white">
          StainMasters
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-navcolour font-bold md:text-lg'>
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


