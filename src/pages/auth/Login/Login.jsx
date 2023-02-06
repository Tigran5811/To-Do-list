import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Input } from '../../../ui-kit/components/Input/Input';
import styles from './Login.module.scss';
import { Button } from '../../../ui-kit/components/Button/Button';
import { withRouter } from '../../../hocs/withRouter';
import { withProvider } from '../../../hocs/withProvider';
import { API } from '../../../api';

const cx = classNames.bind(styles);

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e, handleLogIn) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { navigate } = this.props;
    const user = await API.auth.signIn({ email, password });
    if (user) {
      handleLogIn(user.token);
      return navigate('/');
    }

    return navigate('/signin');
  };

  render() {
    const { email, password } = this.state;
    const { handleLogIn } = this.props;
    return (
      <div className={cx('container')}>
        <form onSubmit={(event) => {
          this.onSubmit(event, handleLogIn);
        }}
        >
          <Input value={email} onChange={this.onChange} placeholder="Email" type="text" name="email" />
          <Input value={password} onChange={this.onChange} placeholder="password" type="text" name="password" />
          <Button disabled={!email || !password} type="submit" text="Sign In" />
        </form>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default withRouter(withProvider(Login));
