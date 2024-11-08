import React from 'react';
import "../styles/footer.css";
import logo from '../images2/logo.jpg'; // Ensure you have the logo image in your assets folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Helpful Links */}
        <div className="footer-links">
          <h4>Helpful Links</h4>
          <ul>
            <li><a href="https://www.womensafety.gov.in" target="_blank" rel="noopener noreferrer">Women's Safety Resources</a></li>
            <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
            <li><a href="/contact" className="footer-link">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
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

        {/* Footer Text (Copyright) */}
        <div className="footer-text">
          <p>© 2024 SafeSistersLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



