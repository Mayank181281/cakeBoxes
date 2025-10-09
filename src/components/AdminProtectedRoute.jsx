import React from 'react';
import { Navigate } from 'react-router-dom';
import { ADMIN_AUTH_KEY } from '../config/adminConfig';

const AdminProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem(ADMIN_AUTH_KEY) === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
