import React from "react";

function Links() {
  return (
    <div className="flex justify-between [&>*]:py-5 text-3xl [&>*]:border-2 [&>*]:border-dashed [&>*]:w-full gap-20 text-center">
      <div className="flex gap-5 justify-center">
        <img src="/images/icons/socials.svg" alt="" className="self-center" />
        <span>Socials</span>
      </div>
      <div className="flex gap-5 justify-center">
        <img src="/images/icons/cv.svg" alt="" className="self-center" />
        <span>Access Cv</span>
      </div>
      <div className="flex gap-5 justify-center">
        <img src="/images/icons/projects.svg" alt="" className="self-center" />
        <span>Projects</span>
      </div>
    </div>
  );
}

export default Links;
