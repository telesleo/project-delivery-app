import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CustomerProducts from '../pages/CustomerProducts';

export default function RouteDelivery() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
    </Routes>
  );
}
