import Link from "next/link";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

function Experience() {
  return (
    <div>
      <h1
        className="text-2xl leading-loose md:text-4xl max-w-fit md:leading-relaxed"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        LET ME WALK YOU THROUGH
        <br />
        MY EXPERIENCE
      </h1>
      <div className="py-8 flex flex-col gap-5">
        <div>
          <div className="flex justify-between">
            <h1
              className="text-lg uppercase md:text-2xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              G<span className="font-poppins">4</span>L STUDIOS LIMITED – Lagos
              (remote)
            </h1>
            <span className="font-poppins md:text-base self-center text-sm">
              Feb 2024 — Present
            </span>
          </div>
          <div className="font-swt-light text-lg font-loose py-6 space-y-4">
            <label>Frontend Developer – E-Learning Provider</label>
            <li data-aos="fade-up" data-aos-duration="1000">
              Contributed to the front-end development of a comprehensive
              e-learning platform designed to support multiple user roles
              including students, administrators, and teachers.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Implemented user registration and authentication features for
              students, administrators, and teachers.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Developed an intuitive interface that grants administrators full
              access to all site functionalities, allowing them to efficiently
              manage users and subjects.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Created robust tools for teachers to upload and organize study
              materials based on the curriculum, facilitating a seamless
              educational experience for students.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Engineered the platform to present tailored content to students
              based on their grade level, ensuring that each student sees
              relevant information upon login.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Ensured the platform’s versatility by making it reusable and
              easily adaptable for different schools, enhancing its scalability
              and usability across various educational institutions
            </li>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1
              className="text-lg md:text-2xl uppercase"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              TRIPPAYER – Lagos (remote)
            </h1>
            <span className="font-poppins md:text-base self-center text-sm">
              Feb 2023 — Nov 2023
            </span>
          </div>
          <div className="font-swt-light text-lg font-loose py-6 space-y-4">
            <label>Web Developer – Transportation & Logistics Providers.</label>
            <li data-aos="fade-up" data-aos-duration="1000">
              Developed an informative website providing comprehensive
              information about the company.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Integrated a booking system enabling users to:
            </li>
            <ul
              className="ml-10 list-disc"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <li>Book rides instantly.</li>
              <li>Schedule rides for future dates.</li>
              <li>Make payments seamlessly through the platform.</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1
              className="text-lg md:text-2xl uppercase"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              BIg Circle – Lagos (remote)
            </h1>
            <span className="font-poppins md:text-base self-center text-sm">
              Jan 2024 – Present
            </span>
          </div>
          <div className="font-swt-light text-lg font-loose py-6 space-y-4">
            <label>Full-stack Web Developer – Social Networking Site.</label>
            <li data-aos="fade-up" data-aos-duration="1000">
              Developed a dynamic platform that enables users to connect with
              others who share similar interests, incorporating advanced social
              networking features.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Designed an intuitive user interface that facilitates easy user
              registration and profile creation.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Implemented robust search and matching algorithms to help users
              find and connect with individuals who have similar interests and
              hobbies.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Implemented robust search and matching algorithms to help users
              find and connect with individuals who have similar interests and
              hobbies.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Integrated a real-time chat feature using WebSocket technology,
              allowing users to engage in instant messaging and live
              conversations seamlessly.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Developed personalized user dashboards that provide
              recommendations for new connections and relevant interest groups.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Ensured data security and user privacy by implementing secure
              authentication and data encryption measures.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Optimized the site for performance and scalability, ensuring
              smooth operation under high user loads and providing a consistent
              user experience across various devices and platforms.
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              Conducted extensive user testing and feedback sessions to
              continually enhance and refine the platform’s features and
              usability.
            </li>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Link
            href="/cv.pdf"
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
    </div>
  );
}

export default Experience;
