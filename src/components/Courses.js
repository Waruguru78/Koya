import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Courses.css'; // Import the CSS file for styling

const Courses = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle navigation
    const handleNavigate = () => {
        navigate('/allcourses'); // Navigate to AllCourses page
    };

    return (
        <div className="courses">
            <div className="courses-layout">
                <div>
                    <div className="headline"></div>
                    <h2 className="courses-heading">Our Courses</h2>
                    <div>
                        <button className="view-all-btn" onClick={handleNavigate}>
                            View All Courses
                        </button>
                    </div>
                </div>
                
                {/* Course Cards Container */}
                <div className="courses-cards">
                    {/* Software Development Card */}
                    <div className="course-card">
                        <h3>FullStack Web Development</h3>
                        <p>Our software development course teaches students to design and code applications, preparing them to solve real-world problems.</p>
                        <button className="read-more-btn">Read More</button>
                    </div>

                    {/* Data Science & Analytics Card */}
                    <div className="course-card">
                        <h3>Data Science & Analytics</h3>
                        <p>Our data science program enables students to extract insights from data, empowering them to make informed, strategic decisions.</p>
                        <button className="read-more-btn">Read More</button>
                    </div>

                    {/* AI & Machine Learning Card */}
                    <div className="course-card">
                        <h3>Artificial Intelligence & Machine Learning</h3>
                        <p>Understanding the fundamentals of AI and Machine learning, working with algorithms, neural networks and real-world AI applications.</p>
                        <button className="read-more-btn">Read More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Courses;
