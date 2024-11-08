import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© 2024 SafeSistersLife. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>

        <div className="social-media">
          <p>Follow Us:</p>
          <div className="social-icons">
            <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


