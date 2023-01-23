import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link, Navigate } from 'react-router-dom';
import { Input } from '../../../components/Input/Input';
import styles from './Register.module.scss';
import { Button } from '../../../components/Button/Button';

const cx = classNames.bind(styles);

export class Register extends Component {
  state = {
    login: '',
    password: '',
    name: '',
    age: '',
    isLoggedIn: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      login, password, name, age,
    } = this.state;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      login, password, name, age,
    });
    localStorage.setItem('users', JSON.stringify(users));
    if (users.length > 0) {
      localStorage.setItem('token', true);
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    const {
      login, password, isLoggedIn, name, age,
    } = this.state;

    return isLoggedIn ? <Navigate to="/" /> : (
      <div className={cx('container')}>
        <form onSubmit={this.onSubmit}>
          <Input value={login} onChange={this.onChange} placeholder="Email" type="text" name="login" />
          <Input value={password} onChange={this.onChange} placeholder="Password" type="text" name="password" />
          <Input value={name} onChange={this.onChange} placeholder="Name" type="text" name="name" />
          <Input value={age} onChange={this.onChange} placeholder="Age" type="text" name="age" />
          <Button disabled={(!login || !password) || (!name || !age)} type="submit" text="Register" />
        </form>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
}
