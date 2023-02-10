import React from 'react';
import AppLayout from './components/AppLayout/AppLayout';
import { AuthProvider } from './context/AuthContext/AuthProvider';
import { DialogProvider } from './context/DialogsContext/DialogProvider';

export const App = () => (
  <AuthProvider>
    <DialogProvider>
      <AppLayout />
    </DialogProvider>
  </AuthProvider>

);
