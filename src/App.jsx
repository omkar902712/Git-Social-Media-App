import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import ForgotPassword from './Pages/ForgotPassword/FogotPassword';
import Register from './Pages/Register/Register';

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import UserImages from './Pages/UserImages/UserImages';

function App() {
  return (
    <BrowserRouter>
      {/* ✅ ALWAYS SHOW NAVBAR */}
      <Navbar />
      
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/userimages" element={<UserImages/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;