import React from 'react'
import Navbar from '../components/Navbar'
import con1 from '../images/cu.jpg'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <div className='contact-div1'>
        <img src={con1} alt='contact1' className='contact-pic1' />
        <div className='contact-div2'>
          <h1 className='contact-heading1'>CONTACT US</h1>
          <p className='contact-text1'>Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam</p>
        </div>
      </div>

      <div className='contact-div3'>
        

        <div className='contact-div4'>
          <div>
            <h2>Location</h2>
            <p>2345 Divi St
              San Francisco, CA 94222</p>
          </div>
          <div>
            <h2>Phone</h2>
            <p>(888) 123-4562</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>info@diviauto.com</p>

          </div>

          <div>
            <h2>Open Hours</h2>
            <ul>
              <li>Mon:10am – 7pm</li>
              <li>Tue:10am – 7pm</li>
              <li>Wed:10am – 7pm</li>
              <li>Thur:10am – 7pm</li>
              <li>Fri: Closed</li>
              <li>Sat:10am – 7pm</li>
              <li>Sun:10am – 7pm</li>
            </ul>
          </div>
        </div>
        <div className='contact-div5'>
          <form action=""  className='contact-form'>
            <h1>Send A Message</h1>

            <label for="email"  ><b>Name</b>
              <input type="text" placeholder="Enter Name"  name="name" required  className='contact-input'/>
            </label>
            <label for="email"><b>Email</b>
              <input type="text" placeholder="Enter Email" name="email" required className='contact-input'/>
            </label>
            <label for="psw"><b> Message</b>
              <input type="text" placeholder="Enter Message" name="message" className='contact-input' />
            </label>

            <button type="submit" class="btn-contact">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default ContactUs

