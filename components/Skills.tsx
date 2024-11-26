import React from "react";

function Skills() {
  return (
    <div className="py-5 ">
      <h1
        className="text-2xl leading-loose md:text-4xl md:leading-relaxed text-center"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        I SPECIALIZE IN A<br /> RANGE OF 💪🏿 SKILLS
      </h1>
      <div className="grid md:grid-cols-3 gap-10 p-10">
        <div className="border-2 border-[#507415] text-center py-14 rounded-xl space-y-5">
          <img src="/images/frontend.png" className="mx-auto self-center" />
          <h2 className="text-lg md:text-2xl">Front-end Development</h2>
        </div>
        <div className="border-2 border-[#507415] text-center py-14 rounded-xl space-y-5">
          <img src="/images/backend.png" className="mx-auto self-center" />
          <h2 className="text-lg md:text-2xl">Backend Development</h2>
        </div>
        <div className="border-2 border-[#507415] text-center py-14 rounded-xl space-y-5">
          <img src="/images/training.png" className="mx-auto self-center" />
          <h2 className="text-lg md:text-2xl">Technical Writing</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
