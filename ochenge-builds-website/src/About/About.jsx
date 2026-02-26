import React from 'react';
import './About.css';
import { assets } from '../assets';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        
        {/* --- LEFT SIDE: IMAGE AREA --- */}
        <div className="about-visual">
  <div className="image-card">
    <img src={assets.images.meProfile} alt="Henry Profile" className="profile-img" />
  </div>
  {/* The blob provides that 3D glow behind your photo */}
  <div className="about-blob"></div>
</div>

        {/* --- RIGHT SIDE: CONTENT AREA --- */}
        <div className="about-info">
          <h5>Get To Know</h5>
          <h2>About <span>Me</span></h2>
          
          <p>
            I am a developer who loves building things for the web. 
            I focus on making designs feel modern and interactive.
          </p>

          {/* This is the 3-column grid for your stats */}
          <div className="stats-grid">
            
            <div className="stat-item">
              <h3>5+</h3>
              <p>Education</p>
            </div>

            <div className="stat-item">
              <h3>10+</h3>
              <p>Experience</p>
            </div>

            <div className="stat-item">
              <h3>100+</h3>
              <p>Projects</p>
            </div>

          </div>

          <button className="about-btn">Learn More</button>
        </div>

      </div>
    </section>
  );
};

export default About;