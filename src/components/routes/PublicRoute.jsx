import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export class PublicRoute extends Component {
  render() {
    const token = localStorage.getItem('token');
    const { children } = this.props;
    if (token) {
      return <Navigate to="/" />;
    }
    return children;
  }
}
