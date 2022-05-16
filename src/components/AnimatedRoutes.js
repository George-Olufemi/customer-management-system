import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from '../LandingPage';
import SignUp from '../SignUp';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Chart from '../Chart';
import NoMatch from '../NoMatch'; 
import { AnimatePresence } from 'framer-motion';
import Product from '../Product';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
            <Route path="/chart" element={<Chart />} />
=======
            <Route path="/product" element={<Product />} />
>>>>>>> 14b8dc69face7822a64e2d772c688f77791542c6
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;