// import data
import { projectsData } from "../data/Data";

const Projects = () => {
  return (
    <div className="md:h-screen">
      {/* projects */}
      <section className=" projects text-lg py-10 bg-[#ffffff]">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 bg-[#ffffff] justify-center py-3 p gap-5 space-x-2 > * + *">
          {projectsData.map(
            ({ id, image, name, github, demo, prototype, description }) => {
              return (
                <div
                  className="w-full h-full border-1 mb-6 pl-2 pr-2 pt-3 shadow-lg shadow-[#5c1a4d] border-4 border-[#000000] bg-[#ffffff]"
                  key={id}
                >
                  <h2 className="text-accent text-center text-xl mb-3 text-[#000000]">
                    {name}
                  </h2>
                  <img src={image} alt={name} />
                  <div>
                    <p className="text-accent py-5 content-center text-md mb-3 text-[#000000]">
                      {description}
                    </p>
                    {prototype ? (
                      <a href={prototype} target="_blank" rel="noreferrer">
                        <button class="bg-white hover:bg-[#828282] text-gray-800 font-semibold py-2 px-4 border-gray border rounded shadow">
                          <font className="buttons">Prototype</font>
                        </button>
                      </a>
                    ) : null}

                    {github ? (
                      <a href={github} target="_blank" rel="noreferrer">
                        <button class="bg-white mb-2 border hover:bg-[#828282] text-[#181818] font-semibold py-2 px-4  border-gray rounded shadow">
                          <font className="buttons">Github</font>
                        </button>
                      </a>
                    ) : null}

                    {demo ? (
                      <a href={demo} target="_blank" rel="noreferrer">
                        <button class="bg-white  border hover:bg-[#828282] text-[#181818] font-semibold py-2 px-4 border-gray rounded shadow">
                          <font className="buttons">Live Demo</font>
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
