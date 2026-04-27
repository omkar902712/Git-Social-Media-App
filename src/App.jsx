import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/ForgotPassword/FogotPassword';
import Register from './Pages/Register/Register';

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />     
        
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path='/register' element={<Register />} />        
        
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;