// src/components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Sakshi Bari
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a Computer Engineer.
        </motion.p>
        <motion.div
          className="hero-social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://github.com/Sakshii2475"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.codechef.com/users/sak_231101133"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeChef"
          >
            <FontAwesomeIcon icon={faCode} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/sakshi-bari-012525291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:your.email@example.com" /* REPLACE WITH YOUR ACTUAL EMAIL */
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;