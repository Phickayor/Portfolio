"use client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Training from "@/components/Training";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="">
      <h1
        className="mx-auto w-11/12 font-bebas text-3xl z-20 sticky top-0 py-5 uppercase backdrop-blur"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Olufikayomi Samuel Jetawo
      </h1>
      <div className="border-b-2">
        <Hero />
      </div>
      <div className="mx-auto w-11/12">
        <Skills />
        <Projects />
        {/* <Training/> */}
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
