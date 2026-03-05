import React from 'react';
import './Socials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  const socialLinks = [
    { icon: faFacebookF, link: "https://www.facebook.com/profile.php?id=61587113324215", color: "#1877F2", name: "Facebook" },
    { icon: faInstagram, link: "https://www.instagram.com/ochengebuilds/", color: "#E4405F", name: "Instagram" },
    { icon: faTiktok, link: "https://www.tiktok.com/@ochengebuilds?is_from_webapp=1&sender_device=pc", color: "#000000", name: "TikTok" },
    { icon: faWhatsapp, link: "https://wa.me/254796006449", color: "#25D366", name: "WhatsApp" },
    { icon: faLinkedinIn, link: "https://www.linkedin.com/in/henry-ochenge-806a94388/", color: "#0077B5", name: "LinkedIn" },
  ];

  return (
    <section className="socials-section">
      <div className="socials-header">
        <h2>Follow <span>My Journey</span></h2>
        <p>Stay updated with my latest projects and daily code life.</p>
      </div>
      
      <div className="socials-grid">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.link} 
            target="_blank" 
            rel="noreferrer" 
            className="social-card"
            style={{ "--hover-clr": social.color }}
          >
            <div className="social-icon-box">
              <FontAwesomeIcon icon={social.icon} />
            </div>
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;