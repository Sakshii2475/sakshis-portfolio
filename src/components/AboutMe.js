// src/components/AboutMe.js
import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-me-section">
      <div className="about-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Hello! I'm Sakshi Bari, a Computer Engineer with a strong
            foundation in software development and a passion for creating
            impactful and efficient solutions.
          </p>
        
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;