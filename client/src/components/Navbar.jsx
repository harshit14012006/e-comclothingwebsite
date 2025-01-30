import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faHeart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Top Section: Logo, Search, and Icons */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <span
              className="text-3xl font-bold text-blue-800 tracking-wider hover:text-blue-600 transition duration-300 transform hover:scale-105"
              style={{ fontFamily: '"Italian Plate No2 Expanded", sans-serif' }}
            >
              <i>TRENDY APPAREL</i>
            </span>
          </Link>
        </div>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex flex-grow mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-800 transition duration-200"
            />
            <span className="absolute left-3 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l5.387 5.386-1.414 1.415-5.387-5.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-600">
          <Link
            to="#"
            className="hover:text-blue-800 transition duration-200 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
          </Link>
          <Link
            to="#"
            className="hover:text-blue-800 transition duration-200 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faHeart} className="h-6 w-6" />
          </Link>
          <Link
            to="#"
            className="hover:text-blue-800 transition duration-200 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
          </Link>
          {/* Hamburger Menu Icon (Visible on Small Screens) */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none hover:text-blue-800"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Bottom Section: Navigation Links */}
      <div
        className={`navbar border-t border-gray-200 bg-gray-50 transition-transform duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="links flex flex-wrap justify-center gap-6 text-gray-700 font-medium text-base">
            <Link
              to="/t-shirts"
              className="relative group transition duration-200 hover:text-blue-800"
            >
              T-Shirts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/shirts"
              className="relative group transition duration-200 hover:text-blue-800"
            >
              Shirts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/hoodies"
              className="relative group transition duration-200 hover:text-blue-800"
            >
              Hoodies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/sweaters"
              className="relative group transition duration-200 hover:text-blue-800"
            >
              Sweaters
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/jackets"
              className="relative group transition duration-200 hover:text-blue-800"
            >
              Jackets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/blazers"
              className="relative group text-red-500 hover:text-red-700 transition duration-200"
            >
              Blazers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;