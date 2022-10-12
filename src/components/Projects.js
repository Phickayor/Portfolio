import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
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
      name: "Basic Arithmetic Calculator",
      description:
        "This helps to solve your basic arithmetics easily so now u don't have to stress your brain.",
      language: "HTML, CSS , JavaScript",
      image: "../../projects/Calculator.png",
      link: "https://phickayor.github.io/A-Simple-Web-Calculator/",
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
      name: "To-Do List",
      description:
        "This helps you to put down a list of things to do or items to purchase so u don't forget.",
      language: "HTML | CSS | JavaScript | Angular.Js",
      image: "../../projects/ToDoList.png",
      link: "https://phickayor.github.io/list-maker-web-app/",
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          pariatur rerum harum dolore velit eveniet, error, facilis cupiditate
          <br />
          repellat, ea voluptate. Reprehenderit molestiae impedit magnam aliquam
          ex iste quidem magni!0
        </p>
      </div>
      <div className="allProjects">
        {projects.map((project) => (
          <div className="projectContainer">
            <a href={project.link} class="projectLink" key={project.key}>
              <img className="projectImage" src={project.image} alt="img"></img>
              <div className="projectText">
                <h2 className="projectLanguage">{project.language}</h2>
                <h1 className="projectName">{project.name}</h1>
                <p className="projectDescription">{project.description}</p>
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
