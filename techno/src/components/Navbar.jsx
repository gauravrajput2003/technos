import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 p-4 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white text-4xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300"
        >
          TechNova
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg">
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
      </div>
    </nav>
  );
};

export default Navbar;
