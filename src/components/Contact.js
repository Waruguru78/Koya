// In Contact.js
import React from 'react';
import './Contact.css'; // If you have a CSS file

const Contact = () => {
  return (
    <div className="contact-page">
        <h1>Koya Tech</h1>
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="course">Select Course:</label>
          <select id="course" name="course">
            <option value="Full Stack web Development">Web Development</option>
            <option value="Data Science & Analysis">Data Science</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Cyber Security">Cyber SEcurity</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Cloud Computing">Cloud Computing</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact; // Default export
