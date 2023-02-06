import React, { Component } from 'react';
import './Header.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../ui-kit/components/Button/Button';
import { withProvider } from '../../hocs/withProvider';

class Header extends Component {
  render() {
    const { openAside, handleLogOut } = this.props;
    return (

      <header>
        <Button onClick={openAside} type="button" text="Nav bar" />
        <Link onClick={handleLogOut} to="/signin">Log Out</Link>

      </header>

    );
  }
}
export default withProvider(Header);
