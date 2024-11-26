import Link from "next/link";
import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { CgArrowTopRight } from "react-icons/cg";
import { FaPlusCircle } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "E-commerce Site (Jet Collections)",
      image: "/images/es.png",
      link: "https://jetcollections.netlify.app",
      desc: "Designed and developed a feature-rich platform for seamless online shopping and transactions.",
      stacks: [
        "NextJs",
        "Tailwind",
        "TypeScript",
        "MongoDB",
        "NodeJs",
        "Express"
      ]
    },
    {
      name: "Hotel Booking and Reservation Site (Esquire Resorts)",
      image: "/images/er.png",
      link: "https://esquireresorts.com/",
      desc: " Built a user-friendly website for efficient hotel reservations and seamless customer experience.",
      stacks: [
        "NextJs",
        "Tailwind",
        "TypeScript",
        "MongoDB",
        "NodeJs",
        "Express"
      ]
    },
    {
      name: "Learning Management System (Fountain Library)",
      image: "/images/lms.png",
      link: "https://fountainlibrary.com/",
      desc: "Created an interactive platform for course management, student learning, and performance tracking.",
      stacks: ["ReactJs", "Tailwind", "TypeScript"]
    },
    {
      name: " Transportation & Logistics Providers (Trippayer)",
      image: "/images/tp.png",
      link: "https://trippayer.com",
      desc: "Engineered a solution for booking and managing transportation and logistics services efficiently.",

      stacks: ["NextJs", "Tailwind", "TypeScript"]
    },
    {
      name: "Social Networking Site (Big Circle)",
      image: "/images/bc.png",
      link: "https://hibuddydev.netlify.app",
      desc: "Developed a dynamic platform for connecting users, sharing content, and fostering online communities.",

      stacks: [
        "NextJs",
        "Tailwind",
        "TypeScript",
        "MongoDB",
        "NodeJs",
        "Express"
      ]
    },
    {
      name: "Product Designer Portfolio",
      image: "/images/ps.jpg",
      link: "https://callmesanjo.netlify.app",
      desc: "Designed a visually stunning portfolio showcasing creativity, skills, and projects of a product designer.",

      stacks: ["NextJs", "Tailwind", "TypeScript"]
    }
  ];
  return (
    <div className="py-5 ">
      <h1
        className="text-2xl leading-loose md:text-4xl w-fit md:leading-relaxed"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        HERE’S A GLIMPSE OF
        <br /> SOME EXCITING 👨🏾‍💻 PROJECTS
        <br /> I’VE DONE .
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 overflow-x-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border w-full rounded-xl p-5 h-full self-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={project.image}
              className="w-full object-cover rounded-xl"
            />
            <div className="px-2 py-4 space-y-3">
              <h1 className="text-2xl xl:text-3xl font-swt-light">
                {project.name}
              </h1>
              <span className="block font-swt-thin text-sm xl:text-base">
                {project.desc}
              </span>
              <div className="flex flex-wrap gap-3 py-2 text-sm [&>*]:rounded-full [&>*]:border-2 [&>*]:p-2 [&>*]:px-5 [&>*]:bg-[#1C1B1B]">
                {project.stacks.map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                className="flex group gap-3"
              >
                <label className="font-swt-light text-xl duration-300 group-hover:text-green">
                  View Project
                </label>
                <CgArrowTopRight className="inline bg-green group-hover:bg-black group-hover:border-2 duration-300 group-hover:text-green rounded-full text-3xl  text-black self-center" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center py-4">
        <Link
          href="https://github.com/phickayor"
          target="_blank"
          className="relative py-3 px-5 inline-flex gap-2 mx-auto w-fit font-swt-light rounded-xl self-center hover:bg-green bg-[#F3FFDF] text-black"
        >
          <FaPlusCircle className="self-center text-2xl text-black " />
          <span className="text-2xl self-center">View more</span>
          <img
            src="/images/name-wm.png"
            className="absolute -top-3 -right-4 -z-10"
          />
          <img
            src="/images/down-wm.png"
            className="absolute -bottom-3 -left-4 -z-10"
          />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
