import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Input } from '../../../ui-kit/components/Input/Input';
import styles from './Register.module.scss';
import { Button } from '../../../ui-kit/components/Button/Button';
import { withRouter } from '../../../hocs/withRouter';
import { API } from '../../../api';

const cx = classNames.bind(styles);

class Register extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
    email: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const {
      username, password, firstName, lastName, age, email,
    } = this.state;
    const {
      navigate,
    } = this.props;
    await API.auth.signUp({
      username, password, firstName, lastName, age, email,
    });

    // const users = JSON.parse(localStorage.getItem('users') || '[]');
    // users.push({
    //   username, password, firstName, lastName, age, email,
    // });
    // localStorage.setItem('users', JSON.stringify(users));
    return navigate('/verify-email');
  };

  render() {
    const {
      username, password, firstName, lastName, age, email,
    } = this.state;

    return (
      <div className={cx('container')}>
        <form onSubmit={this.onSubmit}>
          <Input value={username} onChange={this.onChange} placeholder="User Name" type="text" name="username" />
          <Input value={password} onChange={this.onChange} placeholder="Password" type="text" name="password" />
          <Input value={firstName} onChange={this.onChange} placeholder="First Name" type="text" name="firstName" />
          <Input value={lastName} onChange={this.onChange} placeholder="Last Name" type="text" name="lastName" />
          <Input value={age} onChange={this.onChange} placeholder="Age" type="text" name="age" />
          <Input value={email} onChange={this.onChange} placeholder="Email" type="text" name="email" />
          <Button disabled={(!username || !password) || (!firstName || !lastName) || (!age || !email)} type="submit" text="Register" />
        </form>
        <Link to="/signin">Log In</Link>
      </div>
    );
  }
}

export default withRouter(Register);
