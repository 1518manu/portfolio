import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'tech', name: 'Tech & Projects' }, 
    { id: 4, link: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md md:shadow-lg bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold font-signature ">
              M
            </a>
          </div>

          <ul className="hidden md:flex items-center space-x-5">
            {links.map(({ id, link, name }) => (
              <li key={id}>
                <Link
                  to={link} 
                  smooth
                  duration={500}
                  className="cursor-pointer capitalize font-medium hover:text-red-500 transition-transform duration-75 hover:scale-105"
                  onClick={() => setNav(false)}
                >
                  {name || link} 
                </Link>
              </li>
            ))}
          </ul>

          <div className="pr-4 md:hidden">
            <button onClick={() => setNav(!nav)}>
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>

      {nav && (
        <div className="fixed top-16 right-0 bg-gradient-to-b from-black to-gray-800 text-gray-500 p-6 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setNav(false)}
              className="text-white text-2xl"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-start space-y-4">
            {links.map(({ id, link, name }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="cursor-pointer capitalize font-medium text-white hover:text-violet-600 transition duration-200"
                  onClick={() => setNav(false)}
                >
                  {name || link} 
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
