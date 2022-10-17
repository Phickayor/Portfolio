import React, { useState } from "react";
import "./style.css";
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
  // activeTab(e) {
  //   e.target.activeColor = "white";
  // }
  const sideMenu = <FontAwesomeIcon icon={faBars} />;
  const close = <FontAwesomeIcon icon={faX} />;

  const [sideBarWidth, setWidth] = useState("0px");
  const [sideBarBtn, setBtn] = useState(sideMenu);
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
            // style={{ color: this.state.activeColor }}
            // onClick={() => this.activeTab()}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="skills"
            // style={{ color: this.state.activeColor }}
            // onClick={() => this.activeTab()}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="contact"
            // style={{ color: this.state.activeColor }}
            // onClick={() => this.activeTab()}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="menu" style={{ width: sideBarWidth }}>
        <button className="sideMenuBtn" onClick={() => toggleSideBar()}>
          {sideBarBtn}
        </button>
        <a href="#about">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
export default NavBar;
