import React from "react";
import "./style.css";

export default function navBar() {
  return (
    <div>
      <div className="navBarMain">
        <div className="name">
          <h3>Olufikayomi Jetawo</h3>
        </div>
        <div className="navBar">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
