import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from '../LandingPage';
import SignUp from '../SignUp';
import Login from '../Login';
import Dashboard from '../Dashboard';
import NoMatch from '../NoMatch'; 
import { AnimatePresence } from 'framer-motion';
import Product from '../Product';
import Client from '../Client';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/client" element={<Client />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;