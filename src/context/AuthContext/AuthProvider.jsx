import React, { Component } from 'react';
import { Provider } from './index';

export class AuthProvider extends Component {
  state = {
    token: null,
  };

  componentDidMount() {
    this.setState({ token: localStorage.getItem('token') });
  }

  handleLogOut = () => {
    localStorage.removeItem('token');
    this.setState({ token: null });
  };

  handleLogIn = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    this.setState({ token });
  };

  render() {
    const { children } = this.props;
    const { token } = this.state;
    return (
      <Provider value={{
        token,
        handleLogOut: this.handleLogOut,
        handleLogIn: this.handleLogIn,
      }}
      >
        {children}
      </Provider>
    );
  }
}
