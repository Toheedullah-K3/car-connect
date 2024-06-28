import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AdminNavbar from "../AdminNavbar"

const AdminCars = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/cars');
        setCars(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (carId) => {
    try {
      await axios.delete(`http://localhost:4000/api/cars/${carId}`);
      setCars(cars.filter((car) => car.id !== carId));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = (carId) => {
    navigate(`/admin/edit-car/${carId}`);
  };

  return (
    <>
    <AdminNavbar/>
    
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Manage Cars
      </Typography>
      <Link to="/admin-cars/add-car" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          Add Car
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>
                  <img src={`http://localhost:4000/${car.image}`} alt={car.model} style={{ width: '100px' }} />
                </TableCell>
                <TableCell>{car.make}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>${car.price}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" sx={{ mr: 1 }} onClick={() => handleUpdate(car.id)}>
                    Update
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(car.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </>
  );
};

export default AdminCars;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';

// const AdminCars = () => {
//   const [cars, setCars] = useState([]);

// const handleDelete = async (carId) => {
//   try {
//     await axios.delete(`http://localhost:4000/api/cars/${carId}`);
//     setCars(cars.filter((car) => car.id !== carId));
//   } catch (err) {
//     console.error(err);
//   }
// };

// const handleUpdate = (carId) => {
//   navigate(`/admin/edit-car/${carId}`);
// };
//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/cars');
//         setCars(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchCars();
//   }, []);

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Manage Cars
//       </Typography>
//       <Link to="add-car" variant="contained" className="btn add-btn" color="primary" sx={{ mb: 2 }}>
//         Add Car
//       </Link>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Image</TableCell>
//               <TableCell>Make</TableCell>
//               <TableCell>Model</TableCell>
//               <TableCell>Year</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {cars.map((car) => (
//               <TableRow key={car.id}>
//                 <TableCell>
//                   <img src={`http://localhost:4000/${car.image}`} alt={car.model} style={{ width: '100px' }} />
//                   <h1> {car.image} </h1> 
//                 </TableCell>
//                 <TableCell>{car.make}</TableCell>
//                 <TableCell>{car.model}</TableCell>
//                 <TableCell>{car.year}</TableCell>
//                 <TableCell>${car.price}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="secondary" sx={{ mr: 1 }}>
//                     Update
//                   </Button>
//                   <Button variant="contained" color="error">
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default AdminCars;
