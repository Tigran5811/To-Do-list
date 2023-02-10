import React, { useEffect, useState } from 'react';
import { API } from '../../api/index';
import { Table } from '../../components/Table/Table';
import { withRouter } from '../../hocs/withRouter';
import { usersColumns } from './constant';
import styles from './Users.module.scss';
import { getMapUsers } from './utils';

const Users = ({ navigate }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const users = await API.user.getUsers();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  });

  const onUsersRowClick = (userData) => {
    // navigate(`/user/${userData.col1}`);
    navigate(`/user?id=${userData.col1}`);
  };

  return (
    <div className={styles.contTable}>
      <Table
        data={getMapUsers(users)}
        columns={usersColumns}
        onRowClick={onUsersRowClick}
      />
    </div>
  );
};

export default withRouter(Users);
