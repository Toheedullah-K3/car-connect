import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header container">
      <a href="#" className="logo">CarConnect</a>

      <nav className="navbar">
        <ul className="navbar-items">
          <li><Link to="/" className="navbar-item"> Home </Link></li>
          <li><Link to="/admin-cars" className="navbar-item"> Cars </Link></li>
          <li><Link to="/admin-users" className="navbar-item"> Users </Link></li>
          {/* <li><Link to="/contact-us" className="navbar-item"> Users </Link></li> */}
        </ul>
      </nav>

      <div className="header-actions">
        <div className="header-contact">
          <a href="tel:88002345678" className="contact-link">8 800 234 56 78</a>
          <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
        </div>
        
        <Link to="/login" className="btn user-btn" aria-label="Profile">
          <PersonIcon className='person-icon' style={{ fontSize: 30 }} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
