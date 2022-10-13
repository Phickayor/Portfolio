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
        <div class="contactIcons">
          <a href="qq">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="qq">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="qq">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="qq">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}
