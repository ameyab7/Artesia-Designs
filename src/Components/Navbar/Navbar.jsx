import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar container dark-nav">
      <div className="navbar-logo">
        <img src={logo} alt="Artesia Designs Logo" className="logo-image" />
        <h1 className="logo-text">Artesia Designs</h1>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#contact">Connect</a></li>
      </ul>
      <div className={`social-media-icons ${isOpen ? 'open' : ''}`}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/artesiadesigns/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
