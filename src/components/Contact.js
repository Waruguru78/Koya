import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate(); // Hook for navigation

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_eqfu6vc',
        'template_v8jne88',
        form.current,
        'wNIIiOaxnSdPUb8oi'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          navigate('/'); // Navigate back to the home page
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="user_phone" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div>
          <label htmlFor="course">Select Course:</label>
          <select id="course" name="user_course">
            <option value="Full Stack Web Development">Web Development</option>
            <option value="Data Science & Analysis">Data Science</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Cloud Computing">Cloud Computing</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
