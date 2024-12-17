import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../Tech.png';

const Footer = () => {
    const [events, setEvents] = useState([]);

    // Fetch events from the backend API
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/events'); // Footer.js
                const data = await response.json();
                console.log('Fetched events:', data); // Debugging log
                setEvents(data); // Store the fetched events
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <footer className="footer-container">
            {/* Footer Content */}
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={logo} alt="Koya School Logo" className="footer-logo" />
                    <p className="footer-address">
                        KOYA SCHOOL<br />
                        123 Tech Avenue<br />
                        Nairobi 00100<br />
                        info@koyaschool.com<br />
                        +254712345678
                    </p>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>

                {/* Company Links */}
                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Lunar Blog</li>
                        <li>Our Specialists</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Courses Links */}
                <div className="footer-links">
                    <h4>Courses</h4>
                    <ul>
                        <li>Software Development</li>
                        <li>Data Science & Analysis</li>
                        <li>Cyber Security</li>
                        <li>UI/UX Design</li>
                        <li>Mobile App Development</li>
                        <li>Cloud Computing</li>
                    </ul>
                </div>

                {/* Upcoming Events */}
                <div className="footer-links">
                    <h4>Upcoming Events</h4>
                    <ul>
                        {events.length > 0 ? (
                            events.map((event) => (
                                <li key={event._id}>
                                    <Link to={`/events/${event._id}`}>
                                        {event.Title}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li>No upcoming events</li>
                        )}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
