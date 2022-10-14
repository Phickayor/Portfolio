import React from "react";
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            cumque error quaerat quia sapiente ipsam minus molestiae labore
            veritatis asperiores, assumenda iusto similique eaque.
          </p>

          <label>Name</label>
          <input type="text" />
          <label>E-mail</label>
          <input type="text" />
          <label>Messages</label>
          <textarea></textarea>
          <div className="hireBtn">
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div class="contactIcons">
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
