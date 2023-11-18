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
    props.modeHandler("darkgray", "white");
    setActiveDark("bg-slate-900");
    setActiveLight("");
  };
  const lightMode = () => {
    props.modeHandler("white", "darkgray");
    setActiveDark("");
    setActiveLight("bg-slate-900");
  };
  const [nav, setNav] = useState("h-0");
  const [activeLight, setActiveLight] = useState("");
  const [activeDark, setActiveDark] = useState("bg-slate-900");
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
    <div className="flex justify-between text-xl py-6 my-8 px-5 border-b-2">
      <h1 className="self-center">Fikayo</h1>
      <button className="bg-blue text-black p-2 px-6 rounded-lg">
        Book a call
      </button>
    </div>
  );
}

export default NavBar;
