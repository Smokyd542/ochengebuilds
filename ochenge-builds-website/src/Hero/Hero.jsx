import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';
import { assets } from '../assets';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        
        {/* LEFT: SOCIAL SIDEBAR */}
        <div className="social-sidebar">
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <div className="sidebar-line"></div>
        </div>

        {/* MIDDLE: HERO TEXT CONTENT */}
        <div className="hero-text">
          <h5 className="intro-tag">Web Developer & Designer</h5>
          <h1>Hi, I'm <span>Henry</span></h1>
          <p className="hero-desc">
            Crafting immersive, 3D-inspired digital experiences with high performance 
            and modern aesthetics.
          </p>
          
          <div className="hero-btns">

            <button className="btn-main">Download CV <FontAwesomeIcon icon={faDownload} /></button>

             <a href="#contact"><button className="btn-sub">Let's Talk <FontAwesomeIcon icon={faEnvelope} /></button></a>
          </div>
        </div>

        {/* RIGHT: 3D VISUAL PLACEHOLDER */}
        <div className="hero-visual">
          <div className="hero-3d-placeholder">
            <img src={assets.images.me_3d} alt="3D Character" />
            
            <div className="hero-blob"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;