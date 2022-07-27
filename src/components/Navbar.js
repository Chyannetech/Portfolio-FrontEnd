import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d1d36] text-gray-300">
      <div>
        <h1 style={{ color: "pink" }}>CHYANNE ROBBINS</h1>
      </div>
      {/* main menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className='md:hidden style={{ color: "pink" }} z-10'
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4x1">Home</li>
        <li className="py-6 text-4x1">About</li>
        <li className="py-6 text-4x1">Projects</li>
        <li className="py-6 text-4x1">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={40} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5a5555]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={40} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgb(94,23,82)]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={40} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgb(107,104,27)]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={40} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
