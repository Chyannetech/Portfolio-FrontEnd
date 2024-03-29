import React from "react";

// import components
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div
      name="projects"
      className="w-full  md:h-full bg-[#ffffff] text-[#000000]"
    >
      <section
        id="projects"
        className="max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 text-black border-[#000000]">
            Projects
          </p>
        </div>
        <Projects />
      </section>
    </div>
  );
};

export default Portfolio;
