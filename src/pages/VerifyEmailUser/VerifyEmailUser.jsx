import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { API } from '../../api';
import { withRouter } from '../../hocs/withRouter';
import styles from './VerifyEmailUser.module.scss';
import { Input } from '../../ui-kit/components/Input/Input';
import { Button } from '../../ui-kit/components/Button/Button';

const cx = classNames.bind(styles);

const VerifyEmailUser = ({ navigate }) => {
  const [token, setToken] = useState('');

  const onChange = (e) => {
    setToken({ token: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await API.auth.VerifyEmail({ token });
    return navigate('/signin');
  };

  return (
    <div className={cx('container')}>
      <form onSubmit={onSubmit}>
        <Input value={token} onChange={onChange} placeholder="Token" type="text" name="token" />
        <Button disabled={!token} type="submit" text="Authorization" />
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default withRouter(VerifyEmailUser);
