import React from "react";
import projects from "../utils/projects";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="bg-[url('/images/blurs/project.png')] scale-90 mx-auto w-11/12 bg-cover text-center rounded-lg border border-white font-biz"
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={index}
          className="self-center flex justify-center flex-col space-y-6 py-10"
        >
          <img
            src={project.image}
            className="mx-auto w-8/12 rounded-2xl object-cover py-4 self-center"
          />
          <h3 className="text-3xl mx-auto w-9/12">{project.description}</h3>
          <div className="flex justify-around">
            <img src="/images/icons/left.svg" className="self-center" />
            <a
              href={project.livelink}
              className="underline text-4xl font-semibold self-center"
            >
              VIEW PROJECT LIVE
            </a>
            <img src="/images/icons/right.svg" className="self-center" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
