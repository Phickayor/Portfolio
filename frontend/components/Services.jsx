import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
function Services(props) {
  const [content, setContent] = useState("Web Development");
  const handleService = (e) => {
    var service = e.target.value;
    service == "" ? (service = e.target.innerHTML) : (service = e.target.value);
    setContent(service);
  };
  useEffect(() => {
    Aos.init();
  });
  return (
    <div id="services">
      <h1
        data-aos="fade-right"
        data-aos-duration="1500"
        className="text-5xl font-semibold"
      >
        WHAT I DO
      </h1>
      <div className="my-10">
        <ul className="hidden lg:flex text-xl rounded-xl px-5 gap-4 font-semibold py-2 w-fit text-black bg-purple-50">
          <li
            onClick={handleService}
            className={`cursor-pointer px-4 py-3 rounded-xl`}
          >
            Web Development
          </li>
          <li
            onClick={handleService}
            className={`cursor-pointer px-4 py-3 rounded-xl`}
          >
            Web Maintenance
          </li>
          <li
            onClick={handleService}
            className={`cursor-pointer px-4 py-3 rounded-xl`}
          >
            Web Applications
          </li>
        </ul>
        {/* MOBILE SERVICE HEADER  */}
        <select
          onChange={handleService}
          className={`text-black flex lg:hidden outline-none text-lg rounded-xl px-5  gap-4 font-semibold py-3 cursor-pointer bg-purple-50`}
        >
          <option>Web Development</option>
          <option >Web Maintenance</option>
          <option>Web Applications</option>
        </select>
        <div className="py-5 mx-2 lg:mx-4 text-lg font-light">
          {content == "Web Development" ? (
            <p data-aos="fade-down" data-aos-duration="1500">
              I specialize in creating professional and engaging websites that
              meet your unique requirements. From designing the layout to
              implementing interactive features, I ensure a seamless user
              experience that captivates your audience. With expertise in coding
              languages and modern web development frameworks, I bring your
              vision to life.
            </p>
          ) : content == "Web Maintenance" ? (
            <p data-aos="fade-down" data-aos-duration="1500">
              Keeping your website up-to-date and running smoothly is essential
              for your online presence. I provide comprehensive web maintenance
              services to ensure your website remains secure, functional, and
              optimized for performance. From regular updates and backups to
              troubleshooting issues and fixing bugs, I take care of the
              technical aspects so you can focus on your core business.
            </p>
          ) : (
            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              className="ease-in-out duration-300"
            >
              Elevate your online presence with custom web applications tailored
              to your specific needs. I develop robust and scalable web
              applications that streamline your business processes, enhance user
              engagement, and drive growth. Using cutting-edge technologies and
              following best practices, I deliver intuitive and feature-rich web
              applications that empower your organization.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
