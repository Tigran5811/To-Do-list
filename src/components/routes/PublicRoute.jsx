import React from 'react';
import { Navigate } from 'react-router-dom';
import { Consumer } from '../../context/AuthContext';

export const PublicRoute = ({ children }) => (
  <Consumer>
    {
      ({ token }) => {
        if (token) {
          return <Navigate to="/" />;
        }
        return children;
      }
    }
  </Consumer>
);
