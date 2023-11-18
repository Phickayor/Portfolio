import React, { useState } from "react";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Links from "@/components/Links";
import Stacks from "@/components/Stacks";

export default function Home() {
  const [opacityValue, setOpacity] = useState("opacity-100");
  const [background, setBackground] = useState("darkgray");
  const [color, setColor] = useState("white");
  function setOpacityValue(value) {
    setOpacity(value);
  }
  function setModeValue(bg, color) {
    setBackground(bg);
    setColor(color);
  }
  return (
    <div className="mx-auto lg:w-9/12 w-11/12 font-poppins space-y-20">
      <NavBar opacityHandler={setOpacityValue} modeHandler={setModeValue} />
      <div>
        <Hero />
        <Links />
      </div>
      <Stacks />
      <Services />
      <Projects />
      <Contact background={color} color={background} />
      <Footer />
    </div>
  );
}
