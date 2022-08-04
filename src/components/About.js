import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-20 h-full bg-[#000000] text-[#c1c0c0]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-3 pt-20 pl-4">
            <p className="text-4xl font-bold text-white inline border-b-4 border-[#121212]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] text-xlg py-4 mx-auto w-full h-2/5 gap-8 px-6">
          <div>
            <p>
              I am a Software Engineer from Fort Lauderdale, Florida with
              experience developing full stack applications using HTML, CSS,
              Javascript, Python, Django, PostgreSQL, MongoDB and more. Before I
              fell in love with coding, I was a health education specialist
              where I was exposed to digital media and its great abilities to
              connect and empower people.
              <br></br>
              <br></br>
              After collaborating with several web developers and understanding
              how software applications work to improve our lives, I realized
              that a career in tech building useful web applications was the
              career for me. I'm currently looking to bring my skills to a
              company where I can build beautiful website designs that sync with
              logical and secure backends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
