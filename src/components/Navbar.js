// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/solid';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Sakshi Bari
        </Link>
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link to="#home" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="#about" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="#skills" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Skills
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="#projects" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="#contact" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;