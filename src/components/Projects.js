import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Projects() {
  const projects = [
    {
      name: "Currency Converter",
      description:
        "This helps to convert all currencies used by different nations. Exchange rate is constantly updated.",
      language: "HTML | CSS | JavaScript | API's",
      image: "../../projects/CurrencyConverter.png",
      link: "https://phickayor.github.io/Currency-Converter/",
      key: 2
    },
    {
      name: "Amen Jet",
      description:
        "This website belongs to an organisation which renders medical services across the country with a long term goal of going global.",
      language: "HTML | CSS | React Js | Tailwind",
      image: "../../projects/Amenjet.png",
      link: "https://amen-jet.netlify.app/",
      key: 3
    },
    {
      name: "Weather App",
      description:
        "This helps you check the current weather condition at a particular location anywhere in the world in the world.",
      language: "HTML | CSS | JavaScript | API's",
      image: "../../projects/WeatherApp.png",
      link: "https://phickayor.github.io/Weather-App/",
      key: 4
    },
    {
      name: "Lyrics Finder",
      description:
        "This helps you get the lyrics to any song of your choice",
      language: "HTML | CSS | JavaScript",
      image: "../../projects/LyricsFinder.png",
      link: "https://fikayoslyricsfinder.netlify.app",
      key: 1
    }
  ];
  const code = <FontAwesomeIcon icon={faCode} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div id="projects">
      <div className="head">
        <div className="icon">{code}</div>
        <h1>My Projects</h1>
        <p>
          Through the cause of learning and developing myself, I have been able
          to put together some projects. Here are some of them.
        </p>
        <b>Click project to visit live site</b>
      </div>
      <div className="allProjects">
        {projects.map((project) => (
          <div className="projectContainer">
            <a href={project.link} className="projectLink" key={projects.key}>
              <img className="projectImage" src={project.image} alt="img"></img>
              <div className="projectText">
                <div className="projectLanguage">{project.language}</div>
                <div className="projectName">{project.name}</div>
                <div className="projectDescription">{project.description}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="github">
        <h3>
          Check my github for more projects &nbsp;
          <a href="https://github.com/phickayor" className="icon">
            {github}
          </a>
        </h3>
      </div>
    </div>
  );
}
