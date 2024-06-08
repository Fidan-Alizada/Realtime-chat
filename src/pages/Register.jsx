import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Realtime Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
     
          <button>Sign Up</button>
        </form>
        <p>You do have an account? 
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
