import React from "react";
import profile from "../portTest(2).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function AboutMe() {
  const down = <FontAwesomeIcon icon={faArrowDown} />;
  const titles = ["Developer", "Web Designer", "Freelancer", "Student"];
  var i = -1;
  function titleChange() {
    if (i < 3) {
      i++;
      var title = titles[i];
      document.getElementById("title").innerHTML = title;
    } else {
      i = -1;
    }
  }
  setInterval(titleChange, 5000);
  return (
    <div id="about">
      <div className="intro">
        <div className="aboutContainer">
          <div className="text">
            <h1>Hi, I'm Olufikayomi.</h1>
            <h2>
              I am a <i id="title"></i>
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
                <a href="my_cv" download>
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
            <img src={profile} alt="my pic"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
