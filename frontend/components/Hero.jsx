import React from "react";
export default function Hero() {
  return (
    <div className="md:flex bg-opacity-20 justify-between my-10 lg:text-center">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="flex flex-col justify-center space-y-5 py-10"
      >
        <img src="/wave.svg " className="w-fit lg:mx-auto" />
        <p className="text-3xl">Hi there 👋,</p>
        <h1 className="font-semibold text-5xl">
          I'm <span className="text-purple-700">Olufikayomi </span>
          Jetawo.
        </h1>
        <p className="text-2xl md:text-3xl font-light md:leading-10">
          A Web Developer, with four (4) years of experience passionate about
          building beautiful, functional and user-friendly websites{" "}
        </p>
        <a href="/Fullstack Resume.pdf" download>
          <button className="font-semibold duration-300 w-fit hover:bg-gradient hover:bg-gray-700 hover:scale-105 py-4 px-8 bg-purple-700 text-sm rounded-lg text-white">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}
