import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FavoriteCars = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:4000/api/favorites', {
                headers: { Authorization: token }
            });
            setFavorites(response.data);
        };
        fetchFavorites();
    }, []);

    return (
        <div>
            <h2>Favorite Cars</h2>
            <ul>
                {favorites.map((car) => (
                    <li key={car.id}>
                        {car.make} {car.model} ({car.year}) - ${car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteCars;
