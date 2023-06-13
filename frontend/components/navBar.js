import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  // Class Component Code
  //constructor(props) {
  //   super(props);
  //   const sideMenu = <FontAwesomeIcon icon={faBars} />;
  //   this.state = {
  //     activeColor: "rgb(156 163 175)",
  //     sideBarWidth: "0px",
  //     sideBarValue: sideMenu
  //   };
  // }

  const sideMenu = <FontAwesomeIcon icon={faBars} />;
  const close = <FontAwesomeIcon icon={faX} />;

  const [activeProject, setProject] = useState(false);
  const [activeSkills, setSkills] = useState(false);
  const [activeContact, setContact] = useState(false);
  const [sideBarWidth, setWidth] = useState("0px");
  const [sideBarBtn, setBtn] = useState(sideMenu);

  // function hover(e) {
  //   e.targetElement.style.color = "white";
  // }
  function projectButton() {
    setProject(true);
    setSkills(false);
    setContact(false);
  }
  function skillsButton() {
    setSkills(true);
    setProject(false);
    setContact(false);
  }
  function contactButton() {
    setContact(true);
    setProject(false);
    setSkills(false);
  }
  function toggleSideBar() {
    if (sideBarWidth === "0px") {
      setWidth("300px");
      setBtn(close);
    } else {
      setWidth("0px");
      setBtn(sideMenu);
    }
  }
  return (
    <div>
      <div className="navBarMain">
        <div className="name">
          <h3>Olufikayomi Jetawo</h3>
        </div>
        <div className="navBar">
          <a
            href="#projects"
            className="projects"
            style={{ color: activeProject ? "white" : "rgb(156 163 175)" }}
            onClick={projectButton}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="skills"
            style={{ color: activeSkills ? "white" : "rgb(156 163 175)" }}
            onClick={skillsButton}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="contact"
            style={{ color: activeContact ? "white" : "rgb(156 163 175)" }}
            onClick={contactButton}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="menu" style={{ width: sideBarWidth }}>
        <button className="sideMenuBtn" onClick={() => toggleSideBar()}>
          {sideBarBtn}
        </button>
        <a href="#about" onClick={() => toggleSideBar()}>
          Home
        </a>
        <a href="#projects" onClick={() => toggleSideBar()}>
          Projects
        </a>
        <a href="#skills" onClick={() => toggleSideBar()}>
          Skills
        </a>
        <a href="#contact" onClick={() => toggleSideBar()}>
          Contact
        </a>
      </div>
    </div>
  );
}
export default NavBar;
