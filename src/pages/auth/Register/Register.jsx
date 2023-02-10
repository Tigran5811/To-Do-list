import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Input } from '../../../ui-kit/components/Input/Input';
import styles from './Register.module.scss';
import { Button } from '../../../ui-kit/components/Button/Button';
import { withRouter } from '../../../hocs/withRouter';
import { API } from '../../../api';

const cx = classNames.bind(styles);

const Register = ({ navigate }) => {
  const [{
    username, password, firstName, lastName, age, email,
  }, setStat] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
    email: '',
  });

  const onChange = ({ currentTarget: { value, name } }) => {
    setStat((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await API.auth.signUp({
      username, password, firstName, lastName, age, email,
    });
    return navigate('/verify-email');
  };

  return (
    <div className={cx('container')}>
      <form onSubmit={onSubmit}>
        <Input value={username} onChange={onChange} placeholder="User Name" type="text" name="username" />
        <Input value={password} onChange={onChange} placeholder="Password" type="text" name="password" />
        <Input value={firstName} onChange={onChange} placeholder="First Name" type="text" name="firstName" />
        <Input value={lastName} onChange={onChange} placeholder="Last Name" type="text" name="lastName" />
        <Input value={age} onChange={onChange} placeholder="Age" type="text" name="age" />
        <Input value={email} onChange={onChange} placeholder="Email" type="text" name="email" />
        <Button disabled={(!username || !password) || (!firstName || !lastName) || (!age || !email)} type="submit" text="Register" />
      </form>
      <Link to="/signin">Log In</Link>
    </div>
  );
};

export default withRouter(Register);
