import React from "react";
import { skills } from "../data/Data";
import { HiArrowNarrowRight } from "react-icons/hi";
import headshotsmall from "../assets/img/skills/headshotsmall.jpg";
<source />;

const Home = () => {
  return (
    <div name="home" className="w-full pt-20 h-full bg-[#000000]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto pt-20 px-8 grid flex-grid gap-4 place-content-center max-h-full">
        {/* headshot */}
        <img
          class="h-auto rounded-full w-72 sm:flex-col shadow-lg shadow-[#26b1c6]"
          src={headshotsmall}
          alt="headshotsmall"
        />
        {/* headshot end */}

        {/* Intro */}
        <div>
          <p className="text-[#87868b] pt-10 sm:text-2xl">Hello, my name is</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#e2e9ff]">
            Chyanne Robbins.
          </h1>
          <div class="container text-2xl sm:text-3xl font-bold text-[#26b1c6]">
            <p>I'm a Full Stack Developer</p>
          </div>
          {/* Intro End */}
        </div>
      </div>
      {/* container End*/}
      {/* Skills Container */}
      return (
      <div className="m-p-9">
        <section className="w-auto h-auto bg-[#000000]  shadow-lg shadow-[#5c1a4d] px-6  py-6">
          <div className="container mx-auto">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full"></div>
            <div className="grid grid-cols-8 md:grid-flow-col">
              {skills.map((skill, index) => {
                return (
                  <div className="flex items-center justify-center" key={index}>
                    <img className="lg:h-20" src={skill.image} alt="skills" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        );
        {/* Skills Container end */}
      </div>
    </div>
  );
};

export default Home;
