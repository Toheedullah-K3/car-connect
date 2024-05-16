import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
    // You can add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here, such as API calls
    alert('Form submitted with data:', formData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up for CarConnect</h2>
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {/* You can add more fields here */}
        <button className= "btn signup-btn" type="submit">Sign Up</button>
      </form>
      <h4 style= { {marginTop: "10px", marginRight: '10px', display: "inline-block"} } > Already have an account? </h4>
      <Link to= "/login" style={ {display: "inline-block"} }> Log in </Link>
    </div>
  );
};

export default SignUp;
