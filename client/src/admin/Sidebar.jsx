import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Hamburger/Close Button */}
      <button
        className="absolute z-20 flex items-center justify-center w-12 h-12 bg-gray-800 rounded-md top-4 right-4 focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // Close Icon (FontAwesome Cross)
          <i className="text-2xl text-white fas fa-times"></i>
        ) : (
          // Hamburger Icon (FontAwesome Menu)
          <i className="text-2xl text-white fas fa-bars"></i>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-10 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <div className="p-6">
          {/* Welcome Admin Section with Animation */}
          <p className="mb-6 text-2xl font-bold text-gray-800 animate__animated animate__fadeInLeft animate__delay-1s">
            Welcome Admin
          </p>

          {/* Sidebar Links */}
          <ul className="flex flex-col items-start space-y-6 text-sm uppercase md:text-base lg:text-lg">
            <li className="relative group">
              <Link
                to="/dashboard"
                className="relative text-gray-700 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-300"
              >
                Dashboard
              </Link>
              <span className="absolute left-[-1rem] w-[0.25rem] h-full bg-blue-500 transition-all duration-500 ease-in-out group-hover:left-[calc(100%+1rem)]"></span>
            </li>
            <li className="relative group">
              <Link
                to="/products"
                className="relative text-gray-700 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-300"
              >
                Products
              </Link>
              <span className="absolute left-[-1rem] w-[0.25rem] h-full bg-indigo-500 transition-all duration-500 ease-in-out group-hover:left-[calc(100%+1rem)]"></span>
            </li>
            <li className="relative group">
              <Link
                to="/orders"
                className="relative text-gray-700 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300"
              >
                Orders
              </Link>
              <span className="absolute left-[-1rem] w-[0.25rem] h-full bg-green-500 transition-all duration-500 ease-in-out group-hover:left-[calc(100%+1rem)]"></span>
            </li>
            <li className="relative group">
              <Link
                to="/categories"
                className="relative text-gray-700 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300"
              >
                Categories
              </Link>
              <span className="absolute left-[-1rem] w-[0.25rem] h-full bg-yellow-500 transition-all duration-500 ease-in-out group-hover:left-[calc(100%+1rem)]"></span>
            </li>
            <li className="relative group">
              <Link
                to="/customers"
                className="relative text-gray-700 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-300"
              >
                Customers
              </Link>
              <span className="absolute left-[-1rem] w-[0.25rem] h-full bg-red-500 transition-all duration-500 ease-in-out group-hover:left-[calc(100%+1rem)]"></span>
            </li>
            <li className="relative group">
              <Link
                to="/settings"
                className="relative text-gray-700 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-300"
              >
                Settings
              </Link>
              <span className="absolute left-[-1rem] w-[0.25rem] h-full bg-purple-500 transition-all duration-500 ease-in-out group-hover:left-[calc(100%+1rem)]"></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
