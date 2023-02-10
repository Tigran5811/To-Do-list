import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Input } from '../../../ui-kit/components/Input/Input';
import styles from './Login.module.scss';
import { Button } from '../../../ui-kit/components/Button/Button';
import { withRouter } from '../../../hocs/withRouter';
import { withProvider } from '../../../hocs/withProvider';
import { API } from '../../../api';

const cx = classNames.bind(styles);

const Login = ({ navigate, handleLogIn }) => {
  const [{ email, password }, setState] = useState({
    email: '',
    password: '',
  });

  const onChange = ({ currentTarget: { value, name } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e, handleLogIn) => {
    e.preventDefault();
    const user = await API.auth.signIn({ email, password });
    if (user) {
      handleLogIn(user.token);
      return navigate('/');
    }

    return navigate('/signin');
  };

  return (
    <div className={cx('container')}>
      <form onSubmit={(event) => {
        onSubmit(event, handleLogIn);
      }}
      >
        <Input value={email} onChange={onChange} placeholder="Email" type="text" name="email" />
        <Input value={password} onChange={onChange} placeholder="password" type="text" name="password" />
        <Button disabled={!email || !password} type="submit" text="Sign In" />
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default withRouter(withProvider(Login));
