import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className=" text-center self-center my-5 md:my-0 space-y-6">
      <h1 className="font-semibold text-4xl md:text-[60px] inline-block border-purple-700">
        💡🖥️
      </h1>
      <p className="text-sm leading-[26px] md:text-lg md:leading-relaxed lg:text-2xl text-center lg:leading-relaxed font-poppins-extralight">
        Passionate Full Stack Developer specializing in the MERN stack (MongoDB,
        Express.js, React, Node.js) with expertise in Next.js and Tailwind CSS.
        Committed to transforming ideas into elegant and high-performance web
        applications. Let's collaborate to create immersive digital experiences!
      </p>
    </div>
  );
}

export default AboutMe;
