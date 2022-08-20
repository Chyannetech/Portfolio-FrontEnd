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
            I am a Software Engineer who recently graduated from General Assembly's SEI Bootcamp. Before I fell in love with coding, I was a health education specialist where I was exposed to digital media and it's amazing abilities to connect and empower people. After collaborating with web developers in projects at work, and getting experience using HTML and CSS, I became eager to learn more. This led me to doing front-end projects as a freelancer where I helped small businesses with web design, marketing, and branding. During the pandemic I decided to finally take the leap and switch careers to pursue my goals. 
              <br></br>
              <br></br>
              Whether its' brainstorming new ideas, building new front and back-end projects, troubleshooting, or improving old code to make it more efficient and effective, I enjoy everything about software engineering. Most of my applications are built using the MERN stack, but I also have experience using other languages, frameworks, and technologies such as: Python | Django | Bootstrap | Materialize | Flexbox | Postgresql | Git / GitHub | Postman | Figma | and Wordpress.
            </p>
          </div>
          <div className="hackathon"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
