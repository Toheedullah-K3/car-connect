import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

const EditCar = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/cars/${carId}`);
        setFormData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCar();
  }, [carId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4000/api/cars/${carId}`, formData);
      navigate('/admin/cars');
      console.log(formData)
    } catch (err) {
      console.error(err);
      console.log(formData)
    }
    // window.location.assign('admin-cars')
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Edit Car
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="make"
            label="Make"
            value={formData.make}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="model"
            label="Model"
            value={formData.model}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="year"
            label="Year"
            value={formData.year}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="price"
            label="Price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
            required
          />
          {/* <TextField
            name="image"
            label="Image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
          /> */}
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
            Update Car
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EditCar;
