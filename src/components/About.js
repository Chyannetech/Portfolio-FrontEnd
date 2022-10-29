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
            Hi, My name is Chyanne. I just completed a Software Engineering bootcamp at General Assembly in July where I gained fundamental programming knowledge in HTML5, CSS3, Javascript, and Python. Since completing the bootcamp, I've participated in two hackathons, where I worked with a team of other engineers, UI/UX designers, and project managers to develop community driven web applications. I've also rebuilt one of my web applications from bootcamp using the React framework, taught myself Ruby on Rails, and currently I'm learning how to build Wordpress themes and plugins using PHP. Before becoming a software engineer, I received my masters in public health and freelanced in marketing and as a web designer using content management systems like WIX, Wordpress, SquareSpace, and Shopify. Through that experience is what inspired me to pursue software engineering and enroll into a bootcamp to become more well rounded with my coding skills and become a web developer professionally.
              
            </p>
          </div>
          <div className="hackathon"></div>
          <div className="hackathonMobile"></div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
