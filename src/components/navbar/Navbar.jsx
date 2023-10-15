import React, { useEffect, useState } from 'react'
import ToggleButton from '../common/toggle/ToggleButton';
import { navLinks } from './navbarData';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Add a scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (width > 1024) {
      setMenuOpen(false)
    }
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);


  return (
    <>
      <nav
        className={`z-50 fixed top-0 w-full duration-300 md:transition-none ${
          scrolling ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto p-2 ">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://spacex-microsite.netlify.app/images/spacex-logo-big.png" // Replace with your SpaceX logo image URL
                alt="SpaceX Logo"
                className="h-6 w-30 cursor-pointer mr-3 sm:h-20"
              />
            </a>
            <div className="lg:hidden relative" >
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            {
              isMenuOpen && (
                <div className='bg-white opacity-75 p-4 w-60 shadow-lg absolute right-10 top-24 rounded-md'>

                  <ul
                    class="flex-col text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
                  >
                    {
                      navLinks.map((navlink) => (
                      <li class="p-2 text-lg cursor-pointer rounded text-black" key={navlink.id}>
                        <a href="#">{navlink.title}</a>
                      </li>

                      ))
                    }                   
                  </ul>
                  <ToggleButton/>
                </div>
              )
            }
            <ul
              class="hidden lg:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
            >
              {
                navLinks.map((navlink) => (
                <li class="hover:text-gray-500" key={navlink.id}>
                  <a href="#">{navlink.title}</a>
                </li>

                ))
              }    
            </ul>
            {
              width > 1024 
              ? <ToggleButton/>
              : null
              
            }
            
          </div>
        </div>
      </nav>
      
      </>
  );
}

export default Navbar