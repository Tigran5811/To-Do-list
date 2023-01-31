import React, { Component } from 'react';
import { API } from '../../api';
import { withRouter } from '../../hocs/withRouter';

class User extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const { id } = this.props.searchParams;
    const user = await API.user.getUser(+id);
    this.setState({ user });
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <h1>{user.id}</h1>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
      </div>
    );
  }
}

export default withRouter(User);
