import React from 'react';
import './Header.css';
import logo from '../logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Koya Logo" />
        </div>
        
        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#team">Team Koya</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        
        {/* Contact Button */}
        <a href="#contact" className="contact-btn">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
