import React from "react";
import "./style.css";

export default function navBar() {
  return (
    <div className="navBar">
      <div>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
