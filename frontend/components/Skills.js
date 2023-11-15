import { Oswald } from "next/font/google";
import React, { useEffect } from "react";
const oswald = Oswald({ weight: "700", subsets: ["latin"] });
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export default function Skills(props) {
  const languages = ["HTML", "CSS", "JavaScript"];
  const frameworks = ["TailwindCSS", "W3CSS", "Express", "Nextjs"];
  const libraries = ["JQuery", "ReactJs"];
  const others = ["Git + Github", "Node.js"];
  const tech = <FontAwesomeIcon icon={faMicrochip} />;
  const checkMark = (
    <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} />
  );
  useEffect(() => {
    Aos.init();
  });
  return (
    <div id="skills" className="py-5 text-black">
      <h1
        data-aos="fade-right"
        data-aos-duration="1500"
        className={`text-${props.color} text-5xl font-semibold text-right`}
      >
        MY STACK
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 ">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-lg border cursor-pointer hover:scale-105 ease-in-out duration-300 bg-purple-50 border-purple-700 rounded-xl p-5 space-y-5 lg:space-y-10"
        >
          <h3 className="text-2xl font-semibold text-purple-700">Languages</h3>
          <ul className="space-y-2">
            {languages.map((language, index) => (
              <li key={index}>
                {checkMark} &nbsp;{language}
              </li>
            ))}
          </ul>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="text-lg border cursor-pointer hover:scale-105 ease-in-out duration-300 bg-purple-50 border-purple-700 rounded-xl p-5 space-y-5 lg:space-y-10"
        >
          <h3 className="text-2xl font-semibold text-purple-700">Frameworks</h3>
          <ul className="space-y-2">
            {frameworks.map((language, index) => (
              <li key={index}>
                {checkMark} &nbsp;{language}
              </li>
            ))}
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-lg border cursor-pointer hover:scale-105 ease-in-out duration-300 bg-purple-50 border-purple-700 rounded-xl p-5 space-y-5 lg:space-y-10"
        >
          <h3 className="text-2xl font-semibold text-purple-700">Libraries</h3>
          <ul className="space-y-2">
            {libraries.map((language, index) => (
              <li key={index}>
                {checkMark} &nbsp;{language}
              </li>
            ))}
          </ul>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="text-lg border cursor-pointer hover:scale-105 ease-in-out duration-300 bg-purple-50 border-purple-700 rounded-xl p-5 space-y-5 lg:space-y-10"
        >
          <h3 className="text-2xl font-semibold text-purple-700">
            Other Technologies
          </h3>
          <ul className="space-y-2">
            {others.map((other, index) => (
              <li key={index}>
                {checkMark} &nbsp;{other}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
