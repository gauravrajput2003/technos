import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 p-4 shadow-lg text-white dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-white text-4xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300"
        >
          TechNova
        </NavLink>

        <div className="flex items-center">
          <ul className={`md:flex space-x-6 text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md'
                    : 'text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md'
                    : 'text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl'
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md'
                    : 'text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode} className="ml-4 p-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 p-4 space-y-4">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md'
                  : 'text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl'
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md'
                  : 'text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl'
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md'
                  : 'text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl'
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded   dark: dark:text-black bg-blac">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;