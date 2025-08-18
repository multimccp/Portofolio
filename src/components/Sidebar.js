import "../App.css";
import avatar from "../imgs/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Adding the necessary icons to the library
library.add(faEnvelope, faPhone, faGithub, faLinkedin, faInstagram, faFacebook);

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={avatar} alt="avatar" className="avatar" />
      <h1 className="name">Miguel Campos</h1>
      <p className="tagline">Full-stack Developer</p>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> <span>miguelccp@gmail.com</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} /> <span>+351 919562259</span>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="sidebar-separator" />

      {/* Social Links */}
      <div className="social">
        <a href="https://github.com/multimccp" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> 
        </a>
        <a href="https://www.linkedin.com/in/miguel-campos-358965b4/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> 
        </a>
        <a href="https://www.instagram.com/miguelcampos00/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> 
        </a>
        <a href="https://www.facebook.com/miguelccp/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} /> 
        </a>
      </div>
    </aside>
  );
}
