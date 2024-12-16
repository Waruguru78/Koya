import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from '@emailjs/browser';

const SignUp = () => {
  const [email, setEmail] = useState(''); // State to hold the email

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm('service_eqfu6vc', 'template_z5z2o55', e.target, 'wNIIiOaxnSdPUb8oi')
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully! We'll be in touch soon.");
          setEmail(""); // Clear the input field
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className='signup'>
      <div className="text">
        <div className="heading-line"></div>
        <h2>Sign Up for a Free <br /> Course Overview!</h2>
      </div>
      <div className="line">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="user_email"  // This should match the field in your EmailJS template
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Your Email"
            required
          />
          <br />
          <button type="submit">Start Your Journey</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
