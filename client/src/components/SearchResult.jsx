import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchResults = ({ query }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const response = await axios.get(`http://localhost:4000/api/cars/search?query=${query}`,);
            setResults(response.data);
        };
        fetchResults();
    }, [query]);

    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {results.map((car) => (
                    <li key={car.id}>
                        {car.make} {car.model} ({car.year}) - ${car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
