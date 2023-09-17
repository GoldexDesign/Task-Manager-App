import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons from react-icons
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Goldex Design & Development</p>
      </div>

      <div className="contact">
        <p>Contact Us:</p>
        <a href="mailto:zlatkoskoric@gmail.com">zlatkoskoric@gmail.com</a>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/zlatko-skoric">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/GoldexDesign">
          <FaGithub size={32} />
        </a>
        <a href="https://zlatkoresume.netlify.app/">
          <img className="logo" src="/GDlogoZutiProvidni.svg" alt="Your Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
