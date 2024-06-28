import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/cars/${id}`);
        setCar(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-details-container">
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CarDetails;
