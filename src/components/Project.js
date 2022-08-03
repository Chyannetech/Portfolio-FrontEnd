import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img className="m-h-full m-w-full" src={item.image} alt="" />
      </div>
      <p className="text-[#595959] mb-3">{item.category}</p>

      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-[#595959] mb-3">{item.description}</p>
      <a href="{item.github}">
        <p className="text-[#595959] mb-3">{item.github}</p>
        <p className="text-[#595959] mb-3">{item.prototype}</p>
        <font className="portfolio__demo-text">Live Demo</font>
      </a>
    </div>
  );
};
export default Project;
