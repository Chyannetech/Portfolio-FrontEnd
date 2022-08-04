import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "../data/Data";
import { projectsNav } from "../data/Data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <h3>My Recent Work</h3>
      <nav className="mb-12 max-w-[1000px] mx-auto py-6">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white   pt-3">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* projects */}
      <section id="projects">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      
          {projectsData.map(
            ({ id, image, title, github, demo, prototype, category }) => {
              return (
                <div
                  className="border-1 mb-10 pl-2 pr-2 pt-2 shadow-md shadow-[#404040] bg-[#0d0d0d]"
                  key={id}
                >
                  <img src={image} alt={title} />
                  <div>
                    <p className="text-accent text-md mb-3 text-white">
                      {category}
                    </p>
                    {prototype ? (
                      <a href={prototype} target="_blank" rel="noreferrer">
                        <font className="portfolio__demo-text">Prototype</font>
                      </a>
                    ) : null}
                    {github ? (
                      <a href={github} target="_blank" rel="noreferrer">
                        <font>Github</font>
                      </a>
                    ) : null}
                    <br></br>
                    {demo ? (
                      <a href={demo} target="_blank" rel="noreferrer">
                        <font className="portfolio__demo-text">Live Demo</font>
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
