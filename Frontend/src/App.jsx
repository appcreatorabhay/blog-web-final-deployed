import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast';
import Blogs from "../src/Pages/Blogs";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import Dashboard from "../src/Pages/Dashboard";
import Creators from "./Pages/Creators";
import Detail from "./Pages/Detail";
import UpdateBlog from "./Dashboard/UpdateBlog";
import {Navigate,Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./Context/AuthProvider";

import NotFound from "./Pages/Notfound";

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(
    location.pathname
  );
const { blogs, isAuthenticated } = useAuth();
  let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage to maininting the routes protect (Go to login.jsx)
  console.log(blogs);
  console.log(isAuthenticated); // it is not using because every page refresh it was redirected to /login





  return (
    <div>
       {!hideNavbarFooter && <Navbar />}
        <Routes>

        <Route
          exact
          path="/"
          element={token ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/creators" element={<Creators />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
         {/* Single page route */}
        <Route exact path="/blog/:id" element={<Detail />} />

        {/* Update page route */}
        <Route exact path="/blog/update/:id" element={<UpdateBlog />} />

        {/* Universal route */}
        <Route path="*" element={<NotFound />} />


        </Routes>










        
         {!hideNavbarFooter && <Footer />}  
      <Toaster />

    </div>
  )
}

export default App
