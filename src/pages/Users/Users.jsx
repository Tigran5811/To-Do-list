import React, { Component } from 'react';
import { API } from '../../api/index';
import { Aside } from '../../components/Aside/Aside';
import { Header } from '../../components/Header/Header';
import { Table } from '../../components/Table/Table';
import { withRouter } from '../../hocs/withRouter';
import { usersColumns } from './constant';
import styles from './Users.module.scss';
import { getMapUsers } from './utils';

class Users extends Component {
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

  onUsersRowClick = (userData) => {
    const { navigate } = this.props;
    // navigate(`/user/${userData.col1}`);
    navigate(`/user?id=${userData.col1}`);
  };

  render() {
    const { isOpenAside, users } = this.state;

    return (
      <div className={styles.box}>
        <Aside isOpenAside={isOpenAside} />
        <div className={styles.cont}>
          <Header openAside={this.handleToggleAside} logOut={this.handleLogOut} />
          <div className={styles.contTable}>
            <Table
              data={getMapUsers(users)}
              columns={usersColumns}
              onRowClick={this.onUsersRowClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Users);
