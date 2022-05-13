import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;