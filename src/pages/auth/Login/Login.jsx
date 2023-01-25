import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link, Navigate } from 'react-router-dom';
import { Input } from '../../../components/Input/Input';
import styles from './Login.module.scss';
import { Button } from '../../../components/Button/Button';

const cx = classNames.bind(styles);
export class Login extends Component {
  state = {
    login: '',
    password: '',
    isLoggedIn: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUsers = users.find((item) => item.login === login && item.password === password);
    if (foundUsers) {
      localStorage.setItem('token', true);
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    const { login, password, isLoggedIn } = this.state;
    return isLoggedIn ? <Navigate to="/" /> : (
      <div className={cx('container')}>
        <form onSubmit={this.onSubmit}>
          <Input value={login} onChange={this.onChange} placeholder="Email" type="text" name="login" />
          <Input value={password} onChange={this.onChange} placeholder="password" type="text" name="password" />
          <Button disabled={!login || !password} type="submit" text="Log In" />
        </form>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}
