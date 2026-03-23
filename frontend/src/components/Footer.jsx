import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">
          Designed & Built by <span className="highlight-name">Abhiram</span>
        </p>
        <p className="footer-year">© {currentYear} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
