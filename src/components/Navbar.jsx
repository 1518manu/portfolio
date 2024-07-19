import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'technologies' },
    { id: 4, link: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md md:shadow-lg bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold font-signature text-white">
              M
            </a>
          </div>

          <ul className="hidden md:flex items-center space-x-5">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="cursor-pointer capitalize font-medium text-white   hover:text-red-500  transition duration-75"
                  onClick={() => setNav(false)}
                >
                  {link}
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
        <div className="md:hidden fixed top-20 left-0 right-0 bottom-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <ul className="flex flex-col justify-center items-center h-full">
            {links.map(({ id, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="cursor-pointer capitalize font-medium text-white hover:text-violet-600 transition duration-75"
                  onClick={() => setNav(false)}
                >
                  {link}
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
