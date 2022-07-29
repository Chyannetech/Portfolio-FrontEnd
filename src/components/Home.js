import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import headshot from "../assets/headshot.jpeg";

const Home = () => {
  return (
    <div name="home" className="w-full pt-20 h-full bg-[#000000]">




      {/* container */}
      <div className="max-w-[1000px] mx-auto pt-20 px-8 grid flex-grid gap-4 place-content-center max-h-full">

        {/* headshot */}
        <img
          class="h-auto rounded-full w-72 sm:flex-col shadow-lg shadow-[#66edff]"
          src={headshot}
          alt="headshot"
        />
        {/* headshot */}

        {/* Intro */}
        <div>
          <p className="text-[#87868b] pt-10 sm:text-2xl">Hello, my name is</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#e2e9ff]">
            Chyanne Robbins.
          </h1>
          <div class="container text-2xl sm:text-3xl font-bold text-[#26b1c6]">
            <p>
              I'm a Full Stack Developer
            </p>
          </div>
        {/* Intro */}

        {/* button */}
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#292929] shadow-lg shadow-[#a942ae]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        {/* button */}

          <br></br>
        </div>
      </div>
       {/* container */}
    </div>
  );
};

export default Home;
