import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import headshot from "../assets/headshot.jpeg";

// grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'

const Home = () => {
  return (
    <div name="home" className="w-full pt-20 h-full bg-[#000000]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto pt-20 px-8 grid flex-grid gap-4 place-content-center max-h-full">
      {/* headshot */}
      <img
          class="h-auto rounded-full w-50 sm:flex-col  shadow-lg shadow-[#ff66f0]"
          src={headshot}
          alt="headshot"
        />
        <div> 
          <p className="text-pink-200 pt-20 sm:text-2xl">Hello, my name is</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#e2e9ff]">
            Chyanne Robbins
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover:border-pink-300">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
        </div>
        
        
      </div>
    </div>
  );
};

export default Home;
