import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300">
      <h1 className="logo">C R</h1>

      {/* Navigation Main Menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline decoration-[#a942ae]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:underline decoration-[#a942ae]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:underline decoration-[#a942ae]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:underline decoration-[#a942ae]">
          <Link to="projects" smooth={true} duration={500}>
           Projects
          </Link>
        </li>

        <li className="hover:underline decoration-[#a942ae]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Navigation Main Menu End */}

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className='md:hidden style={{ color: "pink" }} z-10'
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Hamburger Icon End  */}

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  bg-[#000000] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4x1"> <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link></li>
        <li className="py-6 text-4x1"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link></li>
        <li className="py-6 text-4x1"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
        <li className="py-6 text-4x1"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link></li>
        <li className="py-6 text-4x1"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
      {/* Mobile Menu End  */}

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/chyannerobbins/"
            >
              Linkedin <FaLinkedin size={40} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5a5555]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Chyannetech"
            >
              Github <FaGithub size={40} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a942ae]">
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
      {/* Social Icons End */}
    </div>
  );
};

export default Navbar;
