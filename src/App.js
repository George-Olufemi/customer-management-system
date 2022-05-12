import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<LandingPage />} />
        <Route to="/signUp" element={<SignUp />} />
        <Route to="/login" element={<Login />} />
        <Route to="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;