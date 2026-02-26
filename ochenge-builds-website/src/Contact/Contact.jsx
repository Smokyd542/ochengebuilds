import React from 'react';
import './Contact.css';
import { assets } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* LEFT SIDE: 3D IMAGE */}
        <div className="contact-visual">
          <div className="contact-image-wrapper">
            <img src={assets.images.contactMe} alt="Contact 3D Character" />
            <div className="contact-glow"></div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="contact-form-container">
          <div className="contact-header">
            <h5>Get In Touch</h5>
            <h2>Contact <span>Me</span></h2>
          </div>

          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="contact-submit">
              Send Message <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;