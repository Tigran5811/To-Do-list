import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Consumer } from '../../context/AuthContext';

export class PublicRoute extends Component {
  render() {
    return (
      <Consumer>
        {
          ({ token }) => {
            const { children } = this.props;
            if (token) {
              return <Navigate to="/" />;
            }
            return children;
          }
        }
      </Consumer>
    );
  }
}
