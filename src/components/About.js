import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-300">
              About
            </p>
            </div>
            <div></div>
            </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Chyanne, nice to meet you.</p>
              </div>
              <div>
              <p>
                I am a Software Engineer who recently graduated from General
                Assemblys SEI Bootcamp. Before I fell in love with coding, I
                was a Health Education Specialist where I was exposed to digital
                media and its amazing abilities to connect and empower people.
                After collaborating with several developers and understanding
                the many ways that software applications can enhance our lives,
                I realized that a career in tech building useful web
                applications was the career for me. I am now eager to find a
                position where I can utilize my critical thinking, research, and
                communication skills to help make the world a better place.
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default About;
