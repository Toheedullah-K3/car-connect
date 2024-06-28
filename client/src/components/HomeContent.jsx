import React from 'react'
import hc0 from "../images/hc.jpg"
import { Link } from "react-router-dom"
const HomeContent = () => {
    return (
        <>
            <div className='hc-div1 container'>
                <img src={hc0} alt='' className='home-content-pic1' />
                <div className='hc-div2'>
                    <h3>Know About Us</h3>
                    <h1>We Make Your Drive Memorable.</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Illum Iusto Minima Quo, Recusandae Perspiciatis Aspernatur, Rerum Tempora Vitae Aperiam Enim, Dicta Maxime? Eum Repellat Velit Perspiciatis Eligendi Rerum Voluptate Repellendus.</p>
                    <Link to= "about-us" className='hc-btn btn'>Discover More</Link>
                </div>
            </div>


            <div className='hc-div3'>
                <h3>What We Offer</h3>
                <h1>Our Services</h1>
            </div>
            <div className='hc-div4'>
                <div className='hc-div4-1'>
                    <h1>Variety Of Cars</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit.</p>
                </div>
                <div className='hc-div4-2'>
                    <h1>Best Price Guarantee</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit.</p>
                </div>
                <div className='hc-div4-3'>
                    <h1>Available 24 X 7</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit.</p>
                </div>
            </div>
            <div className='hc-div5'>
                <div className='hc-div5-1'>
                    <h1>Phone Reservation</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit.</p>
                </div>
                <div className='hc-div5-2'>
                    <h1>Best Quality Cars</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit.</p>
                </div>
                <div className='hc-div5-3'>
                    <h1>Variety Of Cars</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit.</p>
                </div>
            </div>
        </>
    )
}

export default HomeContent