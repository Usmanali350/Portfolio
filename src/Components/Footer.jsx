import React from 'react';
import './Footer.css';
import { FaFacebookF, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container text-center">
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" className="footer-icon" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/03416654988" target="_blank" className="footer-icon" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/Usmanali350" target="_blank" className="footer-icon" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">Projects</a>
          <a href="#" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Skills</a>
          <a href="#" className="footer-link">Services</a>
        </div>
        <p className="footer-text">&copy; 2025 Usman Ali | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;