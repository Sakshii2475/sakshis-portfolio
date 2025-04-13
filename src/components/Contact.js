// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="contact-info"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Feel free to reach out to me for any opportunities, collaborations, or just a friendly chat!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p>
                Email: <a href="mailto:barisakshi2475@gmail.com">barisakshi2475@gmail.com</a> {/* Replace with your actual email */}
              </p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <p>
                Phone: <a href="tel:+917666560760">+917666560760</a> {/* Replace with your actual phone number */}
              </p>
            </div>
            {/* You can add a contact form here if you want */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;