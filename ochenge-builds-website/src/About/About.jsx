import React from 'react';
import './About.css';
import { assets } from '../assets';

const About = () => {
  return (
    <section className="about-section" id="about">
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
           Hello! I'm Henry, a Web Developer dedicated to building functional, scalable, and visually stunning applications. My journey in tech is driven by a simple philosophy: Code should be as beautiful as it is efficient.

With a strong foundation in Frontend Development, I specialize in transforming static designs into dynamic, responsive realities. I thrive in the intersection of logic and creativity, ensuring that every project I touch is optimized for speed, SEO, and, most importantly, the user.
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
              <h3>30+</h3>
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