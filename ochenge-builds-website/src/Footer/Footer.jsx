import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-unique">
      <div className="footer-main-area">
        <div className="footer-cta">
          <p>Have a project in mind?</p>
          <h2 className="big-text">Let's <span>Connect.</span></h2>
          <a href="mailto:ochengehenry26@gmail.com" className="footer-email">ochengehenry26@gmail.com</a>
        </div>

        <div className="footer-bottom-grid">
          {/* Copyright Area */}
          <div className="footer-copy">
            <p>© {new Date().getFullYear()}HenryOchenge</p>
            <p>Designed with 3D Passion</p>
          </div>

          {/* Social Links as Minimal Circles */}
          <div className="footer-social-links">
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>

          {/* Scroll to Top Button */}
          <div className="footer-top-btn" onClick={scrollToTop}>
            <span>Back to top</span>
            <div className="arrow-circle">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;