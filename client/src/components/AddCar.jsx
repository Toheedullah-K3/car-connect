import React, { useState } from 'react';
import axios from 'axios';

const AddCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('make', formData.make);
    data.append('model', formData.model);
    data.append('year', formData.year);
    data.append('price', formData.price);
    data.append('image', formData.image);
    
    try {
      const response = await axios.post('http://localhost:4000/api/cars', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Car added successfully!');
    } catch (err) {
      console.error(err.response.data);
      console.log(err);
      alert('Error adding car');
    }
  };

  return (
    <div className="add-car-container">
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Make:</label>
          <input type="text" name="make" value={formData.make} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Model:</label>
          <input type="text" name="model" value={formData.model} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input type="number" name="year" value={formData.year} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" name="image" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="btn">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
