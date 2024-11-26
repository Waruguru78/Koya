import React from 'react';
import './why.css';
import whyImage from '../why.jpg'; // Import your astronaut image

const Why = () => {
    return (
        <div className="why-container">
            <div className="text-card">
                <h2 className="why-heading">Why Koya Tech?</h2>
                <i className="fa-solid fa-graduation-cap" style={{ fontSize: '50px', color: '#4d0581', marginBottom: '20px' }}></i>
                <p>
                    At Koya Tech School, we understand the importance of empowering women in technology. Our personalized approach ensures that each student receives the support they need to thrive. With hands-on learning, industry partnerships, and a strong community, we are dedicated to equipping you with the skills and confidence necessary for a successful career in tech. Join us to unlock your potential and shape your future!
                </p>
            </div>
            <div className="image">
                <img src={whyImage} alt="Koya Tech School" />
            </div>
        </div>
    );
}

export default Why;
