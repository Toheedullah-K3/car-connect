import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            const response = await axios.get('http://localhost:4000/api/cars');
            setCars(response.data);
        };
        fetchCars();
    }, []);

    return (
        <div>
            <h2>Car Listings</h2>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.make} {car.model} ({car.year}) - ${car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
