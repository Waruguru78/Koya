import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch testimonials from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  // Handle next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // If testimonials are fetched successfully, display them
  if (!testimonials.length) {
    return <div>Loading testimonials...</div>;
  }

  const { Name, Title, Quote } = testimonials[currentIndex];

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
            <p className="testimonial-quote">{Quote}</p>
            <div className="attribution">
              <p className="author-name">{Name}</p>
              <p className="author-title">{Title}</p>
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
