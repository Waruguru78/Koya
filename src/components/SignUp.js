import React from 'react';
import './SignUp.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignUp = () => {
    return (
        <div className='signup'>
            <div className='icon'>
            <i class="fa-solid fa-arrow-right-to-bracket" style={{ fontSize: '200px', color: '#4d0581' }}></i>
            </div>
            <div className="text">
            <div className="heading-line"></div>
                <h2>Sign Up for a Free <br /> Course Overview!</h2>
            </div>
            <div className="line">
               <form>
                <input type="text" placeholder="Your Email" />
                <br />
                <button type="submit">Start Your Journey</button>
                </form>  
            </div>
           
        </div>
    );
}

export default SignUp;