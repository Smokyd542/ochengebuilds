import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h5>Have A Question?</h5>
        <h2>Get In <span>Touch</span></h2>
      </div>

      <div className="contact-container">
        
        {/* --- LEFT SIDE: CONTACT INFO --- */}
        <div className="contact-info">
          <div className="info-card">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <h3>Email Me</h3>
            <p>ouali.code@example.com</p>
          </div>

          <div className="info-card">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
            <h3>Location</h3>
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTACT FORM --- */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          
          <button type="submit" className="submit-btn">
            Send Message <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;