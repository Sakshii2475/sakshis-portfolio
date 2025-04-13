import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://github.com/Sakshii2475"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/sakshi-bari-012525291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          {/* You can add more social media links here */}
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Sakshi Bari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;