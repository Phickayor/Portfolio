import React from "react";
import projects from "../utils/projects";
export default function Projects() {
  return (
    <div id="works">
      <h1
        data-aos="fade-left"
        data-aos-duration="1500"
        className="text-5xl font-semibold"
      >
        WORKS
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-5">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            key={index}
            className="bg-[#131725] shadow-white shadow-inner text-white rounded-3xl p-5 h-fit self-center"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-36 rounded-2xl w-full object-cover"
            />
            <div className="space-y-4 my-5">
              <h1 className="text-xl font-semibold">{project.name}</h1>
              <p>{project.description}</p>
              <div className="flex space-x-5">
                <a
                  href={project.githublink}
                  target="_blank"
                  className="bg-white text-black p-2 rounded-xl font-medium"
                >
                  <button className="self-center">Source Code</button>
                </a>
                <a
                  href={project.livelink}
                  target="_blank"
                  className="bg-white text-black p-2 rounded-xl font-medium"
                >
                  <button className="self-center">Live Site</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
