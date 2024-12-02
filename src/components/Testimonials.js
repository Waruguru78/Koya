import React, { useState } from 'react';
import './Testimonial.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const testimonials = [
    {
        quote: "Koya Tech School has been a game-changer for me. The female-focused curriculum and mentorship from industry leaders have empowered me to pursue a career in tech confidently.",
        name: "Emma Thompson",
        title: "Graduate, Software Development Program",
    },
    {
        quote: "At Koya Tech, I found a community of strong, supportive women. The skills I’ve gained in data analysis are just the beginning—I’ve also made lifelong friendships that inspire me every day.",
        name: "Maya Singh",
        title: "Current Student, Data Science Program",
    },
    {
        quote: "Koya Tech School is more than just a place to learn; it's a place where girls like me can break barriers in technology. I’m proud to be part of a school that champions women in STEM!",
        name: "Zoe Martinez",
        title: "Current Student, UI/UX Design",
    },
];


const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const { quote, name, title } = testimonials[currentIndex];

    return (
        <div className="test">
             <div className="testimonial-section">
            <h2 className="testimonial-heading">Our Testimonials</h2>
            <div className="head-line"></div>
            <br />
            <div className="testimonial-card">
                <i className="fa-solid fa-comments" style={{ fontSize: '100px', color: '#4d0581', marginRight: '20px' }}></i>
                <div className="testimonial-content">
                    <div className="quote-mark">“</div>
                    <p className="testimonial-quote">{quote}</p>
                    <div className="attribution">
                        <p className="author-name">{name}</p>
                        <p className="author-title">{title}</p>
                    </div>
                </div>
            </div>
            <div className="navigation-arrows">
                <button className="arrow left-arrow" onClick={handlePrev}>❮</button>
                <button className="arrow right-arrow" onClick={handleNext}>❯</button>
            </div>
        </div>
        </div>
       
    );
};

export default Testimonial;
