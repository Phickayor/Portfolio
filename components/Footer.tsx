import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-4 space-y-5">
      <div className="font-swt-bold">
        <h1 className="text-5xl text-center ">LET'S WORK</h1>
        <div className="text-center justify-center flex gap-x-1">
          <span className="text-5xl text-center leading-loose self-center">
            T
          </span>
          <img
            src="/images/me2.jpg"
            className="w-10 h-10 rounded-full object-cover self-center"
          />
          <span className="text-5xl text-center leading-loose self-center">
            GETHER
          </span>
        </div>
        <div className="flex justify-center gap-3">
          <CgArrowTopRight className="inline bg-green rounded-full text-6xl p-3  text-black self-center" />
        </div>
      </div>
      <div className="flex justify-center gap-5 text-green text-3xl">
        <a target="blank" href="https://www.linkedin.com/in/phickayor/">
          <FaLinkedinIn />
        </a>
        <a target="blank" href="https://github.com/phickayor">
          <FaGithub />
        </a>
        <a target="blank" href="https://www.instagram.com/phickayor">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Footer;
