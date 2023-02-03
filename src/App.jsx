import React, { Component } from 'react';
import { AppLayout } from './components/AppLayout/AppLayout';
import { AuthProvider } from './context/AuthContext/AuthProvider';

export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AppLayout />
      </AuthProvider>

    );
  }
}
