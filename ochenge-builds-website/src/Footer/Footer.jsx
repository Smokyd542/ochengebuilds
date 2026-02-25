import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* LOGO SECTION */}
        <div className="footer-logo">
          Henry<span>Ochenge.</span>
        </div>

        {/* QUICK LINKS */}
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="footer-socials">
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>

        {/* COPYRIGHT AREA */}
        <div className="footer-bottom">
          <hr />
          <p>&copy; {new Date().getFullYear()} OchengeBuilds. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;