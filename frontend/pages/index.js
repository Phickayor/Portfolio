import React from "react";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Stacks from "@/components/Stacks";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="mx-auto w-10/12 space-y-10 md:space-y-20">
        <div>
          <Hero />
          <Links />
        </div>
        <Stacks />
        <Projects />
      </div>
      <Contact />
    </>
  );
}
