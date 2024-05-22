import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2024 Artesia Designs. All rights reserved.</p>
        <ul className='footer-links'>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className='footer-social'>
        <a href="https://www.instagram.com/artesiadesigns/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
