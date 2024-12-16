import React, { useState } from 'react';
import './Header.css';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for active class detection

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Koya Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="courses"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </ScrollLink>
          </li>
        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
