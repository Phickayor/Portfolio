import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Oswald } from "next/font/google";
import projects from "../utils/projects";
const oswald = Oswald({ weight: "700", subsets: ["latin"] });
export default function Projects() {
  const code = <FontAwesomeIcon icon={faCode} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const web = <FontAwesomeIcon icon={faGlobe} />;
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
      <h1
        data-aos="fade-left"
        data-aos-duration="1500"
        className={`opacity-50 text-6xl text-slate-500 ${oswald.className}`}
      >
        {code} WORKS
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-5">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            key={index}
            className="bg-slate-900 shadow-white shadow-inner text-white rounded-3xl p-5 h-fit self-center"
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
                  className="bg-white text-black p-2 rounded-xl font-semibold"
                >
                  <button className="self-center">{github} Source Code</button>
                </a>
                <a
                  href={project.livelink}
                  className="bg-white text-black p-2 rounded-xl font-semibold"
                >
                  <button className="self-center">{web} Live Site</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
