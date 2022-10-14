import React from "react";
import profile from "../portTest(2).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function AboutMe() {
  const down = <FontAwesomeIcon icon={faArrowDown} />;
  return (
    <div id="about">
      <div className="intro">
        <div className="aboutContainer">
          <div className="text">
            <h1>Hi, I'm Olufikayomi.</h1>
            <h2>
              I am a <i>Front-end Developer</i>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              suscipit et ratione, id nisi adipisci in laboriosam animi veniam
              nam earum, officiis facere aliquid at voluptatibus cupiditate.
              Dolores iure provident eaque explicabo tempore fugiat, numquam
              eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              suscipit et ratione, id nisi adipisci in laboriosam animi veniam
              nam earum, officiis facere aliquid at voluptatibus cupiditate.
              Dolores iure provident eaque explicabo tempore fugiat, numquam
              eos?
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
