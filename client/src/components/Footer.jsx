import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className='foot-main'>
        <div className='foot1'>
          <ul>
            <li><h2>Address</h2></li>
            <li>Sector H-10</li>
            <li>IIUI University</li>
            <li>0314-7172656</li>
            <li> abc@iiu.edu.pk</li>
          </ul>
        </div>
        <div className='foot2'>

          <ul>
            <li><h2>Pages</h2></li>
            <li><Link to= "/" className='foot2-items'>Home</Link></li>
            <li><Link to= "/about-us" className='foot2-items'>About Us</Link></li>
            <li><Link to= "/contact-us" className='foot2-items'>Contact Us</Link></li>
            <li><Link to= "/signup" className='foot2-items'>Sign Up</Link></li>

          </ul>
        </div>
        <div className='foot3'>

          <ul>
            <li><h2>Our Work</h2></li>
            <li>Variety Of Cars</li>
            <li>Best Quality Cars</li>
            <li>Best Price Guarantee</li>
            <li>Phone Reservation</li>
          </ul>
        </div>

        <div className='foot5'>
          <ul>
            <li> <h2>Social Media</h2> </li>
            <div className='socialMediaIconsContainer'>
              <li><a href="https://facebook.com/" className='socialMediaIcons'> <FacebookIcon style={{ fontSize: 24 }} /> </a></li>
              <li><a href="https://instagram.com/" className='socialMediaIcons'> <InstagramIcon style={{ fontSize: 24 }} /> </a></li>
              <li><a href="https://twitter.com/" className='socialMediaIcons'> <XIcon style={{ fontSize: 24 }} /> </a></li>
              <li><a href="https://youtube.com/" className='socialMediaIcons'> <YouTubeIcon style={{ fontSize: 24 }} /> </a></li>
            </div>
          </ul>
        </div>
      </div>
      <div className="footer-center">
        Copyright &#169; savegaza.com | All rights reserved
      </div>
    </>
  )
}

export default Footer