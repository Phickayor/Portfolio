import {
  faBars,
  faClose,
  faMoon,
  faSun
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function NavBar(props) {
  const hideNav = () => {
    setmenuBtn(bars);
    setNav("h-0");
    props.opacityHandler("opacity-100");
  };
  const showNav = () => {
    setmenuBtn(close);
    setNav("h-fit");
    props.opacityHandler("opacity-60");
  };
  const darkMode = () => {
    props.modeHandler("bg-[#111827] text-white");
    setActiveDark("bg-slate-900");
    setActiveLight("");
  };
  const lightMode = () => {
    props.modeHandler("bg-white");
    setActiveDark("");
    setActiveLight("bg-slate-900");
  };
  const [nav, setNav] = useState("h-0");
  const [activeLight, setActiveLight] = useState("bg-slate-900");
  const [activeDark, setActiveDark] = useState("");
  const bars = (
    <FontAwesomeIcon
      icon={faBars}
      className="cursor-pointer text-extralight"
      onClick={showNav}
    />
  );
  const close = (
    <FontAwesomeIcon
      icon={faClose}
      className="cursor-pointer text-extralight"
      onClick={hideNav}
    />
  );
  const dark = (
    <FontAwesomeIcon
      icon={faMoon}
      onClick={darkMode}
      className={`py-2 px-3 mx-1 cursor-pointer ${activeDark} rounded-xl`}
    />
  );
  const light = (
    <FontAwesomeIcon
      icon={faSun}
      onClick={lightMode}
      className={`py-2 px-3 mx-1 cursor-pointer ${activeLight} rounded-xl`}
    />
  );
  const [menuBtn, setmenuBtn] = useState(bars);
  return (
    <div className="py-4 lg:px-10 xl:px-20 bg-inherit sticky top-0 z-30">
      {/* For Mobile */}
      <div className="flex lg:hidden justify-between px-4 lg:px-5">
        <div className="inline-flex gap-x-3 font-semibold text-xl items-center ">
          {menuBtn}Olufikayomi
        </div>
        <div className="inline-flex self-center bg-gray-700 p-2 rounded-full justify-between text-white">
          {dark} {light}
        </div>
      </div>
      <nav
        className={`${nav} lg:hidden border-b-2 border-slate-700 bg-white absolute left-0 z-20 my-2 w-full font-medium overflow-hidden  duration-300 `}
      >
        <ul className="my-3 space-y-2 text-xs px-5 text-slate-700 ">
          <a href="#about" onClick={hideNav}>
            <li className="cursor-pointer hover:font-semibold hover:text-black duration-200">
              About Me
            </li>
          </a>
          <a href="#skills" onClick={hideNav}>
            <li className="cursor-pointer hover:font-semibold hover:text-black duration-200">
              Skills
            </li>
          </a>
          <a href="#services" onClick={hideNav}>
            <li className="cursor-pointer hover:font-semibold hover:text-black duration-200">
              Services
            </li>
          </a>
          <a href="#works" onClick={hideNav}>
            <li className="cursor-pointer hover:font-semibold hover:text-black duration-200">
              Works
            </li>
          </a>
          <a href="#contact" onClick={hideNav}>
            <li className="cursor-pointer duration-200 font-semibold border-t pt-2 hover:font-semibold hover:text-black">
              Contact Me
            </li>
          </a>
        </ul>
      </nav>

      {/* For Desktop */}
      <div className="lg:flex hidden justify-between px-4 lg:px-5">
        <div className="inline-flex gap-x-3 font-semibold text-xl items-center ">
          Olufikayomi Jetawo
        </div>
        <ul className="flex space-x-5 self-center text-md">
          <a href="#about" className="hover:text-purple-700 duration-300">
            <li>About</li>
          </a>
          <a href="#skills" className="hover:text-purple-700 duration-300">
            <li>Skills</li>
          </a>
          <a href="#services" className="hover:text-purple-700 duration-300">
            <li>Services</li>
          </a>
          <a href="#works" className="hover:text-purple-700 duration-300">
            <li>Works</li>
          </a>
        </ul>
        <div className="flex gap-4 ">
          <div className="inline-flex self-center bg-gray-700 p-2 rounded-full justify-between text-white">
            {dark} {light}
          </div>
          <a href="#contact">
            <button className="font-semibold hover:bg-purple-700 duration-300 self-center bg-[#121212] hover:scale-105 px-5 py-3 text-sm rounded-lg text-white">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
