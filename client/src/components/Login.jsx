import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';
import SignUp from './SignupPage';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your login logic here, such as API calls
    console.log('Form submitted with data:', formData);
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='btn login-btn' type="submit">Login</button>
      </form>
      <h4 style= { {marginTop: "10px", marginRight: '10px', display: "inline-block"} } >Don't have an account?  </h4>
      <Link to= "/signup" style={ {display: "inline-block"} }> Sign up </Link>
    </div>
  );
};

export default Login;
