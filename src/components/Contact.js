import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faContactBook } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  const code = <FontAwesomeIcon icon={faBriefcase} />;
  const contact = <FontAwesomeIcon icon={faContactBook} />;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, message })
    }).catch((error) => {
      alert(error);
    });
  };

  return (
    <div id="contact">
      <div className="head">
        <div className="icon">{contact}</div>
        <h1>Contact</h1>
      </div>

      <div className="contactContainer">
        <div className="mapContainer">
          <iframe
            className="map"
            title="map"
            src="https://www.google.com/maps/embed/v1/place?q=tunrose+ijede+ikorodu+lagos&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
        <div className="form">
          <div className="icon hireHead">{code} Hire Me</div>
          <p>
            I hope my portfolio was able to convince you that I am indeed
            perfect for the job at hand, if yes am just a mail away.
          </p>
          <div className="mainForm">
            <form action="localhost:300/api" method="get" onSubmit={submit}>
              <label htmlFor="username">Name</label>
              <input
                type="text"
                required
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="message">Messages</label>
              <textarea
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="hireBtn">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contactIcons">
        <a href="https://github.com/Phickayor">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://wa.me/+2347031041271">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://linkedin.com/in/olufikayomi-jetawo-79633a184">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/@FikayoJetawo">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
