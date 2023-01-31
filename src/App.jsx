import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Counter } from './pages/Counter/Counter';
import { Home } from './pages/Home/Home';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import { PrivateRoute } from './components/routes/PrivateRoute';
import { PublicRoute } from './components/routes/PublicRoute';
import Users from './pages/Users/Users';
import { NotFound404 } from './pages/404/404';
import User from './pages/User/User';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<PrivateRoute><Counter /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
          <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
