import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    OTP: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/verifyCode', formData);
      if(response.status == 400){
        alert('OTP Verification failed.');
        return;
      }
      alert('Verification successful!, N0w Login');
;

      window.location.assign('login')
      // Redirect or navigate to a different page upon successful login
    } catch (error) {
      if(error.response.status == 400){
        alert('OTP Verification failed.');
        return;
      }
      console.error('Login failed:', error.response);
      alert("Login Failed")
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome back to CarConnect</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>OTP:</label>
          <input
            type="text"
            name="OTP"
            value={formData.OTP}
            onChange={handleChange}
            required
          />
        </div>
        <button className='btn login-btn' type="submit">Verify</button>
      </form>
      <h4 style={{ marginTop: "10px", marginRight: '10px', display: "inline-block" }}>Don't have an account? </h4>
      <Link to="/signup" style={{ display: "inline-block" }}> Sign up </Link>
    </div>
  );
};

export default Login;
