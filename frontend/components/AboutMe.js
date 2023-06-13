import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function AboutMe() {
  const down = <FontAwesomeIcon icon={faArrowDown} />;
  const titles = ["Developer", "Web Designer", "Freelancer", "Student"];
  return (
    <div id="about">
      <div className="intro">
        <div className="aboutContainer">
          <div className="text">
            <h1>Hi, I'm Olufikayomi.</h1>
            <h2>
              I am a Frontend Developer
            </h2>
            <p>
              I am a developer with three (3) years of experience. I love coding
              because it helps me see myself as a problem solver. It also brings
              forth beautiful outcomes. I use my spare time to watch movies,
              play mobile games, and chess.
            </p>
            <div className="btn">
              <div>
                <a href="#contact">
                  <button>HIRE ME</button>
                </a>
              </div>
              <div>
                <a
                  href="https://docs.google.com/document/d/1cMzUxLzRE3-FSSRqwm0Xd4JJChp__JQYh8U_pvs78WA/edit?usp=share_link"
                  download
                >
                  <button>DOWNLOAD CV</button>
                </a>
              </div>
              <div className="scrollArrow">
                <a href="#projects" className="icon arrow">
                  {down}
                </a>
              </div>
            </div>
          </div>
          <div className="image">
            <img src="/port.jpg" alt="my pic"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
