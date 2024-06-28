import React from 'react'
import Home from './pages/Home'
import Login from './components/Login'
import AddCar from './components/AddCar'
import CarDetails from './components/CarDetails'
// import UserProfile from './components/UserProfile'
import AboutUs from './pages/About'
import ContactUs from './pages/Contact'
import VerifyCode from './components/VerifyCode'

import SignupPage from './components/SignupPage'

// admin components 
import Admin from './components/admin/AdminDashboard'
import AdminCars from './components/admin/AdminCars'
import AdminUsers from './components/admin/AdminUsers'
import EditCar from './components/EditCar'

import './styles/style.css'
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin-cars/add-car",
    element: <AddCar />
  },
  {
    path: "admin",
    element: <Admin />
  },
  {
    path: "verifyCode",
    element: <VerifyCode />
  },
  
  {
    path: "admin-cars",
    element: <AdminCars />
  },
  {
    path: "/admin/edit-car/:carId",
    element: <EditCar />
  },
  {
    path: "admin-users",
    element: <AdminUsers />
  },
  // {
  //   path: "/car-details/:id", // Assuming car details are fetched based on car ID
  //   element: <CarDetails />
  // },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
]);

const App = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
    
  )
}

export default App
 