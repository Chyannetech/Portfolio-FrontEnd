import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <div name="Projects" className="w-full pt-20 h-full bg-[#000000] text-[#c1c0c0]">
    <section id='projects' className='section bg-[#000000] min-h-[1400px]'>
      <div className='container pt-28 mx-auto'>
      <div className=" pl-10 pt-10">
        <p className="text-4xl font-bold text-white inline center border-b-4 border-[#121212]">
              Projects
            </p>
        </div>
        <Projects />
      </div>
      
    </section>
    </div>
  );
};

export default Portfolio;