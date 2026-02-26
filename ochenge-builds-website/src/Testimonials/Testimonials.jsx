import React, { useState } from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Project Manager",
      text: "Henry's ability to blend 3D aesthetics with functional code is rare. He transformed our landing page into an immersive experience.",
      image: "https://i.pravatar.cc/150?u=alex"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Startup Founder",
      text: "Working with OualiCode was seamless. The attention to detail in the UI responsiveness across all devices was impressive.",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: 3,
      name: "Marcus Thorne",
      role: "Lead Developer",
      text: "Clean code, modern design, and great communication. One of the best frontend collaborators I've worked with this year.",
      image: "https://i.pravatar.cc/150?u=marcus"
    }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section className="testi-section">
      <div className="testi-header">
        <h5>Kind Words</h5>
        <h2>What People <span>Say</span></h2>
      </div>

      <div className="testi-container">
        <button className="testi-nav prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="testi-card">
          <div className="testi-icon">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <p className="testi-text">"{reviews[index].text}"</p>
          <div className="testi-user">
            <img src={reviews[index].image} alt={reviews[index].name} />
            <div className="user-info">
              <h4>{reviews[index].name}</h4>
              <p>{reviews[index].role}</p>
            </div>
          </div>
          <div className="testi-card-glow"></div>
        </div>

        <button className="testi-nav next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="testi-dots">
        {reviews.map((_, i) => (
          <div key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)}></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;