import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faContactCard,
  faEnvelope,
  faPhone,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Contact(props) {
  const nameContainer = useRef();
  const mailContainer = useRef();
  const messageContainer = useRef();
  const numberContainer = useRef();
  const subjectContainer = useRef();
  const phone = (
    <FontAwesomeIcon icon={faPhone} className="text-white text-2xl p-4" />
  );
  const contact = (
    <FontAwesomeIcon icon={faContactCard} className="self-center" />
  );
  const mail = (
    <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl p-4" />
  );
  const github = (
    <FontAwesomeIcon
      icon={faGithub}
      className="font-semibold text-4xl  hover:text-purple-500"
    />
  );
  const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin" />;
  const instagram = (
    <FontAwesomeIcon
      icon={faInstagram}
      className="font-semibold hover:text-purple-500 text-4xl"
    />
  );
  const linkedin = (
    <FontAwesomeIcon
      icon={faLinkedinIn}
      className="font-semibold  hover:text-purple-500 text-4xl"
    />
  );
  const twitter = (
    <FontAwesomeIcon
      icon={faTwitter}
      className="font-semibold  hover:text-purple-500 text-4xl"
    />
  );
  const countdown = (
    <FontAwesomeIcon icon={faClock} className="text-white text-2xl p-4" />
  );
  const [load, setLoad] = useState();
  function HandleSubmit(e) {
    e.preventDefault();
    setLoad(spin);
    var name = nameContainer.current.value;
    var email = mailContainer.current.value;
    var message = messageContainer.current.value;
    var number = numberContainer.current.value;
    var subject = subjectContainer.current.value;
    fetch("https://portfolio-e18p.onrender.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message, number, subject })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.info === "success") {
          nameContainer.current.value = "";
          mailContainer.current.value = "";
          numberContainer.current.value = "";
          subjectContainer.current.value = "";
          messageContainer.current.value = "";
          alert(`Hey ${name}, your message has been delivered successfully`);
        } else {
          alert(`An error occured, check your internet connection`);
        }
        setLoad("");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occured, check your internet connection and try again");
        setLoad("");
      });
  }

  useEffect(() => {
    Aos.init();
  });

  return (
    <div id="contact" className="py-2">
      <h1
        data-aos="fade-right"
        data-aos-duration="1500"
        className="text-5xl font-semibold text-right"
      >
        CONTACT
      </h1>
      <div className="lg:flex mt-10 gap-5">
        <div className="self-center lg:px-5">
          <h1 className="text-3xl lg:text-5xl font-medium py-4 ">
            Get in touch with me
          </h1>
          <p>
            Get in touch easily using the contact form. I'm here to assist you
            with any questions or project discussions. Let's connect!
          </p>
          <ul className="space-y-6 self-center my-6">
            <li className="flex space-x-2">
              <h1 className="rounded-full w-14 h-14 bg-[#273270]">{mail}</h1>
              <div>
                Email
                <br />
                jetawof@gmail.com
              </div>
            </li>
            <li className="flex space-x-2">
              <h1 className="rounded-full w-14 h-14 bg-[#273270]">{phone}</h1>
              <div>
                Call Us <br></br>
                (+234) 703 104 1271
              </div>
            </li>
            <li className="flex space-x-2">
              <h1 className="rounded-full w-14 h-14 bg-[#273270]">
                {countdown}
              </h1>
              <div>
                Address <br /> 2, Osota Ijede, Lagos, Nigeria.
              </div>
            </li>
          </ul>
        </div>
        <form
          className={`bg-${props.background} text-${props.color} lg:p-10 p-6 rounded-xl space-y-6`}
          onSubmit={HandleSubmit}
        >
          <div className="flex space-x-5">
            <input
              ref={nameContainer}
              type="text"
              autoFocus={true}
              required
              placeholder="Your name*"
              className={`bg-inherit focus:outline-purple-500 rounded-xl border-2 px-5 p-3 w-1/2`}
            />
            <input
              ref={mailContainer}
              type="email"
              required
              placeholder="Email*"
              className={`bg-inherit focus:outline-purple-500 rounded-xl border-2 px-5 p-3 w-1/2`}
            />
          </div>
          <div className="flex space-x-5">
            <input
              ref={numberContainer}
              type="tel"
              required
              placeholder="Phone No.*"
              className={`bg-inherit focus:outline-purple-500 rounded-xl border-2 px-5 p-3 w-1/2`}
            />
            <input
              ref={subjectContainer}
              type="text"
              required
              placeholder="Subject*"
              className={`bg-inherit focus:outline-purple-500 rounded-xl border-2 px-5 p-3 w-1/2`}
            />
          </div>
          <textarea
            ref={messageContainer}
            required
            className={`bg-inherit focus:outline-purple-500 rounded-xl border-2 px-5 p-3 w-full lg:h-40`}
            placeholder="Your Message*"
          />
          <button
            type="submit"
            className={`bg-${props.color} hover:bg-purple-700 text-${props.background} hover:text-${props.color} duration-300  hover:scale-105 px-5 py-3 text-sm rounded-lg `}
          >
            {load} Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
