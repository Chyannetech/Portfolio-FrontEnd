import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "../data/Data";


const Projects = () => {
  return (
    <div>
      

      {/* projects */}
      <section className="projects text-lg pt-28 bg-black">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 bg-[#000000] justify-center p-8 gap-5">
          {projectsData.map(
            ({ id, image, name, github, demo, prototype, description }) => {
              return (
                <div
                  className="border-1 mb-10 pl-2 pr-2 pt-2 shadow-lg shadow-[#5c1a4d] border-4 border-[#181818] bg-[#030510]"
                  key={id}
                >
                  <h2 className="text-accent text-center text-xl mb-3 text-white">
                    {name}
                  </h2>
                  <img src={image} alt={name} />
                  <div>
                    <p className="text-accent text-md mb-3 text-[#b8b8b8]">
                      {description}
                    </p>
                    {prototype ? (
                      <a href={prototype} target="_blank" rel="noreferrer">
                        <button class="bg-white hover:bg-[#828282] text-gray-800 font-semibold py-2 px-4 border-gray border rounded shadow">
                          <font className="buttons">
                            Prototype
                          </font>
                        </button>
                      </a>
                    ) : null}

                    {github ? (
                      <a href={github} target="_blank" rel="noreferrer">
                        <button class="bg-white mb-2 border hover:bg-[#828282] text-gray-800 font-semibold py-2 px-4  border-gray rounded shadow">
                          <font className="buttons">Github</font>
                        </button>
                      </a>
                    ) : null}

                    {demo ? (
                      <a href={demo} target="_blank" rel="noreferrer">
                        <button class="bg-white  border hover:bg-[#828282] text-gray-800 font-semibold py-2 px-4 border-gray rounded shadow">
                          <font className="buttons">
                            Live Demo
                          </font>
                        </button>
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
