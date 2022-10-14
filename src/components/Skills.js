import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export default function Skills() {
  const languages = ["HTML", "CSS", "JavaScript"];
  const frameworks = ["Bootstrap", "W3CSS", "ReactJs", "AngularJs"];
  const libraries = ["JQuery"];
  const others = ["Git + Github", "Node.js"];
  const tech = <FontAwesomeIcon icon={faMicrochip} />;
  const checkMark = <FontAwesomeIcon className="check" icon={faCheckCircle} />;
  return (
    <div id="skills">
      <div className="head">
        <div className="icon">{tech}</div>
        <h1>My Stack</h1>
      </div>

      <div className="allStacks">
        <div className="languages">
          <h2>Languages</h2>
          {languages.map((language) => (
            <h3>
              {checkMark} {language}
            </h3>
          ))}
        </div>
        <div className="frameworks">
          <h2>Frameworks</h2>
          {frameworks.map((framework) => (
            <h3>
              {checkMark} {framework}
            </h3>
          ))}
        </div>
        <div className="libraries">
          <h2>Libraries</h2>
          {libraries.map((library) => (
            <h3>
              {checkMark} {library}
            </h3>
          ))}
        </div>
        <div className="languages">
          <h2>Other Technologies</h2>
          {others.map((technology) => (
            <h3>
              {checkMark} {technology}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}
