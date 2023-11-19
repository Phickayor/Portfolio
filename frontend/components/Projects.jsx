import React from "react";
import projects from "../utils/projects";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects() {
  return (
    <Swiper
      id="projects"
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="bg-[url('/images/blurs/project.png')] scale-90 mx-auto md:w-11/12 bg-cover text-center rounded-lg border border-white font-biz"
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={index}
          className="self-center flex justify-center flex-col space-y-4 md:space-y-6 py-4 md:py-10"
        >
          <img
            src={project.image}
            className="mx-auto w-10/12 md:w-8/12 rounded-2xl object-cover self-center"
          />
          <p className="text-xl md:text-3xl mx-auto w-11/12 md:w-9/12">
            {project.description}
          </p>
          <div className="flex justify-around">
            <img
              src="/images/icons/left.svg"
              className="scale-75 md:scale-100 self-center"
            />
            <a
              href={project.livelink}
              className="underline sm:text-xl md:text-4xl font-semibold self-center"
            >
              VIEW PROJECT LIVE
            </a>
            <img
              src="/images/icons/right.svg"
              className="scale-75 md:scale-100 self-center"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
