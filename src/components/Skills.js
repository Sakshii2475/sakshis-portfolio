// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Java' },
    { name: 'C' },
    { name: 'Python' },
    { name: 'SQL' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;