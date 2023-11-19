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
    <div
      id="contact"
      className="bg-cover bg-[url('/images/blurs/mobile-contact.png')] lg:bg-[url('/images/blurs/contact.png')] pt-44 pb-16"
    >
      <div className=" mx-auto w-10/12 ">
        <h1 className="border md:px-24 py-4 my-10 text-center mx-auto w-10/12 md:w-fit text-3xl lg:text-5xl xl:lg:text-6xl">
          Let's talk
        </h1>
        <form className="flex font-poppins-extralight text-2xl lg:text-4xl flex-col gap-8 lg:gap-14 xl:gap-20 ">
          <input
            type="email"
            placeholder="Email"
            className="py-5 border-b-2 text-center placeholder:text-white focus:outline-none bg-inherit"
          />
          <input
            type="text"
            placeholder="Message"
            className="py-5 border-b-2 text-center placeholder:text-white focus:outline-none bg-inherit"
          />
          <button
            type="submit"
            className="border font-poppins border-dashed px-24 md:my-0 my-6 py-4 text-center mx-auto w-fit dashed-border text-2xl lg:text-5xl xl:text-6xl"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
