import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminCars from '../components/admin/AdminCars';
import AdminUsers from '../components/admin/AdminUsers';
// import Navbar from '../components/Navbar'; 

const Admin = () => {
  return (
   <>
  
   
    <div className="admin-page">
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="admin-cars" element={<AdminCars />} />
        <Route path="admin-users" element={<AdminUsers />} />
      </Routes>
    </div>
    </>
  );
};

export default Admin;
