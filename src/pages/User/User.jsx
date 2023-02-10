import React, { useEffect, useState } from 'react';
import { API } from '../../api';
import { withRouter } from '../../hocs/withRouter';

const User = ({ searchParams }) => {
  const [user, setUser] = useState({});
  const getUser = async () => {
    const { id } = searchParams;
    const user = await API.user.getUser(id);
    setUser({ user });
  };
  useEffect(() => {
    getUser();
  });

  return (
    <div>
      <h1>{user.id}</h1>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </div>
  );
};

export default withRouter(User);
