// src/components/About.js
import React from 'react';
import './About.css'; // Import the CSS file for styling
import missionImage from '../mission.jpg';  // Replace with actual image paths
import goalsImage from '../goals.jpg';
import strategyImage from '../strategy.jpg';
import valuesImage from '../values.jpg';

const About = () => {
    return (
        <div className="about">
            <h2 className="about-heading">About Koya School</h2>
            <div className="about-container">
                <div className="about-cards">
                <div className="about-card">
                    <img src={missionImage} alt="Our Mission" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Our Mission</h3>
                        <p>To empower young women through cutting-edge tech education, <br />fostering confidence and skills for success in the tech landscape.</p>
                    </div>
                </div>

                <div className="about-card indented">
                    <img src={goalsImage} alt="Goals" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Goals</h3>
                        <p>To cultivate a nurturing environment that equips women with the skills and confidence needed to excel in technology careers,<br /> ensuring they are industry-ready upon graduation.</p>
                    </div>
                </div>

                <div className="about-card">
                    <img src={strategyImage} alt="Strategy" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Strategy</h3>
                        <p>We prioritize high-quality, hands-on learning experiences, by partenering with industry leaders. We ensure our curriculum meets job market demands, through mentorship, workshops and community engagement, we create pathways for our students' suv=ccess in tech careers.</p>
                    </div>
                </div>

                <div className="about-card indented">
                    <img src={valuesImage} alt="Our Values" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Our Values</h3>
                        <p>Koya School embraces empowerment, inclusivity, innovation, collaboration and integrity, craeting a nurturing space where every woman can excel and make her mark in the tech industry.</p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default About;
