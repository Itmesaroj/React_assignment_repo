// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const isAuthenticated = localStorage.getItem('token'); 
  if(!isAuthenticated){
    return <Navigate to="/Login"/>
  }
  return children;
};

export default PrivateRoute;
