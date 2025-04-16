"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* Background image only when not scrolled and in light mode */}
      <div
        className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${isScroll || isDarkMode ? 'hidden' : ''
          }`}
      >
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>


      {/* Navbar with scroll effect */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll
            ? isDarkMode
              ? 'bg-[#11001F] bg-opacity-80 shadow-sm dark:shadow-white/20'
              : 'bg-[#ffffffee] backdrop-blur-md shadow-sm'
            : 'bg-transparent'
          }`}
      >
        <a href='#top'>
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=''
            className='w-28 cursor-pointer mr-14'
          />
        </a>

        {/* Navigation menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll
              ? isDarkMode
                ? 'bg-[#11001F] bg-opacity-90 shadow-sm dark:border-none'
                : ' bg-opacity-50 bg-transparent border-none'
              : isDarkMode
                ? 'bg-transparent border dark:border-white/50'
                : 'bg-transparent border border-gray-300'
            }`}
        >
          <li>
            <a className='font-Ovo' href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className='font-Ovo' href='#contact'>
              Contact me
            </a>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=''
              className='w-6'
            />
          </button>
          <a
  href='#contact'
  className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-Ovo ${
    isDarkMode
      ? 'dark:border-white/50' // Border color for dark mode
      : 'border-gray-500' // Border color for light mode
  }`}
>
  Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' />
</a>


          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode? assets.menu_white : assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#11001F] dark:text-white'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#contact'>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
