import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorge';

const PrivateRoute = () => {
  const [loggedInUser] = useLocalStorage('loggedInUser', null);
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
