import React from "react";
import AboutMe from "./AboutMe";
import Languages from "./Languages";

function Stacks() {
  return (
    <div className="space-y-16">
      <div className="flex justify-between [&>*]:w-full [&>*]:rounded-[15px] [&>*]:py-14 gap-32 font-ocra">
        <div className="flex flex-col gap-5 justify-center mx-auto text-center border border-green bg-[url('/images/blurs/frontend.png')] bg-cover ">
          <img
            src="/images/icons/stack.svg"
            alt="code icon"
            className="w-fit self-center"
          />
          <h1 className="text-4xl">Frontend</h1>
          <span className="text-xl">110+ projects</span>
        </div>
        <div className="flex flex-col gap-5 justify-center mx-auto text-center border border-purple bg-[url('/images/blurs/backend.png')] bg-cover">
          <img
            src="/images/icons/stack.svg"
            alt="code icon"
            className="w-fit self-center"
          />
          <h1 className="text-4xl">Backend</h1>
          <span className="text-xl">110+ projects</span>
        </div>
      </div>
      <AboutMe/>
      <Languages/>
    </div>
  );
}

export default Stacks;
