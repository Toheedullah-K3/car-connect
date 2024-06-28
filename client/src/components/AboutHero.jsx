import React from 'react'
import ab from '../images/ab1.jpg'
import ab1 from '../images/ab7.jpg'
import cutter from '../images/cutter.svg'

const AboutHero = () => {
  return (
    <div>
      <div className='div-header'>
        <h1 className='about-heading1'>ABOUT US</h1>
      </div>
        
      <div className='div2'>
        <h1 className='about-head1'>A Leading Car Dealer For Over 22 Years</h1>
        <p className='about-text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lobortis justo, ut iaculis nulla. Donec varius magna ut turpis luctus aliquet. Nulla mauris eros, molestie non commodo eget, molestie ut nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis porttitor augue nibh, ut molestie tortor interdum vel. Aenean volutpat ultrices eros, non sodales lectus ultrices eu.<br /><br />

          Nullam scelerisque arcu lacus, at porttitor ex vestibulum semper. Phasellus luctus luctus facilisis. Vestibulum auctor ante velit, at sollicitudin tellus placerat qui.</p>
      </div>

      <div className='div3'>
        <img src={cutter} className='about-pic3' />
        <img src={ab1} alt='about-main2' className='about-pic2' />
        <div className='div3-text'>
          <h1 className='about-head2'>SINCE 2002</h1>
          <p className='about-text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu velit rutrum, dignissim neque quis, venenatis nunc. Aliquam sodales neque quis arcu lacinia, in egestas metus semper. Mauris convallis lobortis ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu velit rutrum, dignissim neque quis, venenatis nunc. Aliquam sodales neque quis arcu lacinia, in egestas metus semper. Mauris convallis</p>
          <p className='about-text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu velit rutrum, dignissim neque quis, venenatis nunc. Aliquam sodales neque quis arcu lacinia, in egestas metus semper. Mauris convallis lobortis ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu velit rutrum, dignissim neque quis, venenatis nunc. Aliquam sodales neque quis arcu lacinia, in egestas metus semper. Mauris convallis</p>
        </div>
      </div>

      <div className='div4'>
        <div>
          <h1>150+</h1>
          <p>Vehicles in Stock</p>
        </div>

        <div>
          <h1>5000+</h1>
          <p>Vehicles Sold</p>
        </div>

        <div>
          <h1>22</h1>
          <p>Years in Business</p>
        </div>

      </div>
      {/* <Footer/>   */}
    </div>
  )
}

export default AboutHero
