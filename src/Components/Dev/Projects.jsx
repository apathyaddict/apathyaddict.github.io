import React from "react";
import { data } from "../../data/projects";

const Projects = () => {
  const project = data;

  return (
    <div
      name="projects"
      className="flex align-center justify-center w-full project-div text-slate-700  "
    >
      <div className="flex-1 max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full mb-4">
        <div className="pb-8">
          <h1 className="text-4xl  inline border-b-4  text-slate-700 border-bluegreen">
            Projects
          </h1>
          <p className="py-6">Here are some of my projects and works:</p>
        </div>

        <div className="flex-1 grid h-[250px] lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 cursor-pointer">
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}
              className="shadow-md group container 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 p-1">
                <span className="text-2xl text-white bold  tracking-wider ">
                  {item.name}
                </span>
                <div className="text-1xl  text-gray-700 tracking-wider ">
                  {item.description}
                </div>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      target="_blank"
                      className="text-center text-white rounded-full px-4 py-3 m-2
                       bg-slate-700 font-bold text-lg hover:shadow-lg hover:bg-slate-600"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  {item.live && (
                    <a href={item.live} target="_blank">
                      <button
                        target="_blank"
                        className="text-center rounded-full px-5 py-3 m-2
                       bg-slate-700 text-white font-bold text-lg hover:shadow-lg hover:bg-slate-600"
                      >
                        Live
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
