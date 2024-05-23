// import React, { useState } from 'react';
// import '../styles/style.css'
// import { Link } from 'react-router-dom';
// import SignUp from './SignupPage';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevFormData => {
//       return {
//         ...prevFormData,
//         [name]: value
//       }
//     });
//     console.log(formData)
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can add your login logic here, such as API calls
//     console.log('Form submitted with data:', formData);
//   };

//   return (
//     <div className="login-container">
//       <h2>Welcome back to CarConnect</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button className='btn login-btn' type="submit">Login</button>
//       </form>
//       <h4 style= { {marginTop: "10px", marginRight: '10px', display: "inline-block"} } >Don't have an account?  </h4>
//       <Link to= "/signup" style={ {display: "inline-block"} }> Sign up </Link>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
      // Redirect or navigate to a different page upon successful login
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
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
      <h4 style={{ marginTop: "10px", marginRight: '10px', display: "inline-block" }}>Don't have an account? </h4>
      <Link to="/signup" style={{ display: "inline-block" }}> Sign up </Link>
    </div>
  );
};

export default Login;
