import React from "react";

function Links() {
  return (
    <div className="flex justify-between [&>*]:py-5 text-md md:text-xl lg:text-3xl [&>*]:border-2 [&>*]:border-dashed [&>*]:w-full gap-5 md:gap-10 lg:gap-20 text-center">
      <div className="hidden sm:flex gap-2 md:gap-5 justify-center">
        <img src="/images/icons/socials.svg" alt="" className="self-center" />
        <span className="self-center">Socials</span>
      </div>
      <div className="flex gap-2 md:gap-5 justify-center">
        <img src="/images/icons/cv.svg" alt="" className="self-center" />
        <span className="self-center">Access Cv</span>
      </div>
      <div className="flex gap-2 md:gap-5 justify-center">
        <img src="/images/icons/projects.svg" alt="" className="self-center" />
        <span className="self-center">Projects</span>
      </div>
    </div>
  );
}

export default Links;
