import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Consumer } from '../../context/AuthContext';
import { NotFound404 } from '../../pages/404/404';
import Login from '../../pages/auth/Login/Login';
import Register from '../../pages/auth/Register/Register';
import { Counter } from '../../pages/Counter/Counter';
import { Home } from '../../pages/Home/Home';
import User from '../../pages/User/User';
import Users from '../../pages/Users/Users';
import { Aside } from '../Aside/Aside';
import { Header } from '../Header/Header';
import { PrivateRoute } from '../routes/PrivateRoute';
import { PublicRoute } from '../routes/PublicRoute';
import styles from './AppLayout.module.scss';

export class AppLayout extends Component {
  state = {
    isOpenAside: false,
  };

  handleToggleAside = () => {
    const { isOpenAside } = this.state;
    this.setState({ isOpenAside: !isOpenAside });
  };

  render() {
    const { isOpenAside } = this.state;
    return (
      <Consumer>
        {
          ({ token }) => (
            <BrowserRouter>
              { token && <Aside isOpenAside={isOpenAside} />}
              <div className={styles.container}>
                { token && <Header openAside={this.handleToggleAside} />}
                <main>
                  <Routes>
                    <Route path="/counter" element={<PrivateRoute><Counter /></PrivateRoute>} />
                    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
                    <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
                    <Route path="*" element={<NotFound404 />} />
                  </Routes>
                </main>
              </div>
            </BrowserRouter>
          )
        }
      </Consumer>
    );
  }
}
