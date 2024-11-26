import React from 'react';
import './Footer.css'; // Import the styling file
import logo from '../logo.png';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="custom-shape-divider-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <></>
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

                <div className="footer-links">
                    <h4>Upcoming Events</h4>
                    <ul>
                        <li>Web Development Bootcamp</li>
                        <li>Data Science Webinar</li>
                        <li>Open House</li>
                        <li>Cyber Security Workshop</li>
                        <li>Alumni Networking Event</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
