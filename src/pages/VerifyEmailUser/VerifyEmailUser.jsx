import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { API } from '../../api';
import { withRouter } from '../../hocs/withRouter';
import styles from './VerifyEmailUser.module.scss';
import { Input } from '../../ui-kit/components/Input/Input';
import { Button } from '../../ui-kit/components/Button/Button';

const cx = classNames.bind(styles);
class VerifyEmailUser extends Component {
  state = {
    token: '',
  };

  onChange = (e) => {
    this.setState({ token: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { token } = this.state;
    const { navigate } = this.props;
    await API.auth.VerifyEmail({ token });
    return navigate('/signin');
  };

  render() {
    const { token } = this.state;

    return (
      <div className={cx('container')}>
        <form onSubmit={this.onSubmit}>
          <Input value={token} onChange={this.onChange} placeholder="Token" type="text" name="token" />
          <Button disabled={!token} type="submit" text="Authorization" />
        </form>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default withRouter(VerifyEmailUser);
