import React, { useState } from "react";
import { Poppins } from "next/font/google";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"]
});
export default function Home() {
  const [opacityValue, setOpacity] = useState("opacity-100");
  const [background, setBackground] = useState("#131725");
  const [color, setColor] = useState("#FFF");
  function setOpacityValue(value) {
    setOpacity(value);
  }
  function setModeValue(bg, color) {
    setBackground(bg);
    setColor(color);
  }
  return (
    <div
      className={`${poppins.className}`}
      style={{
        backgroundColor: background,
        color: color
      }}
    >
      <NavBar opacityHandler={setOpacityValue} modeHandler={setModeValue} />
      <div className={`mx-auto lg:w-10/12 w-11/12 ${opacityValue}`}>
        <Hero />
        <AboutMe />
        <Skills color={color} />
        <Services />
        <Projects />
        <Contact background={color} color={background} />
      </div>
      <Footer background={background} color={color} />
    </div>
  );
}
