import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <header className="header container">
      
        <a href="#" className="logo"> CarConnect  </a>

      <nav className="navbar">
        <ul className="navbar-items">
          <li>  <a href="#home" className="navbar-item" data-nav-link> Home </a>  </li>
          <li>  <a href="#featured-car" className="navbar-item"> Explore cars </a>  </li>
          <li>  <a href="#" className="navbar-item"> About us </a>  </li>
          <li>  <a href="#blog" className="navbar-item"> Blog </a>  </li>
        </ul>
      </nav>

      <div className="header-actions">
        <div className="header-contact">
          <a href="tel:88002345678" className="contact-link">8 800 234 56 78</a>
          <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
        </div>
        
        <a href="#" className="btn">
          <button className="btn navbar-btn">Explore cars</button>
        </a>

        <Link to="/login" className="btn user-btn" aria-label="Profile">
            <PersonIcon className='person-icon' style={{ fontSize: 30 }} />
        </Link>
      </div>
  </header>
    </>
  );
}

export default Navbar;