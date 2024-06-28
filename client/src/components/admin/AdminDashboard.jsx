// src/components/Admin/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';

import AdminNavbar from '../AdminNavbar'

const AdminDashboard = () => {
  return (
    <>
    <AdminNavbar />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{
        fontSize: '30px',
        backgroundColor: ''
      }}>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Cars Management */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: 200,
              justifyContent: 'center',
            }}
          >
            <DirectionsCarIcon style={{ fontSize: 60 }} />
            <Typography variant="h6" gutterBottom>
              Manage Cars
            </Typography>
            <Link to="/admin-cars" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="subtitle1" >View Cars</Typography>
            </Link>
          </Paper>
        </Grid>
        {/* Users Management */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: 200,
              justifyContent: 'center',
            }}
          >
            <PeopleIcon style={{ fontSize: 60 }} />
            <Typography variant="h6" gutterBottom>
              Manage Users
            </Typography>
            <Link to="admin-users" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="subtitle1">View Users</Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default AdminDashboard;
