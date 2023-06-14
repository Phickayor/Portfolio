import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
  const down = <FontAwesomeIcon icon={faArrowDown} />;
  const titles = ["Developer", "Web Designer", "Freelancer", "Student"];
  return (
    <div className="md:flex justify-between my-10">
      <div className="flex flex-col justify-center space-y-5 py-10">
        <img src="/wave.svg " className='w-fit' />
        <p className="text-3xl">Hi  there 👋,</p>
        <h1 className="text-5xl">I'm <b className="font-semibold text-purple-700">Olufikayomi</b> Jetawo.</h1>
        <p className="text-2xl md:text-3xl  md:leading-10">A Web Developer, with four (4) years of experience passionate about building  beautiful, functional and user-friendly websites </p>
        <button className='font-semibold duration-300 w-fit hover:bg-gradient hover:bg-[#121212] hover:scale-105 py-4 px-8 bg-purple-700 text-sm rounded-lg text-white'>Contact Me</button>

      </div>
      <img src="/profile.svg" className="md:block hidden h-auto w-full object-cover rounded-xl" alt="Profile Pic" />

    </div>
  );
}
