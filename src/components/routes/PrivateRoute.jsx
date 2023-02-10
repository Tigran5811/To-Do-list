import React from 'react';
import { Navigate } from 'react-router-dom';
import { Consumer } from '../../context/AuthContext';

export const PrivateRoute = ({ children }) => (
  <Consumer>
    {
      ({ token }) => {
        if (!token) {
          return <Navigate to="/signin" />;
        }
        return children;
      }
    }
  </Consumer>
);
