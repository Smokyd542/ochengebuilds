import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          Henry<span>Ochenge.</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button className="theme-toggle">
            <FontAwesomeIcon icon={faMoon} />
          </button>
          

          <a href="#contact"><button className="hire-btn">Hire Me</button></a>
          

          {/* Hamburger Menu Icon */}
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-links">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            <button className="hire-btn mobile-hire">Hire Me</button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;