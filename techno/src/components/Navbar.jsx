import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../assets/Constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 p-4 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white text-4xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300"
        >
          <img
            src={LOGO_URL}
            alt="logo"
            className="h-20 w-auto p-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md"
                  : "text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl"
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
                  ? "text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md"
                  : "text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl"
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
                  ? "text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md"
                  : "text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 p-4 transition-transform duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md"
                  : "text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl"
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
                  ? "text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md"
                  : "text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl"
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
                  ? "text-white font-semibold bg-purple-800 px-4 py-2 rounded-lg shadow-md"
                  : "text-white hover:text-yellow-300 px-4 py-2 rounded-lg transition duration-300 font-bold text-2xl"
              }
              onClick={toggleMenu}
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