import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Oswald } from "next/font/google";
import projects from "../utils/projects"
const oswald = Oswald({ weight: "700", subsets: ['latin'] })
export default function Projects() {
  const code = <FontAwesomeIcon icon={faCode} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const web = <FontAwesomeIcon icon={faGlobe} />
  function AddDetails(e) {
    // var targetDiv = e.target.previousElementSibling
    // targetDiv.classList.add("w-full")
    // console.log(targetDiv)

  }
  function RemoveDetails(e) {
    // var targetDiv = e.target.previousElementSibling
    // targetDiv.classList.add("w-0")
    // console.log(targetDiv)
  }
  return (
    <div id="works">
      <h1 data-aos="fade-left" data-aos-duration="1500" className={`opacity-50 text-6xl text-slate-500 ${oswald.className}`}>{code} WORKS</h1>
      <div className="grid md:grid-cols-2 xl:flex xl:-gap-4 xl:gap-0 gap-10 md:gap-20 mx-5 xl:mx-0 py-20">
        {projects.map((project, index) => (
          <div
            onMouseOver={AddDetails}
            onMouseLeave={RemoveDetails}
            className="xl:h-72 h-56 md:h-auto xl:w-56 hover:w-full hover:z-20 hover:grayscale-0 duration-[1.5s] grayscale "
            key={index}>
            <div className={`absolute text-white bg-slate-500 bg-opacity-40 z-30 opacity-0 hover:opacity-100 xl:py-10 py-5 space-y-2 xl:space-y-5 h-fit w-fit px-5 overflow-hidden`}>
              <div className="space-y-2">
                <h1 className="xl:text-xl text-lg font-semibold">{project.name}</h1>
                <p className="text-purple-900">{project.language}</p>
              </div>
              <p className="text-sm">{project.description}</p>
              <div className="my-5 flex justify-between">
                <a href={project.githublink}>
                  <button className='font-semibold hover:bg-purple-700 duration-300 self-center bg-[#121212] hover:scale-105 px-5 py-3 text-sm rounded-lg text-white'>{github} Source Code</button>
                </a><a href={project.livelink}>
                  <button className='font-semibold hover:bg-purple-700 duration-300 self-center bg-[#121212] hover:scale-105 px-5 py-3 text-sm rounded-lg text-white'>{web} Live Site</button>
                </a>
              </div>

            </div>
            <img src={project.image} className="w-full hover:mx-0 z-20  relative cursor-pointer h-full object-cover rounded-lg scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
}
