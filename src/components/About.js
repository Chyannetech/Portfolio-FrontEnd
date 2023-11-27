import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-20 h-full bg-[#ffffff] text-[#000000]"
    >
    <div className="aboutBox">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-3 pt-20 pl-4">
            <p className="text-4xl font-bold text-black inline border-b-4 border-[#121212]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] text-xlg py-4 mx-auto w-full h-2/5 gap-8 px-6">
          <div>
            <p>
            I'm a frontend developer with extensive experience spanning public health, technology, and social justice. My diverse professional background allows me to approach problems with a unique perspective. With every new project, my aim is to create intentionally ethical, inclusive digital experiences that enable traditionally marginalized groups to harness the benefits of our increasingly tech-driven world. At the core, I am driven by the belief that thoughtful software design and development have the power to drive radical social change; I'm eager to collaborate with teams that are committed to building an equitable and accessible future powered by technology.
            </p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
