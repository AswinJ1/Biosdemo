import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

 

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };
  

  return (
    <nav className={`bg-white text-black dark:bg-black dark:text-white`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            alt="Team bi0s"
            src="/dark-logo.png"
            width="106"
            height="37"
            style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
            className="transition-filter duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <motion.div  className="hover:bg-gray-100 p-1 rounded-md dark:hover:bg-gray-900"><motion.li className=" font-sans font-light cursor-pointer transition-colors duration-300 dark:text-white dark:">Home</motion.li></motion.div>
          <motion.div className="hover:bg-gray-100 p-1 rounded-md dark:hover:bg-gray-900"><motion.li className=" font-sans font-light cursor-pointer transition-colors duration-300  dark:text-white ">About</motion.li></motion.div>
          <motion.div className="hover:bg-gray-100 p-1 rounded-md dark:hover:bg-gray-900"><motion.li className=" font-sans font-light cursor-pointer transition-colors duration-300  dark:text-white">Members</motion.li></motion.div>
          <motion.div className="hover:bg-gray-100 p-1 rounded-md dark:hover:bg-gray-900"><motion.li className=" font-sans font-light cursor-pointer transition-colors duration-300  dark:text-white">Achievements</motion.li></motion.div>
          <motion.div className="hover:bg-gray-100 p-1 rounded-md dark:hover:bg-gray-900"><motion.li className="  font-sans font-light cursor-pointer transition-colors duration-300  dark:text-white">Blog</motion.li></motion.div>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden md:block p-2 bg-white dark:bg-black focus:outline-none"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <i className="ri-sun-line text-white"></i>
          ) : (
            <i className="ri-moon-line text-gray-900"></i>
          )}
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-xl focus:outline-none"
        >
          {menuOpen ? <img src="/close.png" style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
            className="transition-filter duration-300"></img> : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white text-black dark:bg-black dark:text-white  text-sm font-medium p-4 absolute top-16 left-0 right-0 z-50 transform origin-top transition-all duration-300 ${
          menuOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <ul className="space-y-4">
          <li className=" cursor-pointer transition-colors duration-300 ">Home</li>
          <li className="border-t border-gray-200 pt-1"></li>
          <li className=" cursor-pointer transition-colors duration-300">About</li>
          <li className="border-t border-gray-200 pt-1"></li>

          <li className=" cursor-pointer transition-colors duration-300">Members</li>
          <li className="border-t border-gray-200 pt-1"></li>

          <li className=" cursor-pointer transition-colors duration-300">Achievements</li>
          <li className="border-t border-gray-200 pt-1"></li>

          <li className=" cursor-pointer transition-colors duration-300">Blog</li>
          <li className="border-t border-gray-200 pt-1">
            <button
              onClick={toggleTheme}
              className="w-full text-left flex items-center space-x-2  dark:hover:text-gray-200 transition-colors duration-300"
            >
              {darkMode ? (
                <>
                  <i className="ri-sun-line"></i>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <i className="ri-moon-line"></i>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
