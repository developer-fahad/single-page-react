import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* logo */}
        <div className="text-4xl font-bold ">
          <span className="text-cyan-500">W</span>ebsite
        </div>

        {/* Right side Menu items for larger screens */}
        <nav className="hidden  md:flex space-x-6 text-lg uppercase font-bold">
          <a href="#" className="hover:text-cyan-500">
            Home
          </a>
          <a href="#" className="hover:text-cyan-500">
            About
          </a>
          <a href="#" className="hover:text-cyan-500">
            Services
          </a>
          <a href="#" className="hover:text-cyan-500">
            Contact
          </a>
        </nav>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FiMenu className="text-2xl text-black" />
          </button>
        </div>
      </div>

      {/* Drawer Menu for small devices */}
      <div
        className={`fixed top-0  flex right-0 h-full w-64 bg-[#00000f] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="">
          <button onClick={closeMenu}><FaX className="text-2xl font-bold" /></button>
        </div>
        <ul className="mt-16 space-y-4">
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block  py-2 hover:bg-gray-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block  py-2 hover:bg-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block  py-2 hover:bg-gray-700"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block py-2 hover:bg-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-10"
        />
      )}
    </header>
  );
};

export default Nav;
