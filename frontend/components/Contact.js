import React, { useState } from "react";
import Footer from "./Footer";
import baseurl from "@/config/host";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const spinner = <FontAwesomeIcon icon={faSpinner} className="fa-spin" />;
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState("");
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoader(spinner);
    try {
      let res = await fetch(`${baseurl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ mail, message })
      });
      res.ok
        ? (alert("Your message has been sent successfully"),
          setMail(""),
          setMessage(""))
        : alert(
            "An error occured, please try again. If it persists contact developer"
          );
    } catch (error) {
      console.log(error.message);
      alert("An error occured check your internet connection and try again!");
    }
    setLoader("");
  };
  return (
    <div
      id="contact"
      className="bg-cover bg-[url('/images/blurs/mobile-contact.png')] lg:bg-[url('/images/blurs/contact.png')] pt-10 lg:pt-44 space-y-10"
    >
      <div className=" mx-auto w-10/12 ">
        <h1 className="border md:px-24 py-4 my-10 text-center mx-auto w-10/12 md:w-fit text-3xl lg:text-5xl xl:lg:text-6xl">
          Let's talk
        </h1>
        <form
          onSubmit={HandleSubmit}
          className="flex font-poppins-extralight text-2xl lg:text-4xl flex-col gap-4 lg:gap-14 xl:gap-20 "
        >
          <input
            type="email"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
            required
            placeholder="Email"
            className="py-5 border-b-2 text-center placeholder:text-white focus:outline-none bg-inherit"
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="py-5 border-b-2 text-center placeholder:text-white focus:outline-none bg-inherit"
          />
          <button
            type="submit"
            className="border font-poppins border-dashed px-24 md:my-0 my-6 py-4 text-center mx-auto w-fit dashed-border text-2xl lg:text-5xl xl:text-6xl"
          >
            {loader} Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
