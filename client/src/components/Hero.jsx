import React, { useState } from 'react';
import '../styles/style.css'
import { Box, Typography, Button } from '@mui/material';
import SearchResults from './SearchResult';
import AddCar from './AddCar';
import Footer from './Footer';
const HeroSection = () => {
    const [query, setQuery] = useState({
        
    });

    const handleChange = (e) => {
        setQuery(e.target.value);
    };
        console.log(query)
    return (
        <>
            <section className="section hero container" id="home">
                <div className="hero-container">
                    <div className="hero-content">
                        <h2 className="h1 hero-title">The easy way to takeover a lease</h2>
                        <p className="hero-text"> Live in New York, New Jersey, and Connecticut! 

                        </p>
                    </div>

                    <div className="hero-banner"></div>
                    {/* <form className="hero-form">
                        <div className="input-wrapper">
                            <label htmlFor="input-1" className="input-label">Car, model, or brand</label>
                            <input type="text" name="car-model" id="input-1" className="input-field"
                                placeholder="What car are you looking for?" onChange={handleChange} />
                        </div>

                        <div class="input-wrapper">
                            <label for="input-2" className="input-label">Max. monthly payment</label>
                            <input type="text" name="monthly-pay" id="input-2" className="input-field" 
                            placeholder="Add an amount in $" onChange={handleChange}/>
                        </div>

                        <div className="input-wrapper">
                            <label for="input-3" className="input-label">Make Year</label>
                            <input type="text" name="year" id="input-3" className="input-field" 
                            placeholder="Add a minimal make year" onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn hero-search-btn">Search</button>
                    </form> */}
                </div>
            </section>
            {/* <AddCar /> */}
            
            {/* <SearchResults query={query} /> */}
        </>
    );
};

export default HeroSection;
