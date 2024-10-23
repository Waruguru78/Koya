import React from 'react';
import './AllCourses.css'; // Import your CSS file for this page

const courses = [
    { title: "Fullstack Web Development", description: "Learn to build robust web applications from front to back.", buttonText: "Read More" },
    { title: "UI/UX Design", description: "Master the skills of user experience and interface design.", buttonText: "Read More" },
    { title: "Data Science & Analytics", description: "Unlock the power of data and make informed decisions.", buttonText: "Read More" },
    { title: "AI and Machine Learning", description: "Explore the world of AI and machine learning.", buttonText: "Read More" },
    { title: "Cyber Security", description: "Gain expertise in securing digital environments.", buttonText: "Read More" },
    { title: "Mobile Application Development", description: "Design and develop applications for mobile platforms.", buttonText: "Read More" },
    { title: "Cloud Computing", description: "Understand cloud infrastructure and build scalable applications.", buttonText: "Read More" },
    { title: "Blockchain Development", description: "Delve into blockchain technology and decentralized applications.", buttonText: "Read More" },
    { title: "Digital Marketing", description: "Learn to effectively market products and services online.", buttonText: "Read More" }
];

const AllCourses = () => {
    return (
        <div className="all-courses-page">
            {/* Heading Section */}
            <header className="page-header">
                <h1>Koya School Courses</h1>
                <p>Code Your Future</p>
            </header>

            {/* Wave Divider Between Heading and Courses */}
            <div className="custom-shape-divider-bottom-1729611167">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

            {/* Grid of Courses */}
            <div className="courses-grid">
                {courses.map((course, index) => (
                    <div key={index} className="course-card">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <button className="read-more-btn">{course.buttonText}</button>
                    </div>
                ))}
            </div>

            {/* Bottom Section: "Where Our Courses Can Take You" */}
            <section className="courses-info-section">
                <h2>Where Our Courses Can Take You</h2>
                <p>
                    Our courses are designed to connect girls with real-world tools to excel in tech. Whether you're looking to start a career in software development, cloud computing, or digital marketing, Koya Tech School provides the skills needed to succeed.
                </p>
            </section>
        </div>
    );
};

export default AllCourses;
