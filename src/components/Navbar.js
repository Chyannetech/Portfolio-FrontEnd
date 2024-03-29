import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    // logo
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-[#ffffff]">
      <h1 className="logo">C R</h1>
      {/* // logo end */}

      {/* Navigation Main Menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline decoration-[#5c1a4d]">
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
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li className="hover:underline decoration-[#a942ae]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="hover:underline decoration-[#a942ae]">
        <a href="https://drive.google.com/file/d/1WS6Y4mXkqZ66MywCGWagkv7nGy6HG-vn/view"target="_blank">
        Resume
      </a>
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
            : "absolute top-0 left-0 w-full h-screen  text-black bg-[#ffffff] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4x1">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4x1">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4x1">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4x1">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="py-6 text-4x1">
          <a
            className="flex justify-between items-center w-full text-black"
            href="https://drive.google.com/file/d/1WS6Y4mXkqZ66MywCGWagkv7nGy6HG-vn/view?usp=sharing"target="_blank"
          >
            Resume
          </a>
        </li>
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
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#982d9e]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:chyannetech@gmail.com"
            >
              Email <HiOutlineMail size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgb(107,104,27)]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1WS6Y4mXkqZ66MywCGWagkv7nGy6HG-vn/view"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>
      {/* Social Icons End */}
    </div>
  );
};

export default Navbar;
