import React from "react";

// import components
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div
      name="Projects"
      className="w-full md:h-screen bg-[#000000] text-[#c1c0c0]"
    >
      <section
        id="projects"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#121212]">
            Projects
          </p>
        </div>
        <Projects />
      </section>
    </div>
  );
};

export default Portfolio;
