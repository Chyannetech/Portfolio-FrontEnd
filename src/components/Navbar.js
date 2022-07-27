import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 style={{ color: "pink" }}>CHYANNE ROBBINS</h1>
      </div>
      {/* main menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* Mobile Menu */}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Social Icons */}
    </div>
  );
};

export default Navbar;
