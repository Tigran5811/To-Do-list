import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Input } from '../../../components/Input/Input';
import styles from './Login.module.scss';
import { Button } from '../../../components/Button/Button';
import { withRouter } from '../../../hocs/withRouter';
import { Consumer } from '../../../context/AuthContext';

const cx = classNames.bind(styles);

class Login extends Component {
  state = {
    login: '',
    password: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e, handleLogIn) => {
    e.preventDefault();
    const { login, password } = this.state;
    const { navigate } = this.props;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUsers = users.find((item) => item.login === login && item.password === password);

    if (foundUsers) {
      handleLogIn(true);
      return navigate('/');
    }

    return navigate('/login');
  };

  render() {
    const { login, password } = this.state;
    return (
      <Consumer>
        { ({ handleLogIn }) => (
          <div className={cx('container')}>
            <form onSubmit={(event) => {
              this.onSubmit(event, handleLogIn);
            }}
            >
              <Input value={login} onChange={this.onChange} placeholder="Email" type="text" name="login" />
              <Input value={password} onChange={this.onChange} placeholder="password" type="text" name="password" />
              <Button disabled={!login || !password} type="submit" text="Log In" />
            </form>
            <Link to="/register">Register</Link>
          </div>
        )}
      </Consumer>

    );
  }
}

export default withRouter(Login);
