import React from 'react';
import './Footer.css'; // We will add the CSS here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 SafeSistersLife. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


