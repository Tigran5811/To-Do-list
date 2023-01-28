import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export class PrivateRoute extends Component {
  render() {
    const token = localStorage.getItem('token');
    const { children } = this.props;
    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  }
}
