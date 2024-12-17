import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is installed
import './AllCourses.css'; // Import your CSS file for this page

const AllCourses = () => {
    const [courses, setCourses] = useState([]);  // State to store courses data
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch courses data when the component mounts
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses'); // API endpoint for courses
                setCourses(response.data); // Set the fetched courses data
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error("Error fetching courses data:", error);
                setLoading(false); // Set loading to false even in case of error
            }
        };

        fetchCourses();
    }, []); // Empty dependency array to run the effect once when the component mounts

    // Render loading state if data is still being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="all-courses-page">
            {/* Heading Section */}
            <header className="page-header">
                <h1>Koya School Courses</h1>
                <p>Code Your Future</p>
            </header>

            {/* Grid of Courses */}
            <div className="courses-grid">
                {courses.map((course, index) => (
                    <div key={index} className="course-card">
                        <h3>{course.Name}</h3> {/* Changed from title to Name */}
                        <p>{course.Description}</p> {/* Changed from description */}
                        <p><strong>Duration:</strong> {course.Duration}</p> {/* Added Duration */}
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
