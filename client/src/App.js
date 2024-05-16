import React from 'react'
import Home from './pages/Home'
import Login from './components/Login'

import SignupPage from './components/SignupPage'
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
   element: <Login/>
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
 