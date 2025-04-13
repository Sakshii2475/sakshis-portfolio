// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon as ExternalLinkIcon } from '@heroicons/react/24/solid'; // Heroicons v2 syntax for external links
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Akatsuki Project Hub',
      description: 'A web application to manage and organize projects.',
      imageUrl: '/images/akatsuki.png', // Replace with actual image path
      liveLink: 'temporary-projects.vercel.app/', // Add actual live demo link
      codeLink: 'https://github.com/Sakshii2475/temporary-projects.git',
    },
    // Add more projects as needed, following the same structure
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo <ExternalLinkIcon className="icon" />
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  Source Code <ExternalLinkIcon className="icon" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;