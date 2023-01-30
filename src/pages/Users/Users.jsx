import React, { Component } from 'react';
import { API } from '../../api/index';
import { Aside } from '../../components/Aside/Aside';
import { Header } from '../../components/Header/Header';
import { Table } from '../../components/Table/Table';
import styles from './Users.module.scss';

export class Users extends Component {
  state = {
    isOpenAside: false,
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const users = await API.user.getUsers();
    this.setState({ users });
  };

  handleToggleAside = () => {
    const { isOpenAside } = this.state;
    this.setState({ isOpenAside: !isOpenAside });
  };

  handleLogOut = () => {
    localStorage.removeItem('token');
  };

  render() {
    const { isOpenAside, users } = this.state;
    return (
      <div className={styles.box}>
        <Aside isOpenAside={isOpenAside} />
        <div className={styles.cont}>
          <Header openAside={this.handleToggleAside} logOut={this.handleLogOut} />
          <Table data={users} />
        </div>
      </div>
    );
  }
}
