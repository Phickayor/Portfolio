import Link from "next/link";
import React from "react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="grid text-center lg:text-left lg:grid-cols-2 mx-auto w-11/12 ">
      <div className="h-full flex flex-col gap-8 py-4 lg:py-6">
        <div className="[&>*]:self-center space-x-5">
          <span className="text-xl md:text-3xl">( phickayor )</span>
          <span className="text-3xl md:text-5xl">{"{"}</span>
        </div>
        <label className="relative mx-auto lg:mx-0 w-fit font-swt-light bg-[#191919] border px-4 py-2 border-[#A8A8A8] rounded-full">
          🖐🏿 Hello, i’m Olufikayomi Samuel Jetawo
          <img
            src="/images/name-wm.png"
            className="absolute -right-4 -top-4 -z-10"
          />
        </label>
        <h1 className="text-2xl md:text-4xl relative mx-auto lg:mx-0 w-fit leading-relaxed">
          I’m a&nbsp;<span className="text-green">Fullstack Developer</span>
          <br /> based in Lagos , Nigeria.
          <img
            src="/images/star.png"
            className="absolute -top-2 -right-6 -z-10"
          />
        </h1>
        <p
          className="font-swt-thin w-11/12 md:text-xl "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          I'm a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with expertise in Tpescript, Next.js and Tailwind CSS. Committed to transforming ideas into elegant and high-performance web applications. Let's collaborate to create immersive digital experiences!
        </p>
        <div className="flex justify-center lg:justify-start gap-5  text-sm md:text-base">
          <Link
            href="mailto:jetawof@gmail.com"
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <button className="flex gap-2 bg-white hover:bg-green duration-300 rounded-lg px-2 md:px-4 py-1">
              <span className="bg-black rounded-full self-center p-1 h-fit md:text-xl">
                🖐🏾
              </span>
              <span className="text-black self-center text-sm">Contact Me</span>
            </button>
            <img
              src="/images/name-wm.png"
              className="absolute -right-5 -top-5"
            />
            <img
              src="/images/down-wm.png"
              className="absolute -left-5 -bottom-5"
            />
          </Link>
          <Link
            href="/cv.pdf"
            download
            className="flex gap-4 group"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex -space-x-3 duration-300 md:group-hover:-space-x-10 group-hover:-space-x-8 self-center ">
              <div className="w-8 md:w-10 h-8 md:h-10 z-20 flex flex-col justify-center rounded-full group-hover:bg-green bg-white text-black">
                <FaArrowRight className="self-center text-center" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 self-center rounded-full border-2"></div>
            </div>
            <span className="self-center">Download CV</span>
          </Link>
        </div>

        <div className="flex justify-center lg:justify-start gap-5 md:px-14">
          <span className="text-3xl md:text-5xl self-center block">{"}"}</span>
          <div className="self-center group duration-300 hover:bg-green bg-[#222222] p-2 md:p-4 rounded-full">
            <Link
              href="https://www.linkedin.com/in/phickayor/"
              target="_blank"
            >
              <BiLogoLinkedin className="self-center group-hover:text-[#222222] text-green text-3xl " />
            </Link>
          </div>
          <div className="self-center group duration-300 hover:bg-green bg-[#222222] p-2 md:p-4 rounded-full">
            <Link target="_blank" href="https://github.com/phickayor">
              <BiLogoGithub className="self-center group-hover:text-[#222222] text-green text-3xl " />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col  lg:p-6">
        <img
          src="/images/me.jpg"
          className="hidden lg:block object-cover size-fit aspect-square self-center grayscale rounded-xl"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <img
          src="/images/me.jpg"
          className="lg:hidden object-cover h-full w-full self-center grayscale rounded-xl scale-75"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
}

export default Hero;
